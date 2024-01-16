const { EmbedBuilder, CommandInteraction } = require('discord.js')
const { Database } = require("st.db");
const jdb = new Database("./json/database.json");
const { PermissionsBitField } = require("discord.js");
module.exports = {
name: "reset",
description: "لحذف بيانات المسابقة ( صور / مشاركين ... )",
"options": [
    {
        "name": "sure",
        "description": "هذا الامر خطير اذا انت متاكد اكتب 1",
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
    const surev = interaction.options.getString('sure');
    if(surev == '1'){
        const vote_r_d = await interaction.guild.roles.cache.get(jdb.get('apply_role'));
        await interaction.guild.members.cache.forEach(member => {
            member.roles.remove(vote_r_d)
          });
        await jdb.set('apply_role' , '')
        await jdb.set('apply_room' , '')
        await jdb.set('photo_room' , '')
        await jdb.set('line' , '')
        await jdb.set('entries' , 0)
        await interaction.channel.send('يتم حذف 🔄 البيانات ...')
        setTimeout(() => {
            interaction.channel.send('✅ | تم حذف البيانات بنجاح ')
        }, 5000);


    }else{
        await interaction.reply('❌ | تم الغاء الامر')
    }

}
}