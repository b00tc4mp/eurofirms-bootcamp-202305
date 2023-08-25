# api

## Funcional Description
This process anage the connect of dataabase to the user interface.


## Technical  Spec. in .env
- PORT = port of API
- MONGODB_URL = mongodb adress
- JWT_SECRET = secret string for jsonwebtoken


Modules to be installed
- cors
- dotenv
- express
- mongodb
- mongoose


## To execcute the api

Place in api root directory ~project/api

```sh
npm install
```
### execute MongoDB from terminal Git Bash
1. In terminal
```sh
Ex: cd mongodb/mongodb-win32-x86_64-windows-6.0.7/
```
```sh
Ex: ./bin/mongod --dbpath data
```
2. In terminal
```sh
Ex: cd mongodb/mongosh-1.10.1-win32-x64/
```
```sh
Ex: ./bin/mongosh
```
###
-[ General REDME ](../doc/README.md)