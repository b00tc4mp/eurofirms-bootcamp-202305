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

- [Report](./coverage/index.html)


[Home](../doc/README.md)