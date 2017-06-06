
const checkEnvVar = (envVarResolved, nameOfVar) => {
  if (!envVarResolved) {
    console.log('Enviornment Varable ' + nameOfVar + ' is not set it is unlikly the program will work correctly')
  }
}

const enviornmentCheck = () => {
  checkEnvVar(process.env.BACKEND_URL, 'BACKEND_URL')
}

export default enviornmentCheck
