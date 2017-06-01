const _createFetchOptions = (method, token, body) => {
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  if (token) headers['x-access-token'] = token
  return {
    method,
    headers,
    body
  }
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

const easyRequest = fetch => async (body, url, method = 'POST', token) => {
  const formBody = _createUrlEncodedBody(body)
  const fetchOptions = _createFetchOptions(method, token, formBody)
  const answer = await fetch(url, fetchOptions)
  return await answer.json()
}

const post = fetch => (body, url, token) => easyRequest(fetch)(body, url, 'POST', token)

const defaultExport = () => {
  return {
    post: post(fetch)
  }
}

export {
  defaultExport as default,
  easyRequest,
  post
}
