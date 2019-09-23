const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendContactFormInfo = functions.database.ref('/messages/{messageId}').onWrite((change, context) => {
    const data = change.after.val();
    const name = data.name;
    const subject = "New Inquiry";
    const email = data.email;
    const message = data.message;
    const mailTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'alexawwwhitehurst@gmail.com',
            pass: 'Whitehurst#00!'
        }
    });
    // Send email function
    function sendEmail(name, email, subject, message) {
        const mailOptions = {
            from: 'AlexaWhitehurst.com <alexawwwhitehurst@gmail.com>',
            to: 'alexa.e.whitehurst@gmail.com'
        };
        // hmtl message constructions
        mailOptions.subject = subject;
        mailOptions.html = `<p>Ayo, Lex, someone emailed you:</p>
                        <p><b>Name: </b>${name}</p>
                        <p><b>Email: </b>${email}</p>
                        <p><b>Message: </b>${message}</p>`;
        return mailTransport.sendMail(mailOptions);
    }

    sendEmail(name, email, subject, message);

    return data
});