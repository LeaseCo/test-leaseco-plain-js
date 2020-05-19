// import express (after npm install express)
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
// create new express app and save it as "app"
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.options('*', cors())
// server configuration
const PORT = 8000;

// create a route for the app
app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, './index.html'));
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});