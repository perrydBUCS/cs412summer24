//Passing data into routes
//
//REST (Representational state transfer)
//
//CRUD = data operation (create, read, update, delete)
//
//POST: Create
//GET: Read
//PUT: Update
//DELETE: Delete
//
var express = require('express');
var router = express.Router();

//Way 1: Query strings, params are on req.query
//
router.get('/way1', (req, res, next) => {
console.log(`Got these values on a ${req.method}`);
let upName = req.query.name.toString().toUpperCase();
res.send(`Got these values: ${req.query.name} plays ${req.query.instrument}. Really, ${upName}!`);
})
//Way 2: Use a POST, values are on req.body
//
router.post('/way1', (req, res, next) => {
  console.log(`Got these values on a ${req.method}`);
  res.send(`Got these values: ${req.body.name} plays ${req.body.instrument}`);
})

//Way 3: Named params, on req.params, e.g. http://localhost:3000/way1/Phil/bass
//
router.get('/way1/:name/:instrument', (req, res, next) => {
  console.log(`Got these values on a ${req.method}`);


})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
