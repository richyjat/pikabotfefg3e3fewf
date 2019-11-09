module.exports = (client) => {
	console.log('Ready!');

	client.user.setStatus('online');

	client.user.setActivity('type f!help');
};