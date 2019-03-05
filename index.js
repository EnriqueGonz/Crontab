"use strict";
const nodemailer = require("nodemailer");
async function main(){
let account = await nodemailer.createTestAccount();
let transporter = nodemailer.createTransport({
host:'smtp.gmail.com',
port:465,
secure:true,
auth:{
user:'enriquegonz1323@gmail.com',
pass:''
}
});

let mailOptions={
from:'enriquegonz1323@gmail.com',
to:'mmoreno@ids.upchiapas.edu.mx',
subjet:"Hola",
text:"Prueba Cron"
};
let info= await transporter.sendMail(mailOptions)
console.log("Message sent:",info.messageId);
console.log("Preview URL:",nodemailer.getTestMessageUrl(info));
}
main().catch(console.error);
