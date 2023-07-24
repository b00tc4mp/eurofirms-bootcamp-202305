# Instaflan

## Intro 

Instaflan is a project created with the aim of copying the functionalities of the social network Instagram, in order to set new goals that force me to improve my skills as a developer.

![](https://media3.giphy.com/media/iKPQgXxAJtJSg/giphy.gif?cid=ecf05e47fju38v1cjppwjkvsg4jp6wnr22fbk4b76hfr5aph&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Funcional Description 

### Use Cases

- Create user
- Login with user
- Logout 
- List posts
- Create, edit and delete post 
- Toggle fav post 
- Follow and unfollow user
- View profile and own posts
- View users you do not follow
- See posts from users you do not follow
- Search users and posts
- Send messages between users
- Coment posts(edit and delete comments)
- Notifications if someone interacts with your profile or your posts

### UI Design

link to [Figma](https://www.figma.com/file/cKuNiquDcIFG0LMrnLExJs/Untitled?type=design&node-id=1-8&mode=design&t=GrcaVAMisTuAwv59-0)

## Technical Description

## Data Model

User

- id (object id, required, unique)
- name (string, required)
- image (string)
- description (string)
- email(string, required, unique)
- password(string, required, min-length 8)
- favsPost(array of post id, required)
- followed(array of user id, required)

Post 

- id (object id, required, unique)
- author (user id)
- image (string, required)
- text (string, required)
- date (date, required, auto)
- likes (number, required)
- coments (array of string, required)

Chat 

- id(object id, required, unique)
- user1 (user id)
- user2 (user id)
- messages (array of message{
    name: user1 name or user2 name,
    string, date})
- date (date, required, auto)

## Planning

link to [Trello](https://trello.com/invite/b/ib6A8LV1/ATTI13b23ff609078db4e730d667498a206d090546C4/instaflan)