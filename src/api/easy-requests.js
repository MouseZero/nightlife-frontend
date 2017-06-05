const _createFetchOptions = (method, token, body) => {
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  if (token) headers['x-access-token'] = token
  let result = { method, headers }
  if (method != 'GET') result.body = body
  return result
}

const _createUrlEncodedBody = (objectBody) => {
  let formBody = []
  for (let property in objectBody) {
    let encodedKey = encodeURIComponent(property)
    let encodedValue = encodeURIComponent(objectBody[property])
    formBody.push(encodedKey + '=' + encodedValue)
  }
  return formBody.join('&')
}

const _easyRequest = fetch => async (body, url, method, token) => {
  const formBody = _createUrlEncodedBody(body)
  const fetchOptions = _createFetchOptions(method, token, formBody)
  if (method === 'GET' && formBody) url = url + '?' + formBody
  const answer = await fetch(url, fetchOptions)
  return await answer.json()
}

const _post = fetch => (body, url, token) =>
  _easyRequest(fetch)(body, url, 'POST', token)

const _get = fetch => (body, url, token) =>
  _easyRequest(fetch)(body, url, 'GET', token)

const _remove = fetch => (body, url, token) =>
  _easyRequest(fetch)(body, url, 'DELETE', token)

const easyRequest = (fetch) => {
  return {
    post: _post(fetch),
    get: _get(fetch),
    remove: _remove(fetch)
  }
}

export default easyRequest
