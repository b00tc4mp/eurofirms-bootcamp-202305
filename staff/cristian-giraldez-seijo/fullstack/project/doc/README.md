# Talking characters

## Intro
TODO Explain project

## Functional description

### Use cases

Anonymous
- View all stories

User
- View all stories
- Publish story
- Edit story
- Delete story
- Toggle fav story
- Add comment to story
- Delete comment from story
- Edit comment in story
TODO Value AI interactions posibility

## Technical description

### Data model

User
- nickname(string, required, unique)
- password(string, required)
- email(string, required, unique)
- favs(array of object ids)

Story
- author(object id, required, unique)
- sumary(string)
- text(string, required)
- date(date, required)
- children(array of object ids)
- comments(array of comments)

Comment
- author(object id, required)
- text(string, required)
- date(date, required)

## Planning
- DONE Implement data models
- DONE implement api register user logic
- DONE implement api route for register user
- DONE implement app register user logic
- DONE implement app register component
- DONE implement api authenticate user logic
- DONE implement api route for authenticate user
- DONE implement app authenticate user logic
- DONE implement app login component
- DONNE implement api retrieve user logic
- DONE implement api route for retrieve user
- DONE implement app retrieve user logic
- DONE implement retrieve user on app Home