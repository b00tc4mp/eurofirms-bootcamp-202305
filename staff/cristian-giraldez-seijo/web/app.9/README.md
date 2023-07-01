# App

## Intro

Social network for posting things

## Functional

TODO list uses cases

## Technical

TODO list tech details

## Planning

### Epics & Stories

#### Access control

- Me as a user, I want to register my credentials and access with them to the App

##### Tasks

- DONE build html
- DONE build basic css
- DONE implement register functionality
- DONE implement login functionality
- DONE implement home welcome functionality

#### Create a post and refresh posts

- Me as a user, I want to create a post with text and image
- Me as user, I want to see the list of created posts

##### Tasks

- DONE implement plus button at the bottom of home (footer)
- DONE implement modal window for creating a post (inputs: image, text)
- DONE implement createPost logic to persist the info (image, text) in database
- DONE implement retrievePosts logic to get all the posts from database
- DONE implement a panel for listing posts in home

#### Edit a post and refresh list

- Me as user, I want to have the edit option (as a button) in any post that I created, open the Edit dialog with it, and save the changes in the post
- Me as user, I want to see the list of posts updated with the changes applied in any of my posts

##### Tasks

- DONE add edit button on all the posts that belong the user that is connected (in the session)
- DONE implement retrievePost logic to get the information of a post
- DONE implement modal window for editing a post (inputs: image, text) showing the current information of the post when opened
- DONE implement updatePost logic to save the information of a post in db and mechanise in the edit post form submit
- DONE add a call to refresh the posts list after saving the changes in the edited post

#### Delete a post and refresh list

- Me as user, I want to have the delete option (as a button) in any post that I created, open a Delete dialog with it, and proceed to delete the post if accepted (or cancel it otherwise)
- Me as user, I want to see the list of posts updated with the changes applied in any of my posts

##### Tasks

- TODO add delete button in all the posts that belong to the user that is connected (in the session)
- TODO implement deletePost logic to remove a post from database
- TODO implement the modal window for asking the user if she/he really wants to delete the post (two buttons: delete, cancel)
- TODO add a call to refresh the posts list after deleting the post