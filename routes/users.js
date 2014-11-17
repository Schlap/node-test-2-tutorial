var express = require('express');
var router = express.Router();

/*Get userlists*/

router.get('/userlist', function(req, res){
  var db = req.db;
  db.collection('userlist').find().toArray(function(err, items){
    res.json(items);
  });
});

router.post('/adduser', function(req, res) {
  var db = req.db;
  db.collection('userlist').insert(req.body, function(err, result){
    res.send(
      (err === null) ? {msg: ''} : {msg: err}
    );
  });
});

module.exports = router;