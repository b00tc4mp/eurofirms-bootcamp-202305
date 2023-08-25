# dat

## Functional Description (FDS)

This module manage the data models

## Technical Specs.

### Data model

#### Block
- x: Number (required, default -1)
    - 'x' block position
- y: Number (required, default -1)
    - 'y' block position
- width: Number (required)
    - block width
- height: Number (required)
    - block height
- orientation: Integer (required, enum [0, 1])
    - block rotation

#### Panel
- reference: String (required, default null)
    - panel reference
- owner: ObjectID (required)
    - user that created the panel
- width: Number (required)
    - panel width
- height: Number (required)
    - panel height
- blocks: array of Block (required, default [ ])
    - set of blocks for each panel
- status: Integer (required, enum [NOT_OPTIMIZED, FINISHED], default NOT_OPTIMIZED)
    - status of panel (it it's optimized)

#### User
- id: ObjectID (unique)
    - user id
- name: String (required)
    - user name
- surname: String (optional)
    - user surname
- zip: String (optional)
    - user postal code
- email: String (required, unique)
    - user email address
- password: String (required, min 3 chars)
    - user password

[Home](../doc/README.md)