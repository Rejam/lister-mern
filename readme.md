# List Application

# Features
- CRUD app
- auth
- user can have multiple lists

# API
## Lists
Name    | Method  | URL         | Desc 
---     |---      |---          |---
Index   | GET     | /           | show all lists
New     | GET     | /new        | new list
Create  | POST    | /           | create new list
Show    | GET     | /:id        | show single list
Edit    | GET     | /:id/edit   | edit list
Update  | PUT     | /:id        | update list
Destroy | DELETE  | /:id        | delete list

## Items /:id
Name    | Method      | URL         | Desc
---     |---          |---          |---
New     | GET         | /new        | new item
Create  | POST        | /           | create new item
Edit    | GET         | /items/:id/edit | edit item
Update  | PUT         | /items/:id  | update item
Destroy | DELETE      | /items/:id  | delete item

