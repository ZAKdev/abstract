const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const getProjects = require('./routes/projects');

const app = express();

app.use(cors());

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log(getProjects, 'getProjects');
// routes
getProjects(app.post);

app.listen(2000, () => {
    console.log('App is running on port 2000');
});