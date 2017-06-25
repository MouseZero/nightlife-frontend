# Setup Dev environment

## Dev Enviorment
create an .env.dev file in the root dir and add something like the following
```
BACKEND_URL=http://localhost:3033/
NODE_ENV=development
```

run ```npm run start:dev```

## Production Settings
Enviornment vars should look something like this
```
BACKEND_URL=https://nightlife-backend-fcc.herokuapp.com/
NODE_ENV=production
```

optional env settings
```
PORT=7000
```

run
```
npm start
```
