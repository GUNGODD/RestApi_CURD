# RestApi_CURD


### Project Title: CRUD Operations with Node.js

#### Description:

This project is my first attempt at building a CRUD (Create, Read, Update, Delete) operations application using Node.js. The purpose of this project is to showcase my understanding of basic CRUD functionality while working with Node.js.

#### Project Overview:

The project focuses on implementing a simple CRUD operations system. It utilizes Node.js along with Express.js for building the server and handling HTTP requests. The data is stored in-memory using a simple array for demonstration purposes, but this can be easily extended to connect to a database.

#### Features:

* **Create:** Add new items to the system.
* **Read:** Retrieve and display information about existing items.
* **Update:** Modify the details of existing items.
* **Delete:** Remove items from the system.

#### Technologies Used:

* Node.js
* Express.js

#### Getting Started:

1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Navigate to the project directory: `cd your-repo`
3. Install dependencies: `npm install`
4. Run the application: `npm start`

#### API Endpoints:

* **GET /items:** Retrieve all items.
* **GET /items/🆔** Retrieve a specific item by ID.
* **POST /items:** Create a new item.
* **PUT /items/🆔** Update a specific item by ID.
* **DELETE /items/🆔** Delete a specific item by ID.

  Creatting new items


example  code 

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "New Item", "description": "This is a new item."}' http://localhost:3000/items
```
