exports.eventsLaucher = (client) => {
    /**
     * - Thaylor - 07-10-2019
     * - Perceba que os eventos estão organizados por ordem alfabéticas, manter essa organização.
     * - Sempre que nos referimos a cliente estamos falando do bot, e aplicação, seria todo o código.
     */

    /**
     * - Evento é emitido sempre que um novo canal é criado, sendo ele de voz ou texto.
     */
    client.on('channelCreate', channel => console.log('channelCreate'));

    /**
     * - Evento é emitido sempre que um canal é deletado, sendo ele de voz ou texto.
     */
    client.on('channelDelete', channel => console.log('channelDelete'));

    /**
     * - Evento é emitido sempre que uma mensagem fixada é atualizada no canal.
     */
    client.on('channelPinsUpdate', (channel, time) => console.log('channelPinsUpdate'));

    /**
     * - Este evento é emitido sempre que as informações do canal são atualizadas.
     */
    client.on('channelUpdate', (oldChannel, newChannel) => console.log('channelUpdate'));

    /**
     * - Evento emitido sempre que as configurações do usuário são atualizadas no servidor.
     */
    client.on('clientUserGuildSettingsUpdate', clientUserGuildSettings => console.log('clientUserGuildSettingsUpdate'));

    /**
     * - Evento emitido sempre que as configurações do usuário são atualizadas.
     */
    client.on('clientUserSettingsUpdate', clientUserSettings => console.log('clientUserSettingsUpdate'));

    /**
     * - Evento emitido para informações de depuração.
     */
    client.on('debug', info => console.log('debug'));

    /**
     * - Evento emitido sempre que o cliente desconecta do servidor. Lembrando que quando paramos a aplicação, o evento é emitido, mas como a aplicação não esta sendo executada não aparecera nada.
     */
    client.on('disconnect', () => console.log('disconnect'));

    /**
     * - Evento emitido sempre que um novo emoji é adicionado no servidor.
     */
    client.on('emojiCreate', emoji => console.log('emoji'));

    /**
     * - Evento emitido sempre que um emoji é deletado do servidor.
     */
    client.on('emojiDelete', emoji => console.log('emojiDelete'));

    /**
     * - Evento emitido sempre que um emoji é atualizado.
     */
    client.on('emojiUpdate', (oldEmoji, newEmoji) => console.log('emojiUpdate'));

    /**
     * - Evento emitido sempre que ocorre algum erro no processamento da aplicação.
     */
    client.on('error', error => console.error('error'));

    /**
     * - Evento emitido sempre que algum usuário pe banido do servidor.
     */
    client.on('guildBanAdd', (guild, user) => console.log('guildBanAdd'));

    /**
     * - Evento emitido sempre que um usuário que removido da lista de banimentos do servidor.
     */
    client.on('guildBanRemove', (guild, user) => console.log('guildBanRemove'));

    /**
     * - Evento emitido sempre que o cliente ingressa em algum servidor.
     */
    client.on('guildCreate', guild => console.log('guildCreate'));

    /** 
     * - Evento emitido sempre que um servidor é excluído ou quando o cliente deixa o servidor.
     */
    client.on('guildDelete', guild => console.log('guildDelete'));

    /**
     * - Evento emitido sempre que um novo membro entra no servidor.
     */
    client.on('guildMemberAdd', member => console.log('guildMemberAdd'));

    /**
     * - Evento emitido sempre que um membro fica disponível (fica online) em um servidor.
     */
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
}