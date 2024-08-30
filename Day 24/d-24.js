const options = {method: "GET", headers: {accept: "application/json"}};

fetch("https://api.openweathermap.org/data/2.5/weather?lat=28.704060&lon=77.102493&appid=298884a0eb81c3428c5c83c0acdc215c", options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.log(err));