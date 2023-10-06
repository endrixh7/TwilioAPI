const accountSid = 'AC1e82f25b63477f35dc01ffc96e7c91c8';
const authToken = '[AuthToken]';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Your appointment is coming up on July 21 at 3PM',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+355688723457'
    })
    .then(message => console.log(message.sid))
    .done();

    