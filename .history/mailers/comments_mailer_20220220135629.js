const nodemailer = require('../config/nodemailer');
const nodeMailer = require('../config/nodemailer');

//module.exports = newComment

exports.newComment = (comment) => {
    console.log('inside new comment mailer', comment);

    nodemailer.transporter.sendMail({
        from: 'ssayan.student@gmail.com',
        to: comment.user.email,
        subject: "New Comment Published!",
        html: '<h1>Yup, your comment is now made! </h1>'


    }, (err, info) => {
        if (err) {
            console.log('Error in sending mail', err);
            return;
        }

        console.log('Message sent', info);
        return;
    })
}