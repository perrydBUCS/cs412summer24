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

router.get('/hey', (req, res, next) => {
  res.send('now');
})

router.post('/hey', (req, res, next) => {
  res.send('NOWPOST');
})
module.exports = router;
