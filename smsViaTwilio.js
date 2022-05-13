require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
// console.log(accountSid,authToken,process.env.TWILIO_MY_NUMBER)

client.messages
  .create({
     body: 'vapas test kr rha hu',
     from: process.env.TWILIO_MY_NUMBER,
     to: '+919587501877'
   })
  .then(message => console.log(message.sid)).catch((err) => console.log(err));