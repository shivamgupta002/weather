const form=document.querySelector("form")
const search=document.querySelector("input")
form.addEventListener("submit",function(event){
  // console.log(search.value)
  event.preventDefault();
// })
// console.log(search.value)
let place = search.value; //Place where we want to see see weather
let a = fetch(
  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=metric&key=V3PYDWKT4YG97NXPBEXRNWJCN&contentType=json`
);

a.then((value1) => {
  return value1.json();
})
  .then((data) => {
    console.log(data);
    //weather conditions (currentConditions)
    let conditions = data.currentConditions.conditions;
    let time = data.currentConditions.datetime;
    let humidity = data.currentConditions.humidity;
    let pressure = data.currentConditions.pressure;

    //weather conditions (basic)

    let sunrise = data.currentConditions.sunrise;
    let sunset = data.currentConditions.sunset;
    let temperature = data.currentConditions.temp;
    let visibility = data.currentConditions.visibility;
    let windspeed = data.currentConditions.windspeed;

    //weather conditions
    let lati = data.latitude;
    let long = data.longitude;


    document.getElementById("place").innerHTML = place;
    document.getElementById("conditions").innerHTML = conditions;
    document.getElementById("time").innerHTML = time;
    document.getElementById("humidity").innerHTML = humidity +' %';
    document.getElementById("pressure").innerHTML = pressure + ' atm';

    document.getElementById("sunrise").innerHTML = sunrise +' AM';
    document.getElementById("sunset").innerHTML = sunset +' PM';
   
    document.getElementById("temperature").innerHTML = temperature +' &#8451' ;

    document.getElementById("visibility").innerHTML = visibility+' KM';
    document.getElementById("windspeed").innerHTML = windspeed +' KMPH';

    document.getElementById("lati").innerHTML = lati;
    document.getElementById("long").innerHTML = long;
  })
  .catch((error) => {
    console.log(`The Error is ${error}`);
  });
})

