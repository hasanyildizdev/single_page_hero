const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle root route
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(3000, function () {
  console.log('Server listening on port 3000');
});
