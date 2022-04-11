const nodemailer = require('nodemailer');
const ejs = require('ejs');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,

    auth: {
        user: '@gmail.com',
        pass: '673596#sB'
    }
});


let renderTemplate = (data, relativePath) => {
    let mailHTML;
    ejs
}