var express = require('express');
var router = express.Router();
var mkbs = require('../model/dataadapter');

/* GET home page. */
router.get('/:id', function(req, res, next) {
    var t= req.params.id;
    mkbs.GetGroupById(req.params.id, function(err, user) {
        if (err) return next(err);
        res.render('subgroups', {
            user: user,
            title: user.json_out.title[user.json_out.title.length-1].mkb_code + ', ' +user.json_out.title[user.json_out.title.length-1].mkb_name,
            appId : t })
    });
});

module.exports = router;
