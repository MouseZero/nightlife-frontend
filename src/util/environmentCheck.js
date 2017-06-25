
const checkEnvVar = (envVarResolved, nameOfVar) => {
  if (!envVarResolved) {
    /* eslint-disable no-alert, no-console */
    console.log('Enviornment Varable ' + nameOfVar + ' is not set it is unlikly the program will work correctly')
    /* eslint-enable no-alert, no-console */
  }
}

const enviornmentCheck = () => {
  checkEnvVar(process.env.BACKEND_URL, 'BACKEND_URL')
}

export default enviornmentCheck
