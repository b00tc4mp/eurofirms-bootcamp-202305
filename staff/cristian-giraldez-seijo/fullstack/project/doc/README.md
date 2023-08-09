# Talking characters

## Intro
TODO Explain project

## Functional description
This application focuses on providing users with tools and resources that allow them to unleash their creativity and artistic expression through story writing.
With that objective in mind, users will have access to Choose Your Own Adventure stories, and if they sign up, they will be able to write their own story, either something new or derived from one of the existing stories.
What adventure will you choose? Do you dare to write your own?

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
Unregistered users will only be able to read the available content. In case of being registered or logged in, a user will have the possibility to start a new story or contribute to existing ones with their own alternatives.
They will not only be able to write complete stories with a final question for possible continuations on the path, but also write such answers. In case a certain story path is interesting, but you want to contribute something additional to it, you can write stories starting from that starting point and ending with a shortcut. These shortcuts are transparent to readers, so when they access them they will see the chapter they point to. Only the author will see a message indicating that this chapter is not a normal chapter but a shortcut to another. These shortcuts could be, for example, a time skip to avoid part of the story, so that a reader can choose whether or not to read that story.

### Data model

User
- nickname(string, required, unique)
- password(string, required)
- email(string, required, unique)
- favs(array of object ids)

Story
- author(object id, required, unique)
- title(string, required)
- sumary(string)
- text(string)
- shortcut(boolean)
- dateCreated(date, required)
- dateUpdated(date, required)
- options(array of object ids)
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
- DONE implement api logic for create story
- TODO implement api route for create story
- TODO implement app logic for create story
- TODO implement create story on the app home component
- TODO implement api logic for update story
- TODO implement api route for update story
- TODO implement app logic for update story
- TODO implement update story on the app home component
