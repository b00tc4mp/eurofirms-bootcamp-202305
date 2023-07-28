# MeetupBikers (BiciQuedadas)

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

This purpose will be achieved by using posts from different users, which are displayed in the form of a list. Obviously, save other fields such as the date and time of creation, the date and time of its completion, the author of the publication, etc.

### Use Cases

- list meetups
- publish meetup
- update meetup
- delete meetup
- toggle join meetup
- search meetups

### UI Design

Link to [Figma](https://www.figma.com/file/Uq6LHAecj5JVWWRVVc9H8Y/Figma-basics-(Copy)?type=design&node-id=0-286&mode=design&t=1pUTR9pWLbay6qxA-0)

## Technical Description

### Data Model

User
- name (String, required)
- email (String, required, unique)
- password (String, required, minLength: 8)
- image (photo file, optional)

Meetup
- title (String, required)
- image (photo file, optional)
- video (String: youtube URL or similar, optional)
- description (String, required)
- type (String, required)
- date (Date, required)
- address (String, require)
- publisher (ObjectId, reference user)

## Planning

Link of [Trello project](https://trello.com/b/rKJIeIsn/biciquedadas)




