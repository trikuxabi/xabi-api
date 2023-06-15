const express = require("express");
const serverless = require("serverless-http");
const app = express ();
const router = express.Router();
const fs = require("fs");
const data = require("../json/peek.json");

app.use(express.json());


router.get('/', (req, res) => {
	
	// res.json(data);

	res.send(process.env.XABI_API);

});

router.post('/', (req, res) => {
	
	/*
	const jsonObj = req.query;

	fs.writeFile(
		"./json/peek.json",
		JSON.stringify(jsonObj),
		function(err) {
			if (err) {
				return console.log(err);
			}
			console.log("JSON updated.");
		}
	);

	res.json(jsonObj);
	*/

	const jsonObj = req.query;
	const jsonStr = JSON.stringify(jsonObj)
	process.env.XABI_API = jsonStr;
	res.send(process.env.XABI_API);

})

app.use('/', router);

module.exports.handler = serverless(app);