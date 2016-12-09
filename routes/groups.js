var express = require('express');
var router = express.Router();
var mkbs = require('../model/dataadapter');

/* GET home page. */
router.get('/:id', function(req, res, next) {
    var t= req.params.id;
    mkbs.GetGroupById(req.params.id, function(err, user) {
        if (err) return next(err);
        res.render('groups', {
            user: user,
            title: user.json_out.title[0].mkb_code + ', ' +user.json_out.title[0].mkb_name,
            appId : t })
    });
});

module.exports = router;
