const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve index.html as the main page
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


app.use('/background-design-animation', express.static(__dirname + '/background-design-animation'));
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


