# Talking characters

## Intro

This application focuses on providing users with tools and resources that allow them to unleash their creativity and artistic expression through story writing.

## Functional description

Choose Your Own Adventure" stories are accessible to all users, but by registering, users can embark on an exciting literary journey, creating original plots or derived from existing stories.
Unregistered users can access and read content on the aplication. Registered users have more options: explore, create and improve stories. They can write complete stories. They can also answer questions or add subplots that start at a specific point and end at a "shortcut," facilitating transitions. Only the author sees messages about unconventional chapters, which are links to other segments. These shortcuts can include time jumps and give readers choice about which parts to read.
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
- DONE implement api retrieve user logic
- DONE implement api route for retrieve user
- DONE implement app retrieve user logic
- DONE implement retrieve user on app Home
- DONE implement api logic for create story
- DONE implement api route for create story
- DONE implement app logic for create story
- DONE implement create story component on the app
- DONE implement api logic for update story
- DONE implement api route for update story
- DONE implement app logic for update story
- DONE implement update story component on the app
- DONE implement api logic for retrieve story
- DONE implement api route for retrieve story
- DONE implement app logic for retrieve story
- DONE implement retrieve story component
- DONE implement api logic for retrieve stories
- DONE implement api route for retrieve stories
- DONE implement app logic for retrieve stories
- DONE implement retrieve stories component
- DONE implement user logged on app retrieve story component
- DONE implement api logic for delete story
- DONE implement api route for delete story
- DONE implement app logic for delete story
- DONE implement delete story component
- DONE implement api logic for create story options(Child stories)
- DONE implement api route for create story options(child stories)
- DONE update api logic for retrieve stories without origin
- DONE update api logic for retrieve story with options
