# ABC test

## Intro
The application is based on the fact that users who register as teachers can evaluate student tests, and that users who register as students can also take the tests assigned by the teacher.
Both will be sent an email when they have to take or evaluate a test. 

## Functional description
The main objective of this application will be to provide an easy to use tool when testing English students and to facilitate the correction process. 

### Use cases
#### Teacher 
- create test
- list test answers
- assess test answers
#### Student
- search tests
- answers test
- list test assessments



### UI design
Link to [figma] (https://www.figma.com/file/GInAoUk9eW9vEcsBqC9Cp8/ABC-test?type=design&node-id=0-1&mode=design&t=u4JgqzBknTPlzzXi-0)


## Technical description

### Data model

The main components of the application will include the following schemas

User
- name (String, required)
- password {String required of 8 characters}
- email (String, required, unique)
- role (String, enum [student, teacher])

Test
- subject (String, required)
- title (String, required)
- description (String,required)
- teacher  (ObjectId, required)
- attemps (Number)
- date  (Date, required)

Answer
- test (ObjectId, required)
- student (ObjectId, required)
- description (String, required)
- date (Date, required)
- score (Number)
- assessment (String)
- assessment date (Date)

## project planning
## tasks
### TODO
- student home interface

### IN PROGRESS
- teacher home

### DONE
- data model
- figma
- register user test / api
- authenticate user test / api
- retrieve user test / api
- interfaces in app (register user, login , home)
- logic register user, login , home in app
- logic retrieve user in app
- logic extractRoleFromToken
- create test interface
- logic create Test

 

