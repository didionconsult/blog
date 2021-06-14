---
title: GraphQL Notes 
date: "2021-05-28T22:40:32.169Z"
description: "A review of core concepts used in GraphQL. 📈"
tags: "graphql" 
---

### GraphQL
`Schema Definition Language (SDL)` - syntax used for graphQL queries
```jsx
// basic query structure
{
  allPersons { // root field
    name
    age
  }
}
```

Note:
- graphql only exposes 1 endpoint
- structure of the returned data is <mark style="background-color: rgba(255,228,225, .50) ">not</mark> fixed
- a query is the input the client needs to add because the data is unstructured

#### Three types of fields
1. query
2. mutation
3. subscription

```jsx
// the exclamation mark denotes a mandatory field
name: String!

// the [] denotes the data must be in a list
posts: [Post!]
```
```jsx



//returned query data
{
  "allPersons": [
    { "name": "Rose", "age": 23 },
    { "name": "Lei", "age": 20 },
    { "name": "Nia", "age": 42}
  ]
}


  ```
### Mutations
There are 3 kinds of mutations.
1. creating new data
2. updating existing data
3. deleting existing data

  ```jsx
// writing a data mutation in GraphQL
mutation { //mutation keyword must be first
  createPerson(name: "Lei", age: 36) //root field w/ arguments
    name
    age
}
```
### Using GraphiQL
Here is the link for `http://localhost:8000/___graphql`