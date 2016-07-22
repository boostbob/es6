var CronJob = require('cron').CronJob;

new CronJob('*/3 * * * * *', function() {
	console.log('You will see this message every 3 seconds');
}, null, true, 'America/Los_Angeles');

console.log('blocked??');