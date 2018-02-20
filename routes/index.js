var express = require('express');
var router = express.Router();
var admin = require('firebase-admin');


/* GET home page. */
router.get('/', function(req, res, next) {
  var db = admin.database();

  // get all data under payslip and send to frontend
  return db.ref('/payslip').once('value').then((result) => {
    res.render('index', {
      title: 'Get Payslip',
      user: JSON.stringify(result)
    })
  })
})

router.get('/new', function(req, res, next) {
  var db = admin.database();
  var payslip = db.ref('/payslip')

  // insert new data to Firebase
  payslip.set({
    sirk: {
      dob: "Jan 1, 2017",
      full_name: "Mr Sirk"
    }
  })

  res.render('index', { title: 'New User' });
});

router.get('/update', (req, res, next) => {
  var db = admin.database();
  var payslip = db.ref('/payslip')
  
  // get data
  var sirk = payslip.child('sirk');
  // update the data on Firebase
  sirk.update({
    "nickname": "Mr Sirk"
  })

  res.render('index', { title: 'Update User' });
})

module.exports = router;
