const axios = require('axios');
const fs = require('fs');
let url = 'http://cumulusmx:8998/api/tags/process.json?temp&hum&dew&wspeed&wdir&wgust&recentwindchill&heatindex&THWindex&press&rfall&rrate&heatdegdays&cooldegdays&intemp&inhum&WindSampleCount&forecast&time&date&timehhmmss&battery';

//Api sample data
/*
{"temp":"0.0","hum":"0","dew":"0.0","wspeed":"0.0","wdir":"-","wgust":"0.0","recentwindchill":"","heatindex":"0.0","THWindex":"0.0","press":"1020.3","rfall":"618.6","rrate":"0.0","heatdegdays":"0.0","cooldegdays":"0.0","intemp":"28.4","inhum":"57","WindSampleCount":"252","forecast":"Fine weather"}
*/

const getAsyncData = async () => {
  try {
    const resp = await axios.get(url);
    //API ATTRIBUTES
    //More in https://cumuluswiki.org/a/Webtags#Current_Conditions

    //Full object
    let fullobj = resp.data;

    //The outside (air) temperature
    let temp = fullobj.temp;
    //Maximum temperature

    //Min temperature

    //The outside humidity
    let hum = fullobj.hum;
    //The current dew point
    let dew = fullobj.dew;
    //The wind speed
    let wspeed = fullobj.wspeed;
    //The wind direction
    let wdir = fullobj.wdir;
    //The wind run

    //Wind highest speed
    let wgust = fullobj.wgust;
    //Wind direction

    //Wind chill
    let recentwindchill = fullobj.recentwindchill;
    //Current heat index
    let heatindex = fullobj.heatindex;
    //THWIndex
    let thwindex = fullobj.THWindex;
    //The sea level pressure
    let press = fullobj.press;
    //The total rainfall so far today
    let rfall = fullobj.rfall;
    //The current rainfall rate
    let rrate = fullobj.rrate;
    //Today's heating degree days 
    let heatdegdays = fullobj.heatdegdays;
    //Today's cooling degree days
    let cooldegdays = fullobj.cooldegdays;
    //The inside temperature
    let intemp = fullobj.intemp;
    //The inside humidity
    let inhum = fullobj.inhum;
    //The inside dew point

    //The inside heat

    //Inside EMC 

    //Inside Air Density  

    //Wind Samp   

    //Wind Tx

    //ISS Recept  

    //Arc Int

    // The number of wind samples making up the wind rose (etc) data (up to 3600) 
    let WindSampleCount = fullobj.WindSampleCount;
    //The current forecast
    let forecast = fullobj.forecast;

    //Get current date and time
    let date_and_time = fullobj.time;

    //Get current date 
    let date= fullobj.date;

    //Get current time
    let time= fullobj.timehhmmss;

    //Get current battery
    let battery= fullobj.battery;

    //Object with just data
    let formatted_obj = [date, time, temp, hum, dew, wspeed, wdir, wgust, recentwindchill, heatindex, thwindex, press, rfall, rrate, heatdegdays, cooldegdays, intemp, inhum, WindSampleCount, battery];

    //fs.writeFile(filename, "some data", { flag: "wx" }, function(err)

    //Write data in txt
    fs.writeFile("./data.txt", JSON.stringify(formatted_obj) + "\n",{ flag: "a+", encoding: "utf8" },function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("O arquivo foi salvo!");
    });

  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

//Call function
getAsyncData();