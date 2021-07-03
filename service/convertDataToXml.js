const fs = require('fs');
var parser = require('xml2json');
 
//Read data from txt
 fs.readFile("./data.txt", 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
 //Object with just data

