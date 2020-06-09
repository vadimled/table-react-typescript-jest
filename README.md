# Test React and Typescript

**Your goal is to set up an application which enables the user to view and manage experiments.**

# Business need

The main goal is for the user to check the experiments at a glance.

Providing information to the customer increases transparency and reduces communication issues.

# Use cases

- The user shall be able to:
  - See experiments in pages of 20 elements per page
  - Search by experiment id
  - Sort by different fields (e.g. id, name) in ascending/descending order
  - View the experiment information on a separate experiment details page
  - Update the experiment name (should persist when the page is reloaded)

The interactions should not refresh the page.

# Evaluation criteria

## Technology requirements

**React** and **JavaScript** are mandatory requirements. Apart from this, you can use any libraries, task runners and build processors. ES6 and TypeScript are highly encouraged.

## Code requirements

The full criteria for evaluating the coding challenge can be found in [Criteria.md](Criteria.md).

# How to run API server

The boilerplate includes a small service for data fetching. The file `db.json` includes all the necessary data to achieve the goal. Please follow the steps below to start the server:

```
yarn or npm install .
yarn server or npm run server
```

Check [json-server](https://github.com/typicode/json-server) for more information.

# Time limit

There is no hard time limit for this coding challenge. While we appreciate all the effort put into the challenge, we also do not want to take up too much of your time. Our advice is to focus on making sure that the application works properly and has some tests before moving on to secondary objectives. Happy coding!

