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

File                                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------------------------|---------|----------|---------|---------|-------------------
All files                             |     100 |      100 |     100 |     100 |                   
 panels                               |     100 |      100 |     100 |     100 |                   
  createBlock.js                      |     100 |      100 |     100 |     100 |                   
  createBlock.spec.js                 |     100 |      100 |     100 |     100 |                   
  createPanel.js                      |     100 |      100 |     100 |     100 |                   
  createPanel.spec.js                 |     100 |      100 |     100 |     100 |                   
  deleteBlock.js                      |     100 |      100 |     100 |     100 |                   
  deleteBlock.spec.js                 |     100 |      100 |     100 |     100 |                   
  deletePanel.js                      |     100 |      100 |     100 |     100 |                   
  deletePanel.spec.js                 |     100 |      100 |     100 |     100 |                   
  index.js                            |     100 |      100 |     100 |     100 |                   
  retrievePanelOne.js                 |     100 |      100 |     100 |     100 |                   
  retrievePanelOne.spec.js            |     100 |      100 |     100 |     100 |                   
  retrievePanelWorking.js             |     100 |      100 |     100 |     100 |                   
  retrievePanelWorking.spec.js        |     100 |      100 |     100 |     100 |                   
  retrievePanels.js                   |     100 |      100 |     100 |     100 |                   
  retrievePanels.spec.js              |     100 |      100 |     100 |     100 |                   
  updatePanel.js                      |     100 |      100 |     100 |     100 |                   
  updatePanel.spec.js                 |     100 |      100 |     100 |     100 |                   
  updatePanelStatusReEdit.js          |     100 |      100 |     100 |     100 |                   
  updatePanelStatusReEdit.spec.js     |     100 |      100 |     100 |     100 |                   
  updatePanelStatusToOptimize.js      |     100 |      100 |     100 |     100 |                   
  updatePanelStatusToOptimize.spec.js |     100 |      100 |     100 |     100 |                   
 users                                |     100 |      100 |     100 |     100 |                   
  authenticateUser.js                 |     100 |      100 |     100 |     100 |                   
  authenticateUser.spec.js            |     100 |      100 |     100 |     100 |                   
  index.js                            |     100 |      100 |     100 |     100 |                   
  registerUser.js                     |     100 |      100 |     100 |     100 |                   
  registerUser.spec.js                |     100 |      100 |     100 |     100 |                   
  retrieveUser.js                     |     100 |      100 |     100 |     100 |                   
  retrieveUser.spec.js                |     100 |      100 |     100 |     100 |                   
  updateUser.js                       |     100 |      100 |     100 |     100 |                   
  updateUser.spec.js                  |     100 |      100 |     100 |     100 |

Lines	
- panels 630/630
- users 153/153

[Home](../doc/README.md)