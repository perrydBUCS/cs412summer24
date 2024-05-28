var express = require('express');
var router = express.Router();

router.get('/heyb',
    (req,
     res,
     next) => {
        res.send('now');
    });

module.exports = router;