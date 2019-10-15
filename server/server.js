
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
      { id: '2tyxc34', title: 'Lorem Ipsum 2', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
      { id: '1affdfgf', title: 'Lorem Ipsum 3', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
      { id: '1adlpgf', title: 'Lorem Ipsum 4', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
      { id: '2evxc04', title: 'Lorem Ipsum 5', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
      { id: '2weffc34', title: 'Lorem Ipsum 6', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
    ]
    res.json(data);
  });

  app.listen(8000, function(){
    console.log('Server is running on port:', 8000);
  });