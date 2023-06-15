const express = require("express");
const serverless = require("serverless-http");
const app = express ();
const router = express.Router();
const fs = require("fs");
const data = require("../json/peek.json");

app.use(express.json());


/*
exports.handler = async function (event, context) {
  const value = process.env.XABI_API;

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Value of MY_IMPORTANT_VARIABLE is ${value}.` }),
  };  
};
*/


router.get('/', (req, res) => {
	// res.json(data);

	res.json(process.env.XABI_API);

});

router.post('/', (req, res) => {
	
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
})

app.use('/', router);

module.exports.handler = serverless(app);