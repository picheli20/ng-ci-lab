const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const skin = process.env.APP_SKIN || 'red';

// Run the app by serving the static files
// in the dist directory
app.use(express.static(`${__dirname}/../dist/${skin}`));

// Start the app by listening on the default
// Heroku port
app.listen(port);

app.get('/*', function(req, res) {
  res.sendFile(path.join(`${__dirname}/../dist/${skin}/${skin}/index.html`));
});

console.log(`Server listening on ${port}`);
