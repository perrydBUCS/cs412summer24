var express = require('express');
var router = express.Router();

//openweather returns times as UNIX timestamps

const requestOptions = {
    method: "GET",
    redirect: "follow"
};
//match http://localhost:3000/wx/current...
//
router.get('/current', (req, res, next) => {

fetch("https://api.openweathermap.org/data/3.0/onecall?lat=42.3&lon=-71.1&exclude=minutely,hourly,daily,alerts&appid=6d13b989d2175d527ad89638956aec97&units=imperial", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
next();
})


module.exports = router;