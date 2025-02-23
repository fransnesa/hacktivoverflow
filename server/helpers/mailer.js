require('dotenv').config()
const nodemailer = require('nodemailer');
const myEmail = process.env.EMAIL_ADDRESS
const password = process.env.EMAIL_PASSWORD
function emailSent(email,subject,text) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: myEmail,
            pass: password
        }
    });
    var mailOptions = {
        from: myEmail,
        to: email,
        subject: subject,
        text: text
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports = emailSent