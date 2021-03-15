const { emailActions: { WELCOME, USER_UPDATED, USER_DELETED } } = require('../constants');

module.exports = {
    [WELCOME]: {
        templateName: 'welcome',
        subject: 'welcome on our web Site'
    },

    [USER_UPDATED]: {
        templateName: 'update',
        subject: 'your account is updated'
    },

    [USER_DELETED]: {
        templateName: 'delete',
        subject: 'your account is deleted'
    }
};
