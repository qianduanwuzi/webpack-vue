var express = require('express');
var router = express.Router();

router.get('/test1', function(req, res){
    res.json({
        code: 200,
        data:[1,2]
    });
    res.end();
})

module.exports = router;