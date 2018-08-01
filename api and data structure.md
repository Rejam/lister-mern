# API
## Lists /lists
Name    | Method  | URL         | Desc 
---     |---      |---          |---
*Index  | GET     | /           | show all lists
New     | GET     | /new        | new list
Create  | POST    | /           | create new list
*Show   | GET     | /:id        | show single list
Edit    | GET     | /:id/edit   | edit list
Update  | PUT     | /:id        | update list
Destroy | DELETE  | /:id        | delete list

lists [ ]

list { }
```
  _id: {
    name: String,
    items: [],
    owner: ObjectId
  }
```

## Items /lists/:id
Name    | Method      | URL         | Desc
---     |---          |---          |---
New     | GET         | /new        | new item
Create  | POST        | /           | create new item
Edit    | GET         | /items/:id/edit | edit item
Update  | PUT         | /items/:id  | update item
Destroy | DELETE      | /items/:id  | delete item

items [ ]

item { }
```
  _id: {
    name: String,
    list: ObjectId
  }
```

## Users /
Name      | Method      | URL         | Desc
---       |---          |---          |---
New       | GET         | /users/new  | new user  
Create    | POST        | /users      | create user  
Show      | GET         | /users/:id  | show user profile

users [ ]

user { }
```
  _id: {
    username: String,
    password: String
  }
```

## working with objects and arrays
https://codepen.io/rejam/pen/cf72bb515bd854b789289b53a54a6bc3