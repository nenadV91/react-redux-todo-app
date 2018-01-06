# React-redux-express todo app with auth

Simple todo app, created using node, express and mongoose on server side and react and redux on client side. Also its using passport for authentication and create-react-app on client side.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you how to get a development env running

Install all dependencies.

```
npm install
```

Create mongodb database and set env variables in .env file

```
DB_NAME=database_name
DB_USER=database_username
DB_PASS=database_password
SESSION_SECRET=session_secret

```

Build app, start the server and it will run on port 4000

```
npm run build
node app.js

```

## Deployment

To deploy on Heroku see this link

```
https://blog.heroku.com/deploying-react-with-zero-configuration

```

## Built With

* [create-react-app](https://github.com/facebookincubator/create-react-app/) - For client side
* [Reactstrap](http://reactstrap.github.io/) - For layout
* [Express](https://expressjs.com/) - For server
* [MongoDB](https://www.mongodb.com/) - Database
* [Mongoose](http://mongoosejs.com/) - ODM

## Authors

* **Vracar Nenad** - *Initial work*

## License

This project is licensed under the MIT License.
