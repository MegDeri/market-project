# market-project 

## DEMO: https://market-project.herokuapp.com/
### Final project for Web Developer Bootcamp

### Description:
Front-end application in React, Redux, connected to MongoDB. 
The app was created with ```create-react-app```.
Application contains: main website with all products, sub-website with  single product and cart.

### Technologies used for the project:
* Mongo.db (Mongoose)
* Express
* React (Redux, React Router)
* Node.js
* Webpack, Babel, Axios
* Reactstrap

### Structure of the app:
- Front-end files are located in the ```client/src``` directory, built version in ```client/build```
- Back-end files are located in the server directory
- Database is hosted on MongoDB Atlas Cluster (data is also available in ```server/testData.js```)

### Init project:
Clone project and after cloning use command ```npm install```.

All needed source files are in ```src/```.

# NPM Scripts:
2 main scripts:

- build: built project in ```build/``` based on files from ```src/```.

- start: start project, watch on change and rebuilt after changes.
 
 # MongoDB(must be installed locally)
-send data to local database: go to ```server/``` and  use command:```yarn start```

```Project tree:
client/
  public/
  src/
    App.js
    index.js
    config.js
    redux/
    styles/
    images/
    components/
      common/
      features/
      layout/
      pages/
server/
  controllers/
  models/
  routes/
  config.js
  server.js
```
