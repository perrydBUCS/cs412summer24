var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',
    function(
             req,
             res,
             next) {
//  res.render('index', { title: 'Express' });
res.json({name: 'Fred', instrument: 'guitar'})
});

//We match the URL *and* the method, so this one is GET:/hey
router.get('/hey',
    (req,
     res,
     next) => {
  res.send('now');
})
//...this one is POST:/hey
router.post('/hey', (req, res, next) => {
  res.send('NOWPOST');
})
module.exports = router; //exporting = making it visible
