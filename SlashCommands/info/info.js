const { EmbedBuilder, CommandInteraction } = require('discord.js')
const { Database } = require("st.db");
const jdb = new Database("./json/database.json");
module.exports = {
name: "info",
description: "معلومات البوت",

async execute(client, interaction) {
    const botinfo = new EmbedBuilder()
                        .setTitle('- **Bot Info **')
                        .setDescription(`
                        ### 🔰 participate room : <#${jdb.get('apply_room')}>

                        ### 💫 participate role : <@&${jdb.get('apply_role')}>

                        ### 🔮 vote room : <#${jdb.get('photo_room')}>

                        ### 🧮 participants number : \`${jdb.get('entries')}\`
                        `);
    interaction.channel.send({embeds : [botinfo]})

}
}