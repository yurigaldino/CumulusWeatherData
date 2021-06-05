const axios = require('axios');
const fs = require('fs');
let url = 'http://cumulusmx:8998/api/tags/process.json?temp&hum&dew&wspeed&wdir&wgust&recentwindchill&heatindex&THWindex&press&rfall&rrate&heatdegdays&cooldegdays&intemp&inhum&WindSampleCount&forecast';
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
    let temp = resp.data.temp;
    //Maximum temperature

    //Min temperature

    //The outside humidity
    let hum = resp.data.hum;
    //The current dew point
    let dew = resp.data.dew;
    //The wind speed
    let wspeed = resp.data.wspeed;
    //The wind direction
    let wdir = resp.data.wdir;
    //The wind run

    //Wind highest speed
    let wgust = resp.data.wgust;
    //Wind direction

    //Wind chill
    let recentwindchill = resp.data.recentwindchill;
    //Current heat index
    let heatindex = resp.data.heatindex;
    //THWIndex
    let thwindex = resp.data.THWindex;
    //The sea level pressure
    let press = resp.data.press;
    //The total rainfall so far today
    let rfall = resp.data.rfall;
    //The current rainfall rate
    let rrate = resp.data.rrate;
    //Today's heating degree days 
    let heatdegdays = resp.data.heatdegdays;
    //Today's cooling degree days
    let cooldegdays = resp.data.cooldegdays;
    //The inside temperature
    let intemp = resp.data.intemp;
    //The inside humidity
    let inhum = resp.data.inhum;
    //The inside dew point

    //The inside heat

    //Inside EMC 

    //Inside Air Density  

    //Wind Samp   

    //Wind Tx

    //ISS Recept  

    //Arc Int

    // The number of wind samples making up the wind rose (etc) data (up to 3600) 
    let WindSampleCount = resp.data.WindSampleCount;
    //The current forecast
    let forecast = resp.data.forecast;

    //Write data in txt
    fs.writeFile("./data.txt", JSON.stringify(fullobj), 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });

  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

//Call function
getAsyncData();