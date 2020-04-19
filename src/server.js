const http = require('http');

const app = require('./app');

http
	.createServer(app)
	.on('error', (err) => {
		console.error({ err }, 'The HTTP server threw an error. Exiting.');
		process.exit(1);
	})
	.listen(8080, () => console.log('Server running.'));
