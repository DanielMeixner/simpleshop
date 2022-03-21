const express = require('express');
const rp = require('request-promise');

const app = express();
var o = {timeout: 1000}
// Routes


var content = "<html><body><h1>My awesome webshop";      
content += "<h2>Products</h2>"      
content += "<UL>"
content += "<LI>Apple</LI>"
content += "<LI>Banana</LI>"
content += "<LI>Citron</LI>"      
content += "</UL>"

var end = "</body></html>"

app.get('/', function (req, res) {
  console.log('received request');
  url="http://recommendationservice"

  rp.get(url,o)
    .then(function (data) {
      var recommendations = "<h2>Special Recommendations</h2>"
      recommendations += "<UL>"  
      recommendations += data;
      recommendations += "</UL>"      
      res.send(content+recommendations + end);
    },
    function()
    {            
      res.send(content + end);
    });  
});

app.listen(80);
