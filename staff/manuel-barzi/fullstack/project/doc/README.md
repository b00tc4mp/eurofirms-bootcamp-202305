# My App

## Intro

TODO explain your project in a paragraph or two

## Functional Description

### Use Cases

- list posts
- create post
- update post
- delete post
- toggle fav post
- ...

### UI Design

TODO link to Figma

## Technical Description

### Data Model

User
- name (string, required)
- email (string, required, unique)
- password (string, required, min-length 8)
- favs (array of post id)

Post
- author (user id)
- image (string, required)
- text (string, required)
- date (date, required, auto)

## Planning

TODO link to trello, or notion, or linear, ... project? or list the TODOs here