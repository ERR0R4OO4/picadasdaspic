const { EmbedBuilder, CommandInteraction } = require('discord.js')
const { Database } = require("st.db");
const jdb = new Database("./json/database.json");
const { PermissionsBitField } = require("discord.js");
module.exports = {
name: "set-participate",
description: "تحديد روم المشاركة في المسابقة",
"options": [
    {
        "name": "participate_channel",
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
    const channelv = interaction.options.getChannel('participate_channel');
    jdb.set('apply_room' , channelv.id)
    interaction.reply(`✅ | channel <#${channelv.id}> seted successfully`)


}
}