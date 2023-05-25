const express = require('express');
const router = express.Router();
const client = require('../data/mongodb');

router.get('/', async (req, res, next) => {
	try {
		const data = await client
			.db('quiz_venture')
			.collection('famous_places_quiz')
			.find()
			.toArray();
		console.log(data);
		res.json(data);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Failed to fetch data.' });
	}
});

module.exports = router;
