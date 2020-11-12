const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const apiRoutes = require('./routes/api');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

const dbPath = 'mongodb://localhost/kinanti';
const options = {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
};
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
  console.log('Database connected');
}, error => {
  console.log(error, 'Database error');
})

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});