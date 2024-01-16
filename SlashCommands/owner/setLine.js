const { EmbedBuilder, CommandInteraction } = require('discord.js')
const { Database } = require("st.db");
const jdb = new Database("./json/database.json");
const { PermissionsBitField } = require("discord.js");
module.exports = {
name: "set-line",
description: "تحديد خط تلقائي في روم التصويت",
"options": [
    {
        "name": "line",
        "description": "ضع رابط الخط",
        "type": 3,
        "required" : true
    }
],
async execute(client, interaction) {
      if (!interaction.member.permissions.has("Administrator"))
      return interaction.reply({
        content: ":x: | You don't have permission",
        ephemeral: true,
      });
    const linev = interaction.options.getString('line');
    jdb.set('line' , linev)
    interaction.reply(`✅ | line ${linev} seted successfully`)


}
}