# opt

## Functional Description (FDS)

This process optimize the database panels.

## Technical Specs.

### Enviroment Variables

- MONGOOSE_URL = mongodb address

SAVE_EVERY_TIMES = times for saving working panel in optimization process

### Modules to be installed previosly
- dotenv
- dat

### To execute the optimization
Place in opt root directory ~/quad/opt

```sh
node process/all
```

### To reset the optimization
Place in opt root directory ~/quad/opt

```sh
node process/reset
```
[Home](../doc/README.md)