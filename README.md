# Student GraphQL API 
I built student api using Nodejs, MongoDB and GraphQL based on Apollo Server [BACKEND SERVER]
This repo help to those who want to create, view, update and delete the student record. Through this, easier to find any student and save the teacher time.

Apollo Server is a community-maintained open-source GraphQL server. It works with pretty much all Node.js HTTP server frameworks. Apollo Server works with any GraphQL schema built with [GraphQL.js](https://github.com/graphql/graphql-js), so you can build your
schema with that directly or with a convenience library such as [graphql-tools](https://www.graphql-tools.com/docs/introduction).

## Installation

Before clone the repo, you must have node.js on your device.
 
    Fork this repo 
    $ git clone https://github.com/<username_github>/student_api_graphql.git

## Remember to install all the dependencies...

    $ npm install
    
## Create the .env file
       PORT = 5000
       MONGO_URL = mongodb-url

## Usage

    $ node server.js
    
#

### After running your server, you have to follow below
## get all the student
    query {
     students {
       id
       name
       class
     }
    }
    
<img src="https://user-images.githubusercontent.com/73419211/142413295-aa32e4bb-5a6c-4361-bf12-cfba80970346.PNG" height="550">
    
## get only one student by ID
    query{
      student(id: "6195efe0a2b9579fdf7da973") {
        name
      }
    }
<img src="https://user-images.githubusercontent.com/73419211/142413291-5f3f83d7-27c0-436b-8cd5-85103f45ac6a.PNG" height="550">
    
## create student 
    mutation {
      createStudent(studentInput: {
        name:"Kishor",
        class: "9"
    }) {
      id
      name
      class
      }
    }
    
    
<img src="https://user-images.githubusercontent.com/73419211/142413285-b34fe4a4-bd6b-48ea-a901-9ba214c43213.PNG" height="550">

## update student by ID
    mutation {
      updateStudent(id: "6195efe0a2b9579fdf7da973",studentInput: {
        name: "Raju",
        class: "5"
    }) {
        name
        class
     }
    }
    
    
<img src="https://user-images.githubusercontent.com/73419211/142413301-a25ffdc2-1572-4129-897b-127cdaafb40f.PNG" height="550">

## delete student by ID
    mutation($deleteStudentId: ID!) {
      deleteStudent(id: "6195efd7a2b9579fdf7da971") {
        id
        name
        class
     }
    }
    
    
<img src="https://user-images.githubusercontent.com/73419211/142413300-d7ad91ac-cfc0-4e54-92f1-a47030fed0be.PNG" height="550">


#
## Remove node_modules from git in vscode
#### Run below commands in your terminal
    git rm -r --cached node_modules
    git commit -am "node_modules be gone!"
    git push origin master

    
## Resources   
[Nodejs Docs](https://nodejs.org/en/docs/)
 
[GraphQL Docs](https://graphql.org/)
    
[MongoDB Docs](https://mongodb.github.io/node-mongodb-native/3.4/quick-start/quick-start/)


