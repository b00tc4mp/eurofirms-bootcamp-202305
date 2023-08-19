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

File                             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------------------------|---------|----------|---------|---------|-------------------
All files                        |   79.53 |    37.93 |   81.61 |   81.03 |                   
 panels                          |   68.09 |       25 |   69.51 |   70.43 |                   
  createBlock.js                 |     100 |      100 |     100 |     100 |                   
  createBlock.spec.js            |     100 |      100 |     100 |     100 |                   
  createPanel.js                 |     100 |      100 |     100 |     100 |                   
  createPanel.spec.js            |     100 |      100 |     100 |     100 |                   
  deleteBlock.js                 |     100 |      100 |     100 |     100 |                   
  deleteBlock.spec.js            |     100 |      100 |     100 |     100 |                   
  deletePanel.js                 |   23.07 |        0 |       0 |      30 | 13-22             
  index.js                       |     100 |      100 |     100 |     100 |                   
  retrievePanelOne.js            |      20 |        0 |       0 |   21.42 | 13-28             
  retrievePanelWorking.js        |   21.05 |        0 |       0 |   23.52 | 14-32             
  retrievePanels.js              |   18.75 |        0 |       0 |      20 | 12-29             
  updatePanel.js                 |   14.28 |        0 |       0 |   16.66 | 18-35             
  updatePanelStatusReEdit.js     |   15.78 |        0 |       0 |   18.75 | 13-29             
  updatePanelStatusToOptimize.js |   18.75 |        0 |       0 |   23.07 | 13-26             
 users                           |     100 |      100 |     100 |     100 |                   
  authenticateUser.js            |     100 |      100 |     100 |     100 |                   
  authenticateUser.spec.js       |     100 |      100 |     100 |     100 |                   
  index.js                       |     100 |      100 |     100 |     100 |                   
  registerUser.js                |     100 |      100 |     100 |     100 |                   
  registerUser.spec.js           |     100 |      100 |     100 |     100 |                   
  retrieveUser.js                |     100 |      100 |     100 |     100 |                   
  retrieveUser.spec.js           |     100 |      100 |     100 |     100 |                   
  updateUser.js                  |     100 |      100 |     100 |     100 |                   
  updateUser.spec.js             |     100 |      100 |     100 |     100 |        




[Home](../doc/README.md)