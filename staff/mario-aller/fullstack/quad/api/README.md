# api

## Functional Description (FDS)

This process manage the connection of database to the user interface

## Technical Specs.

### Enviroment Variables (.env)

- API_PORT = port of API

- JWT_SECRET = secret string for jsonwebtoken

- MONGOOSE_URL = mongodb address

### Modules to be installed previosly
- cors
- dotenv
- express
- jsonwebtoken
- dat
```sh
npm install
```

### To execute the api

Place in api root directory ~/quad/api

- execute MongoDB

```sh
~/mongodb --dbpath data
```

- run
```sh
npm run start
```

### Test Coverage

#### Users

File                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------------|---------|----------|---------|---------|-------------------
All files                 |     100 |      100 |     100 |     100 |                   
 authenticateUser.js      |     100 |      100 |     100 |     100 |                   
 authenticateUser.spec.js |     100 |      100 |     100 |     100 |                   
 index.js                 |     100 |      100 |     100 |     100 |                   
 registerUser.js          |     100 |      100 |     100 |     100 |                   
 registerUser.spec.js     |     100 |      100 |     100 |     100 |                   
 retrieveUser.js          |     100 |      100 |     100 |     100 |                   
 retrieveUser.spec.js     |     100 |      100 |     100 |     100 |                   
 updateUser.js            |     100 |      100 |     100 |     100 |                   
 updateUser.spec.js       |     100 |      100 |     100 |     100 |           

#### Panels



[Home](../doc/README.md)