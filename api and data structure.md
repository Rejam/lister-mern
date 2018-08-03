# State
```
state = {
  loading: false,
  error: null,
  lists: {
    byId: {
      'list1': {
        id: 'list1',
        name: 'list one',
        items: [ 'item1', 'item2']
      },
      'list2': {
        id: 'list2',
        name: 'list two',
        items: [ 'item3']
      }
    },
    allIds: ['list1', 'list2']
  },
  items: {
    byId: {
      'item1': {
        id: 'item1',
        name: 'item one'
        list: 'list1'
      },
      'item2': {
        id: 'item2',
        name: 'item two'
      },
      'item3': {
        id: 'item3',
        name: 'item three'
      }
    },
    allIds: ['item1', 'item2', 'item3']
  }
}
```

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

## Items /lists/:id
Name    | Method      | URL         | Desc
---     |---          |---          |---
New     | GET         | /new        | new item
Create  | POST        | /           | create new item
Edit    | GET         | /items/:id/edit | edit item
Update  | PUT         | /items/:id  | update item
Destroy | DELETE      | /items/:id  | delete item

## Users /
Name      | Method      | URL         | Desc
---       |---          |---          |---
New       | GET         | /users/new  | new user  
Create    | POST        | /users      | create user  
Show      | GET         | /users/:id  | show user profile

## working with objects and arrays
https://codepen.io/rejam/pen/cf72bb515bd854b789289b53a54a6bc3