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

const post = fetch => (body, url, token) =>
  _easyRequest(fetch)(body, url, 'POST', token)

const get = fetch => (body, url, token) =>
  _easyRequest(fetch)(body, url, 'GET', token)

const defaultExport = () => {
  //here it would be getting the global fetch in the browser
  return {
    post: post(fetch),
    get: get(fetch)
  }
}

export {
  defaultExport as default,
  post,
  get
}
