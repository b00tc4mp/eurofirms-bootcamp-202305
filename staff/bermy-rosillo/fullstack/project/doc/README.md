## ABC test

## intro
The application is based on the fact that users who register as teachers can evaluate student tests, and that users who register as students can also take the tests assigned by the teacher.
Both will be sent an email when they have to take or evaluate a test. 

## functional description
the main objective of this application will be to provide an easy to use tool when testing English students and to facilitate the correction process. 

### use cases
create test
check Test
resolve Test
send Test


### UI design
link to [figma]...

## technical description

### data Model

The main components of the application will include the following schemas

user
    name: type (String, required),
    last name: type{String required},
    password: type {String required of 8 characters},
    email: type (String, required, unique),
    role : student / teacher

test
    subject: type (enum [mathematic, language, english, history], required),
    questions: type questions,
    professor: type ObjectId,
    student: type ObjectId,
    date: type Date

questions
    question: type (String, required),
    answerA: type (String, required),
    answerB: type (String, required),
    answerC: type (String, required),
    answerD: type (String, required),
