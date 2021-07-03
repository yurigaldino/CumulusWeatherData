const fs = require('fs');
var parser = require('xml2json');
 
//Read data from txt
/* fs.readFile("../default_format.xml", 'utf8', function (err,data) {
    var json = JSON.parse(parser.toJson(data, {reversible: true}));
    var timeseries = json["weatherdata"]["forecast"]["tabular"]["time"];
    for (var i = 0; i < timeseries.length; i++) {
        var time= timeseries[i];
        time.temperature.value = i;
    }
    
    var stringified = JSON.stringify(json);
    var xml = parser.toXml(stringified);
    fs.writeFile('test.xml', xml, function(err, data) {
        if (err) {
        console.log(err);
        }
        else {
        console.log('updated!');
        }
    });
    
    if (err) {
      return console.log(err);
    }
});*/

function getData(){ 
    var array = fs.readFileSync('./data.txt').toString().split("\n");
    /*for(i in array) {
        console.log(array[i]);
    }*/
    var array_2 = JSON.parse(array[1]);
    console.log(array_2[2]); //temperature
}
getData();