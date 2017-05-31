async function _tryAsyncBlock(block) {
  var error
  try {
    await block()
  } catch (e) {
    error = e
  }
  return error
}

const asyncThrows = async (asyncBlock, error, message) => {
  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }
  const actual = await _tryAsyncBlock(block)
}

export default asyncThrows
