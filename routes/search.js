var express = require('express');
var router = express.Router();
var mkbs = require('../model/dataadapter');

/* GET home page. */
router.get('/:query', function(req, res, next) {
    mkbs.GetSearch(req.params.query, function(err, user) {
        if (err) return next(err);
        res.render('search', { user: user });
    });
});

module.exports = router;
