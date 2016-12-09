var pg = require('pg');
var DATABASE_URL = 'postgres://postgres:Qwerty@localhost:5432/MKB';

function query(sql, params, cb) {
    console.log(sql, params);
    pg.connect(DATABASE_URL, function(err, client, done) {
        if (err) {
            done(); // release client back to pool
            console.log(params);
            cb(err);
            return;
        }
        console.log(params);
        client.query(sql, params, cb);
        done();
    });
}

// returns user object if found, else returns undefined
exports.GetGroups = function(id, cb) {
    var sql = 'SELECT * FROM public.fn_mkb10_sel()';

    query(sql, function(err, result) {
        if (err) return cb(err);
        cb(null, result.rows[0]);
    });
};

exports.GetGroupById = function(id, cb) {
    var sql = 'SELECT * FROM public.fn_mkb10_sel($1)';

    query(sql, [id], function(err, result) {
        if (err) return cb(err);
        cb(null, result.rows[0]);
    });
};

exports.GetSearch = function(sstring, cb) {
    var sql = 'select * from public.fn_mkb10_sel(id_in:=NULL, mkb_code_in:=NULL, search_in:=$1)';
    query(sql, [sstring], function(err, result) {
        if (err) return cb(err);
        cb(null, result.rows[0]);
    });
};

// returns created user object
exports.insertUser = function(data, cb) {
    // var sql = '';
    //
    // bcrypt.hashPassword(data.password, function(err, hashedPassword) {
    //     if (err) return cb(err);
    //     query(sql, [data.username, hashedPassword], function(err, result) {
    //         if (err) return cb(err);
    //         cb(null, result.rows[0]);
    //     });
    // });
};