const { EmbedBuilder, CommandInteraction } = require('discord.js')
const { PermissionsBitField } = require("discord.js");
const { Database } = require("st.db");
const jdb = new Database("./json/database.json");
module.exports = {
name: "set-vote",
description: "تحديد روم التصويت في المسابقة",
"options": [
    {
        "name": "vote_channel",
        "description": "اختر الروم",
        "type": 7,
        "required" : true
    }
],
async execute(client, interaction) {
      if (!interaction.member.permissions.has("Administrator"))
      return interaction.reply({
        content: ":x: | You don't have permission",
        ephemeral: true,
      });
    const channelv = interaction.options.getChannel('vote_channel');
    jdb.set('photo_room' , channelv.id)
    interaction.reply(`✅ | channel <#${channelv.id}> seted successfully`)


}
}