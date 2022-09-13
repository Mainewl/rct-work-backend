const nodemailer = require('nodemailer');

const STMP_CONFIG = require('./config/smtpSSL') 



const transporter = nodemailer.createTransport({
  host: STMP_CONFIG.host, 
  port: STMP_CONFIG.port,
  secure: true,
  auth: {
    user: STMP_CONFIG.user,
    pass: STMP_CONFIG.pass,
  },
//   ignoreTSL: false,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function run(){
  const mailSent = await transporter.sendMail({
    text: "something",
    subject: "TESTE N°1 COM O SITE FALSO",
    from: "Lorem Ipsum <jsmailtst@gmail.com",
    to: ["jsmailtst@gmail.com", "manonha.s2@hotmail.com", "manonhaas.s2@gmail.com"],
  });
  console.log(mailSent)
}

run();
