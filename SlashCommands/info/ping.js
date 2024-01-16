const { EmbedBuilder, CommandInteraction } = require('discord.js')

module.exports = {
name: "ping",
description: "تجربة سرعة استجابة البوت",
async execute(client, interaction) {
    interaction.reply({ content: `:ping_pong: **Pong ${client.ws.ping} ms**`, ephemeral:true });

}
}