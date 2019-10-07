const discord = require('discord.js');
const { token } = require('../config.json')

exports.eventLaucher = () => {
    const client = new discord.Client();

    /*
        Thaylor - 07-10-2019
        Perceba que os eventos estão organizados por ordem alfabéticas, manter essa organização
    */

    client.on('channelCreate', channel => console.log('channelCreate'));

    client.on('channelDelete', channel => console.log('channelDelete'));

    client.on('channelPinsUpdate', (channel, time) => console.log('channelPinsUpdate'));

    client.on('channelUpdate', (oldChannel, newChannel) => console.log('channelUpdate'));

    client.on('clientUserGuildSettingsUpdate', clientUserGuildSettings => console.log('clientUserGuildSettingsUpdate'));

    client.on('clientUserSettingsUpdate', clientUserSettings => console.log('clientUserSettingsUpdate'));

    client.on('debug', info => console.log('debug'));

    client.on('disconnect', () => console.log('disconnect'));

    client.on('emojiCreate', emoji => console.log('emoji'));

    client.on('emojiDelete', emoji => console.log('emojiDelete'));

    client.on('emojiUpdate', (oldEmoji, newEmoji) => console.log('emojiUpdate'));

    client.on('error', error => console.error('error'));

    client.on('guildBanAdd', (guild, user) => console.log('guildBanAdd'));

    client.on('guildBanRemove', (guild, user) => console.log('guildBanRemove'));

    client.on('guildCreate', guild => console.log('guildCreate'));

    client.on('guildDelete', guild => console.log('guildDelete'));

    client.on('guildMemberAdd', member => console.log('guildMemberAdd'));

    client.on('guildMemberAvailable', member => console.log('guildMemberAvailable'));

    client.on('guildMemberRemove', guild => console.log('guildMemberRemove'));

    client.on('guildMembersChunk', (members, guild) => console.log('guildMembersChunk'));

    client.on('guildMemberSpeaking', (member, speaking) => console.log('guildMemberSpeaking'));

    client.on('guildMemberUpdate', (oldMember, newMember) => console.log('guildMemberUpdate'));

    client.on('guildUnavailable', guild => console.log('guildUnavailable'));

    client.on('guildUpdate', (oldGuild, newGuild) => console.log('guildUpdate'));

    client.on('guildIntegrationsUpdate', guild => console.log('guildIntegrationsUpdate'));

    client.on('message', message => console.log('message'));

    client.on('messageDelete', message => console.log('messageDelete'));

    client.on('messageDeleteBulk', messages => console.log('messageDeleteBulk'));

    client.on('messageReactionAdd', (messageReaction, user) => console.log('messageReactionAdd'));

    client.on('messageReactionRemove', (messageReaction, user) => console.log('messageReactionRemove'));

    client.on('messageReactionRemoveAll', message => console.log('messageReactionRemoveAll'));

    client.on('messageUpdate', (oldMessage, newMessage) => console.log('messageUpdate'));

    client.on('presenceUpdate', (oldMember, newMember) => console.log('presenceUpdate'));

    client.on('rateLimit', rateLimit => console.log('rateLimit'));

    client.on('ready', () => console.log('ready'));

    client.on('reconnecting', () => console.log('reconnecting'));

    client.on('resume', replayed => console.log('resume'));

    client.on('roleCreate', role => console.log('roleCreate'));

    client.on('roleDelete', role => console.log('roleDelete'));

    client.on('roleUpdate', (oldRole, newRole) => console.log('roleUpdate'));

    client.on('typingStart', (channel, user) => console.log('typingStart'));

    client.on('typingStop', (channel, user) => console.log('typingStop'));

    client.on('userNoteUpdate', (user, oldNote, newNote) => console.log('userNoteUpdate'));

    client.on('userUpdate', (oldUser, newMember) => console.log('userUpdate'));

    client.on('voiceStateUpdate', (oldMember, newMember) => console.log('voiceStateUpdate'));

    client.on('warn', info => console.warn('warn'));

    client.on('webhookUpdate', channel => console.log('webhookUpdate'));

    client.on('ready', () => console.log('Online.'));

    client.login(token);
}