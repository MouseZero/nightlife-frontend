
const checkEnvVar = (variable) => {
  if (!process.env[variable]) {
    console.log('Enviornment Varable ' + variable + ' is not set it is unlikly the program will work correctly')
  } else if (process.env[variable] === 'none') {
    console.log('! ' + variable + ' env var is set to none. You should fix this')
  }
}

const enviornmentCheck = () => {
  checkEnvVar('BACKEND_URL')
}

export default enviornmentCheck
