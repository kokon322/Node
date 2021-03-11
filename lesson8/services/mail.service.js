const mailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require('path');

const templatesInfo = require('../email-templates');
const { ROOT_EMAIL, ROOT_EMAIL_PASSWORD } = require('../configs/config');
const { ErrorHandler } = require('../errors');
const { ErrorMessage: { WRONG_ACTION } } = require('../constants');

const templateParser = new EmailTemplates({
    views: {
        root: path.join(process.cwd(), 'lesson8', 'email-templates')
    }
});

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: ROOT_EMAIL,
        pass: ROOT_EMAIL_PASSWORD
    }
});

const sendMail = async (userMail, action, context) => {
    try {
        const foundTemplate = templatesInfo[action];

        if (!foundTemplate) {
            throw new ErrorHandler(WRONG_ACTION);
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
