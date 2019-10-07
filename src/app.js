const discord = require('discord.js');
const { eventsLaucher } = require('./discord/events');
const { login } = require('./discord/login');

const client = new discord.Client();

/**
 * - Realiza o login da aplicação no discord.
 */
login(client);

/**
 * - Inicializa os listeners dos eventos.
 */
eventsLaucher(client);
