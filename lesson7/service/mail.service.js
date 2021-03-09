const mailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require('path');

const { ROOT_EMAIL, ROOT_EMAIL_PASSWORD } = require('../config/config');
const templatesInfo = require('../email-templates');

const templateParser = new EmailTemplates({
    views: {
        root: path.join(process.cwd(), 'lesson7', 'email-templates')
    }
});

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: ROOT_EMAIL,
        pass: ROOT_EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

const sendMail = async (userMail, actions, context) => {
    try {
        const foundTemplate = templatesInfo[actions];

        if (!foundTemplate) {
            throw new Error('Wrong action');
        }

        const html = await templateParser.render(foundTemplate.templateName, context);

        return transporter.sendMail({
            from: 'Hello World',
            to: userMail,
            subject: foundTemplate.subject,
            html
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    sendMail
};
