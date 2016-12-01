/**
 * Created by Jacob on 01/12/2016.
 */
var config = require('./config');
var client = require('twilio')(config.accountSid, config.authToken);

module.exports.sendSms = function(to, message) {
    client.messages.create({
        body: message,
        to: to,
        from: config.sendingNumber
        // mediaUrl: 'http://www.yourserver.com/someimage.png'
    }, function(err, data) {
        if (err) {
            console.error('Could not notify administrator');
            console.error(err);
        } else {
            console.log('Administrator notified');
        }
    });
};