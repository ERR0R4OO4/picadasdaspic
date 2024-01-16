const { EmbedBuilder, CommandInteraction } = require('discord.js')
const { Database } = require("st.db");
const jdb = new Database("./json/database.json");
const { PermissionsBitField } = require("discord.js");
module.exports = {
name: "set-participate-status",
description: "تحديد حالة المشاركة في المسابقة ( مغلق / مفتوح )",
"options": [
    {
        "name": "participate_status",
        "description": "اختر الحالة",
        "type": 3,
        "required" : true,
        "choices": [
            {
                "name": "open",
                "value": "open"
            },
            {
                "name": "close",
                "value": "close"
            }
        ]
    }
],
async execute(client, interaction) {
      if (!interaction.member.permissions.has("Administrator"))
      return interaction.reply({
        content: ":x: | You don't have permission",
        ephemeral: true,
      });
    const partc_status = interaction.options.getString('participate_st')

    if (partc_status == "open") {
        jdb.set('partc_status' , '1')
        const partcid = jdb.get('apply_room');
        const prtcch = client.channels.cache.get(partcid);
        await prtcch.permissionOverwrites.edit(prtcch.guild.roles.everyone, {
            SendMessages: true,
          });
        await prtcch.send('تم `فتح` المشاركة في المسابقة ✅')
        await interaction.reply("✅ | done")
    }else if(partc_status == "close"){
        jdb.set('partc_status' , '0')
        const partcid = jdb.get('apply_room');
        const prtcch = client.channels.cache.get(partcid);
        await prtcch.permissionOverwrites.edit(prtcch.guild.roles.everyone, {
            SendMessages: false,
          });
        await prtcch.send('تم `غلق` المشاركة في المسابقة ✅')
        await interaction.reply("✅ | done")
    }

}
}