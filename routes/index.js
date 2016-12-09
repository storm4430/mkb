var express = require('express');
var router = express.Router();
var mkbs = require('../model/dataadapter');

/* GET home page. */
router.get('/', function(req, res, next) {
    mkbs.GetGroups(req.params.id, function(err, user) {
        if (err) return next(err);
        res.render('index', { user: user, title : 'Справочник МКБ', appId : 99999 });
    });
});

module.exports = router;
