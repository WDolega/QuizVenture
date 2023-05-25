const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

client.connect((err) => {
	if (err) {
		console.error('Failed to connect to MongoDB:', err);
	} else {
		console.log('Connected to MongoDB!');
	}
});

module.exports = client;
