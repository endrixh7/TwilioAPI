require('dotenv').config()
// Dont require twilio before the initialization of .env variables


// Client is Twilio in this case and is going to send sms to MY_PHONE_NUMBER.
// The code is self explanatory
// .then is a promise that will display us the message after the message is sent

// Url 
function getData () {

    // Add a Verified Phone Number via the REST API
    // client.validationRequests
    // .create({friendlyName: 'My Home Phone Number', phoneNumber: '+14158675310'})
    // .then(validation_request => console.log(validation_request.friendlyName));

    const url = 'https://al.ebileta.al/biglietteria/listaEventiPub.do';
    const urlResponse = 'Website eshte online';
    const accountSid = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    const client = require('twilio')(accountSid, authToken);

    fetch(url).then((resp)=>{
        if(resp.ok) {
            client.messages.create({
                to: process.env.MY_PHONE_NUMBER,
                from : process.env.TWILIO_NUMBER_TOKEN,
                body: `${urlResponse}`
            }).then((message)=> console.log(message));        
        }
        
    })
    .then()
    .catch((error)=>{
        console.log(error);
    })
}
getData();