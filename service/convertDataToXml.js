const fs = require('fs');
var parser = require('xml2json');
 
function setData(weather_data) {
//Read data from txt
    fs.readFile("../default_format.xml", 'utf8', function (err,data) {
        var json = JSON.parse(parser.toJson(data, {reversible: true}));
        var timeseries = json["weatherdata"]["forecast"]["tabular"]["time"];
        for (var i = 0; i < timeseries.length; i++) {
            var time = timeseries[i];
            time.temperature.value = weather_data[i];
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
    });
}

function getData(){ 
    var array = fs.readFileSync('./data.txt').toString().split("\n");
    let internal_temperature =[]
    //get data of the last 48 data from internal temperature
    for (let i = array.length - 48; i <array.length - 1; i++) {
        array_2 = JSON.parse(array[i]);
        internal_temperature.push(array_2[16]);
    }
    return internal_temperature
}
int_temp = getData();
setData(int_temp);
