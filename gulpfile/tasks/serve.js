//Server
module.exports = function () {
	const server = (done) => {
		$.sync.init({
			server: {
				baseDir: 'dist'
			},
			cors: true,
			notify: false,
			ui: false,
		});
		done();
	}
}