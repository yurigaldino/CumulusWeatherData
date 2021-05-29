const axios = require('axios');

axios.get('http://cumulusmx:8998/api/tags/process.json?temp&hum&dew&wspeed&wdir&wgust&recentwindchill&heatindex&THWindex&press&rfall&rrate&heatdegdays&cooldegdays&intemp&inhum&WindSampleCount&forecast').then(resp => {

  //API ATTRIBUTES
  //More in https://cumuluswiki.org/a/Webtags#Current_Conditions

  let obj =  resp.data;

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
  
  console.log(obj);
});