const { EMAIL_ACTION } = require('../constant');

module.exports = {
    [EMAIL_ACTION.WELCOME]: {
        templateName: 'welcome',
        subject: 'welcome on our web Site'
    },

    [EMAIL_ACTION.USER_UPDATED]: {
        templateName: 'update',
        subject: 'your account is updated'
    },

    [EMAIL_ACTION.USER_DELETED]: {
        templateName: 'delete',
        subject: 'your account is deleted'
    }
};
