var express = require("express");
var router = express.Router();

var painelController = require("../controllers/painelController");

router.get("/buscar", function (req, res) {
    painelController.buscar(req, res);
});


module.exports = router;