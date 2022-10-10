# Todo App API
This project implements CRUD concepts, follows the MVC software architecture to manage tasks added to a Todo app and saves all data in a MongoDb cloud database.

### Features:
- A Schema, Model and Configuration to connect with MongoDB collection using Mongoose
```
{
    _id,
    title,
    description,
    isDone,
    timestamp
}
```
- Routes to carry out tasks:
    - */todos*: to get all tasks, and add new task
    - */todos/:id*: to get, update and delete a specific tasks by id

### How to use:
- Clone or download the repo
- Run the code below to install all the node modules used:
```
npm install
```
- Create a MongoDB account and a database collection
- Create a **.env** file that contains the connection string
- Modify the **config/dbConfig.js** file accordingly to use the connection string 
- While adding a new task, the body of the __POST__ request should be similar to:
```
{
    "title": "Study for <= 5hrs",
    "description": "Make sure to study NodeJS today"
}
```
The *id*, *isDone* and *timestamps* are automatically generated.
- Tasks updates with __PUT__ requests can be identical to the body of the __POST__ request or with ommissions.

### Tech/Tools Used:
- JavaScript
- NodeJS and NPM
- Mongoose
- Express
- Nodemon
- Thunder Client