var express = require("express");
var router = express.Router();

const myDB = require("../db/jobmongodb.js");

/* GET home page. */
router.get("/calendar", async (req, res, next) => {
	const caldata = await myDB.getCaldata();
	console.log(next);
	res.json(caldata);
});

router.get("/applications", async (req, res, next) => {
	const appData = await myDB.getAppDetails();
	console.log(next);
	res.json(appData);
});

router.post("/appform", async (req, res) => {
	const post = req.body;
	await myDB.createAppPost(post);
	res.redirect("/");
});


module.exports = router;
