const fs = require('fs');
var parser = require('xml2json');
const formatXml = require("xml-formatter") 
function setData(weather_data) {
//Read data from txt
    fs.readFile("../default_format.xml", 'utf8', function (err,data) {
        var json = JSON.parse(parser.toJson(data, {reversible: true}));
        var timeseries = json["weatherdata"]["forecast"]["tabular"]["time"];
        for (var i = 0; i < timeseries.length; i++) {
            var time = timeseries[i];
            time.temperature.value  =   weather_data[0][i];
            time.pressure.value     =   weather_data[1][i];
        }
        
        var stringified = JSON.stringify(json);
        var xml = parser.toXml(stringified);
        fs.writeFile('test.xml',formatXml(xml,{collapseContent: true}) , function(err, data) {
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
    });
}

function getData(){ 
    var array = fs.readFileSync('./data.txt').toString().split("\n");
    let internal_temperature =[]
    let pressure =[]
    //get data of the last 48 data from internal temperature
    for (let i = array.length - 49; i <array.length - 1; i++) {
        array_2 = JSON.parse(array[i]);
        internal_temperature.push(array_2[16]);
        pressure.push(array_2[11]);
    }
    weather_data = [internal_temperature, pressure]
    return weather_data
}
data = getData();
setData(data);
