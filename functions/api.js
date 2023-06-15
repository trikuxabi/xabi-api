const express = require("express");
const serverless = require("serverless-http");
const app = express ();
const router = express.Router();
const fs = require("fs");
const FaunaService = require('@brianmmdev/faunaservice');
const service = new FaunaService(process.env.DB_KEY);

app.use(express.json());


router.get('/', async (req, res) => {
	var user_id = req.query.tagId;
	var data = await service.getRecordById("music", user_id);
	res.json(data);

});

router.post('/', async (req, res) => {
	
	var data = req.query;
	var created = await service.updateRecord("music", user_id, data.id);
	res.json(created);

})

app.use('/', router);

module.exports.handler = serverless(app);