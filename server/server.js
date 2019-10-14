
const express = require('express');
const cors = require('cors');
//const config = require('./config');
//const mongoose = require('mongoose');
//const loadTestData = require('./testData');
//const helmet = require('helmet');
//const sanitize = require('mongo-sanitize');

const app = express();

//import routes


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/products', (req, res) => {
    const data = [
      { id: '1addfgf', title: 'Lorem Ipsum 1', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
      { id: '2evxc34', title: 'Lorem Ipsum 2', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
    ]
    res.json(data);
  });

  app.listen(8000, function(){
    console.log('Server is running on port:', 8000);
  });