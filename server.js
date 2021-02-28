let express = require('express');
// var boostrap = require('bootstrap');

// Create our app
let app = express();
// tell it which folder we want to start
// then start the server
app.use(express.static('public'));

app.listen(8000, function () {
    console.log('Express server is running on port 8000')
});