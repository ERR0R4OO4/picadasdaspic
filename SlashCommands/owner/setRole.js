const { EmbedBuilder, CommandInteraction } = require('discord.js')
const { Database } = require("st.db");
const jdb = new Database("./json/database.json");
const { PermissionsBitField } = require("discord.js");
module.exports = {
name: "set-role",
description: "تحديد رتبة بعد المشاركة في المسابقة",
"options": [
    {
        "name": "role",
        "description": "اختر الرتبة",
        "type": 8,
        "required" : true
    }
],
async execute(client, interaction) {
      if (!interaction.member.permissions.has("Administrator"))
      return interaction.reply({
        content: ":x: | You don't have permission",
        ephemeral: true,
      });
    const rolev = interaction.options.getRole('role');
    jdb.set('apply_role' , rolev.id)
    interaction.reply(`✅ | role <@&${rolev.id}> seted successfully`)


}
}