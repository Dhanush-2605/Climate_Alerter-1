const router = require("express").Router();

router.post("/", async (req, res) => {
  const msg = req.body.message;
  console.log(msg);

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body:msg,
      to: "+917702436070",
      from: "+19705924312",
    })
    .then((message) => console.log(message.sid)).catch((err)=>{
        console.log(err);
    })
    
 
});

module.exports=router;
