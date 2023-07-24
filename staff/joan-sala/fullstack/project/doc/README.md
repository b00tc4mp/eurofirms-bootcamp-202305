# BiciQuedadas

## Intro

![](https://i.giphy.com/media/ZciYhNqc9iFtC0yUTS/giphy.webp)

A platform for meeting mountain bikers in Barcelona and its surroundings.
Said application would have registered users and different proposed routes such as posts of meeting places with their description and area, where people can sign up, refuse and/or to attend the meetings to carry out the activity in the determined place. 

Log in to the USER application (manager and user), search for people by emai, add them to X group as a normal user, this allows you to see the posts of other users and at the same time propose meetings.
ROUTE(title, description, id, day, meeting time, sign up button)
ROUTE HISTORY
bike SPECS
Users can propose visits and/or cancel the meeting.

## Functional Description

The main goal and key benefits for users of this app is to be able to share laughs and cycling adventures with others.
This purpose will be achieved by using posts from different users, which are displayed in the form of a list. Obviously, save other fields such as the date and time of creation, the date and time of its completion, the author of the publication, etc.

### Use Cases

- create user
- list/publish bike meetup places
- opinions
- update meetups
- delete hangouts/posts
- join/disjoin the meeting
- search look for places to meet up
- update post
- toggle fav post
- ...

### UI Design

Link to [Figma](https://trello.com/b/rKJIeIsn/biciquedadas)

## Technical Description

### Data Model

User
- name (String, required)
- email (String, required, unique)
- password (String, required, minLength: 8)
- region ZIP code (String, optional)
- phone (String, optional)
- favs (ObjectId, ref Artwork)
- creation date (Date)
- date of realization (Date)

Post
- image (photo file, optional)
- video (String: youtube URL or similar, optional)
- description (String, required)
- type (String, required)
- creationDate (Date, required)
- modificationDate (Date, optional)

## Planning

Link of [Trello project](https://trello.com/b/rKJIeIsn/biciquedadas)

## Othres drawings and proyects related to bikes

- [Drawn bicycles](https://www.domestika.org/es/projects/666220-bicis-dibujo)
- [Interview with Ángel Solores and Mia Cahué, Probike partners. Made in 2017](https://www.domestika.org/es/projects/520481-entrevista-a-angel-solores-y-mia-cahue-socios-de-probike-realizada-en-2017)
- [Proyect Bike](https://www.domestika.org/es/projects/218851-proyecto-bike)
- [Triptych Tomas Domingoo](https://www.domestika.org/es/projects/201097-triptico-tomas-domingo)
- [Plaster](https://www.domestika.org/es/projects/161781-escayola)
- [Bike](https://www.domestika.org/es/projects/151661-bike)



