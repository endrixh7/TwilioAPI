- Before we start make sure that you have VS Code installed and NodeJS
- If you dont, please follow the official documentations on VS Code and NODE JS websites
- First Create a folder 'TwilioAPI'
- Open that folder
- Hold down 'Left Shift' and 'Right Click' with your mouse anywhere and click 'Open with Code(VS Code)'
This method is for Windows 11, because the 'mouse menu' has changed in Windows 11.
On Windows 10 you will see 'Open with Code' by pressing only the 'Right Click' of your mouse.

- Now go to Terminal, commands are the same on Powershell, CMD or Bash.
- Start type : $ npm init -y
- Next command, type : $ git init
- Dont forget to add '.gitignore' file, lets add together.
- The command for gitignore : $ touch .gitignore
- Open the .gitignore and add line by line
"node_modules"
".env"
These files will be ignored during the git push command, will not be published on Github.

- Now lets start using TwilioAPI to send SMS
- Sign up for Twilio if you dont have one.
- Go to dashboard and look for Account Sid, Auth Token and My Twilio phone number.
- Install Twilio helper library: $ npm i twilio
- Install dotenv library: $ npm i dotenv
- Create a file called "index.js" : $ touch index.js
- Create a env variable, ".env" : $ touch .env
- Now lets require both of them on index.js , the entire code will be inside of index.js explanined with comments.

- Now open the .env file and paste this code:
```
TWILIO_ACCOUNT_SID = 'asdasdasdasd652121251-dummy'
TWILIO_AUTH_TOKEN = 'asdasdasdklklkldas-dumy'
TWILIO_NUMBER_TOKEN = +88888888
MY_PHONE_NUMBER = +6685225552352

```
Now go to Twilio Dashboard and change the 'dummy' values with yours.
Please dont publish this, especially TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN.

Now open index js and paste this code:
```
require('dotenv').config()


const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

// Dont require twilio before the initialization of .env variables
const client = require('twilio')(accountSid, authToken);

// Client is Twilio in this case and is going to send sms to MY_PHONE_NUMBER.
// The code is self explanatory
// .then is a promise that will display us the message after the message is sent
client.messages.create({
    // Make sure to put your phone number for testing purpose
    to: process.env.MY_PHONE_NUMBER,
    from : process.env.TWILIO_NUMBER_TOKEN,
    body: 'Hello from Twilio'
}).then((message)=> console.log(message));

```

- Now check your phone and the message it will have arrived by now, looks like this:

```
Sent from your Twilio trial account - Hello from Twilio

```
# Now lets create a simple script
 Where we are going to check if the website is down and as soon as will go up Twilio will send a SMS.

 