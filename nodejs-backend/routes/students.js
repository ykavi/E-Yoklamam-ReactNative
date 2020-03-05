const express = require("express");
const router = express.Router();
const crypto = require("crypto");

// Models
const Students = require("../models/Students");

//******************/students/new */
router.post("/new", function(req, res, next) {
  // crypto fonk
  var mykey = crypto.createCipher("aes-128-cbc", req.body.password);
  var mystr = mykey.update(req.body.password, "utf8", "hex");
  mystr += mykey.final("hex");
  password = mystr;

  const student = new Students({
    StudenNo: req.body.StudenNo,
    name: req.body.name,
    surName: req.body.surName,
    password,
    mail: req.body.mail,
    phoneNumber: req.body.phoneNumber
  });

  student.save((err, data) => {
    if (err) {
      console.log(err);
      return res.json({
        status: false,
        unique: err.keyPattern.StudenNo == 1 ? "studentNo" : "mail"
      });
    }
    if (data) {
      return res.json({ status: true });
    }
    res.json({ status: false });
  });
});
router.get("/dene", function(req, res) {
  var mykey = crypto.createDecipher("aes-128-cbc", "mypassword");
  var mystr = mykey.update("7402517c148bcd6e585611a1ccc9f920", "hex", "utf8");
  mystr += mykey.final("utf8");

  res.send(mystr);
});
//Sign in
router.post("/isStudent", function(req, res) {
  var mykey = crypto.createCipher("aes-128-cbc", req.body.password);
  var mystr = mykey.update(req.body.password, "utf8", "hex");
  mystr += mykey.final("hex");
  password = mystr;
  const promise = Students.find({
    StudenNo: req.body.studenNo,
    password: password
  }).count();
  promise
    .then(data => {
      console.log(data);
      if (data > 0) {
        return res.json({
          status: true
        });
      } else {
        return res.json({
          status: false
        });
      }
    })
    .catch(err => {
      res.json("Sunucu kaynaklı hata" + err);
    });
});

module.exports = router;
