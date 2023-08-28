# MeetupBikers

## Intro

![](https://raw.githubusercontent.com/joansalabaucells/eurofirms-bootcamp-202305/cdd5d4ea01254439a71ab040e010155c495810bf/staff/joan-sala/fullstack/project/logoMeetupBikers_400.webp)

A platform for meeting mountain bikers in Barcelona and its surroundings.
Said application would have registered users and different proposed routes such as posts  of meeting places with their description and area, where people can sign up, refuse and/or to attend the meetings to carry out the activity in the determined place. 

Log/Register in application, add them to X group as a normal user, this allows you to see the posts of other users and at the same time propose meetings.

ROUTE(title, description, id, day, meeting time, sign up button).
Users can propose visits and/or cancel the meeting.

## Functional Description

This purpose will be achieved by using posts from different users, which are displayed in the form of a list. Obviously, save other fields such as the date and time of creation, the date and time of its completion, the author of the publication, etc.

### Use Cases

- list meetups
- publish meetup
- update meetup
- delete meetup
- toggle join meetup

### UI Design

Link to [Figma](https://www.figma.com/file/Uq6LHAecj5JVWWRVVc9H8Y/Figma-basics-(Copy)?type=design&node-id=0-286&mode=design&t=1pUTR9pWLbay6qxA-0)

## Technical Description

### Data Model

User
- name (String, required)
- email (String, required, unique)
- password (String, required, minLength: 8)
- image (photo file, obligatory)

Meetup
- title (String, required)
- date (Date, required)
- image (photo file, optional)
- video (String: youtube URL or similar, optional)
- description (String, required)
- type (String, required)
- dateMeetup (Date, required)
- address (String, required)
- Atendants (Integer, reference user)


### Modules

Server Side
- api: server to client

Client Side
- app: client aplication

## Planning

Link of [Trello project](https://trello.com/b/rKJIeIsn/biciquedadas)



## Other docs
- [ api README ](../api/README.md)

- [ app README ](../app/README.md)


