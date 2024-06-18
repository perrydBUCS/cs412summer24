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

fetch("https://api.openweathermap.org/data/3.0/onecall?lat=40.3&lon=-71.1&exclcurrentude=minutely,hourly,daily,alerts&appid=6d13b989d2175d527ad89638956aec97&units=imperial", requestOptions)
    .then((response) => response.text())
    .then((result) => {
        console.log(result);
        //NOTE: 'result' is STRINGIFIED JSON
//        res.send(result);
        //instead of just sending data, format it with a template
        //
        let parsedWx = JSON.parse(result);
        parsedWx.title = "Weather for BU"; //adds a field to the object
        //res.render('wx', parsedWx);
        //instead return to front end
        res.json(parsedWx);
    })
    .catch((error) => console.error(error));

})


module.exports = router;