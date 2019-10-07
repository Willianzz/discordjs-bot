const { token } = require('../config.json');

exports.login = (client) => {
    try {
        client.login(token);
    } catch (error) {
        console.error(error);
    }
}