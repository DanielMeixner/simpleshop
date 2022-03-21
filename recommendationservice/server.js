const express = require('express');
const app = express();

// Routes
app.get('/', function (req, res) { 
  var content = "<LI>Raspberries</LI>"  
  res.send(content);   
});

app.listen(80);
