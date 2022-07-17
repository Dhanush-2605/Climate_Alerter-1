const router=require("express").Router();


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+917702436070',
         from: '+19705924312'
       })
      .then(call => console.log(call.sid));

