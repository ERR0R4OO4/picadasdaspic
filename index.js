const express = require("express");
const app = express();

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.use("/ping", (req, res) => {
  res.send(new Date());
});

app.listen(3000, () => {
  console.log("Express is ready.".blue.bold);
});

const {
  Client,
  Collection,
  Partials,
  GatewayIntentBits,
} = require("discord.js");

const config = require("./json/config.json");
// const { glob } = require("glob");
// const { promisify } = require("util");
const { joinVoiceChannel } = require("@discordjs/voice");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { SlashCommandBuilder , EmbedBuilder } = require('@discordjs/builders');
const { Database } = require("st.db");
const jdb = new Database("./json/database.json");
const db = require("quick.db");
const colors = require("colors");
const ms = require("ms");
const client = new Client({
  intents: 131071,
  partials: [
    Partials.Message,
    Partials.Channel,
    Partials.GuildMember,
    Partials.Reaction,
    Partials.GuildScheduledEvent,
    Partials.User,
    Partials.ThreadMember,
  ],
  // shards: "auto",
  // allowedMentions: { repliedUser: true },
});
let prefix =  "*" || db.get("prefix");
//nodejs-events
process.on("unhandledRejection", (e) => {
  console.log(e);
});
process.on("uncaughtException", (e) => {
  console.log(e);
});
process.on("uncaughtExceptionMonitor", (e) => {
  console.log(e);
});
client.on('ready', () => {

  console.log(`Bot is  ready!`);
});
// ===============================================================================================
//                             ماتلعب في الكود عشان مايحصل شي
// ===============================================================================================



// ===============================================================================================
//                             ماتلعب في الكود عشان مايحصل شي
// ===============================================================================================


setTimeout(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill");
    process.kill(1);
  } else {
    console.log("Client Login");
  }
}, 3 * 1000 * 60);

setTimeout(() => {
  process.kill(1);
  console.log("Client Login");
}, 22 * 10000 * 60);


// المشاركة في مسابقة الصور
////////////////////
client.on("messageCreate", async (message) => {
  if (message.content.startsWith(prefix + "delete")) {
      if (!message.member.permissions.has("ADMINISTRATOR")) return ;
        await jdb.set('apply_role' , '')
        await jdb.set('apply_room' , '')
        await jdb.set('photo_room' , '')
        await jdb.set('line' , '')
          message.channel.send("يتم حذف 🔄 البيانات ...").then(m => {
          m.edit(  `✅ | تم حذف البيانات بنجاح ** `
          );
        });
      }
const { EmbedBuilder, CommandInteraction } = require('discord.js')
const { Database } = require("st.db");
const jdb = new Database("./json/database.json");

if (message.content.startsWith(prefix + "config")) {
  // Create a new embed
   const botinfo = new EmbedBuilder()
    .setTitle("- **Bot Info **")

    .setDescription(`
                        ### 🔰 apply room : <#${jdb.get("apply_room")}>
                        
                        ### 💫 apply role : <@&${jdb.get("apply_role")}>
                        
                        ### 🔮 vote room : <#${jdb.get("photo_room")}>
                        
                        ### 🧮 entries number : \`${jdb.get("entries")}\`
                        
                        ### ⚓️ apply rect : ${jdb.get("aplyrect")}
                        
                        ### 🧨 vote rect : ${jdb.get("voterect")}

                        ### 🧸 line :
                        `)
         .setImage(`${jdb.get("line")}`)
  // Send the embed
 message.channel.send({embeds : [botinfo]})
  

}
  if (message.content.startsWith(prefix + "help")) {
  // Create a new embed
   const botinfo = new EmbedBuilder()

    .setTitle(`\`${prefix}delete\`, \`${prefix}config\`, \`${prefix}reset\`, \`${prefix}setline\`, \`${prefix}setvoterec\`, \`${prefix}setaplyrec\`, \`${prefix}setvote\`, \`${prefix}setavater\`, \`${prefix}setsub\`, \`${prefix}setname\`, \`${prefix}setrole\`, \`${prefix}setnum\`, \`${prefix}invite\``)
         .setImage(`${jdb.get("line")}`)
  // Send the embed
 message.channel.send({embeds : [botinfo]})

}
    if (message.content.startsWith(prefix + "setname")) {
        if (!message.member.permissions.has("ADMINISTRATOR")) return ;  
        let botnameee = args.slice(1).join(" ");
        if (!botnameee) return message.channel.send("برجاء وضع اسم للتغير");
        client.user.setUsername(`${botnameee}`);
        message.channel.send(`Changing The bot's Name ...`).then(me => {
            me.edit(`> **✅ تم تغير الاسم الى : \`${botnameee}\`** `);
          });
    }
 if (message.content.startsWith(prefix + "setavatar")) {
       if (!message.member.permissions.has("ADMINISTRATOR")) return ;  
        let botavatar = args.slice(1).join(" ");
        if (!botavatar) return message.channel.send( "برجاء وضع رابط صوره للتغير");
        client.user.setAvatar(`${botavatar}`);
        message.channel.send(`Changing The bot's Avatar ...`).then(me => {
            me.edit(`> **✅ تم تغير الصوره بنجاح** `);
          });
    }
    if (message.content.startsWith(prefix + "invite")) {
        if (!message.member.permissions.has("ADMINISTRATOR")) return ; 
        message.channel.send("creating an invite link..").then(m => {
          let embed = new Discord.MessageEmbed()
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTitle(`Invite Me`)
          .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
           .setTimestamp()
          .setFooter(
           client.user.username,
            client.user.displayAvatarURL({ dynamic: true })
          );
          m.edit(embed)
         })
      }
});


client.on("messageCreate", async (message) => {
  if (message.content.startsWith(prefix + "reset")) {
      if (!message.member.permissions.has("ADMINISTRATOR")) return ;
        await jdb.set('entries' , 0)
          message.channel.send(`> ** ✅ | تم حذف البيانات بنجاح ** `)
          
      }

});

client.on("messageCreate", async (message) => {
  const args = message.content.trim() .split(/ +/);
  if (message.content.startsWith(prefix + "setline")) {
      if (!message.member.permissions.has("ADMINISTRATOR")) return ;
      let linev = args.slice(1).join(" ");
        if (!linev) return message.channel.send("برجاء ارسال الرساله بعد الامر !")
    jdb.set('line' , linev)
    message.channel.send(`✅ | line ${linev} seted successfully`)


      }

});


client.on("messageCreate", async (message) => {
  const args = message.content.trim() .split(/ +/);
  if (message.content.startsWith(prefix + "setvoterec")) {
      if (!message.member.permissions.has("ADMINISTRATOR")) return ;
      let react1 = args.slice(1).join(" ");
        if (!react1) return message.channel.send("برجاء ارسال الرساله بعد الامر !")
    jdb.set('voterect' , react1)
    message.channel.send(`✅ | line ${react1} seted successfully`)


      }
if (message.content.startsWith(prefix + "setaplyrec")) {
      if (!message.member.permissions.has("ADMINISTRATOR")) return ;
      let react2 = args.slice(1).join(" ");
        if (!react2) return message.channel.send("برجاء ارسال الرساله بعد الامر !")
    jdb.set('aplyrect' , react2)
    message.channel.send(`✅ | line ${react2} seted successfully`)


      }
});

client.on("messageCreate", async (message) => {
  const args = message.content.trim() .split(/ +/);
  if (message.content.startsWith(prefix + "setvote")) {
     if (!message.member.permissions.has("ADMINISTRATOR")) return ; 
        let ids = args[1];
        if (!ids) return message.channel.send("برجاء ارسال الاي دي بعد الامر !")
        let channelv = message.guild.channels.cache.find(r => r.id === ids)
        if (!channelv) return message.channel.send("لم امتكن من العثور على هذا الروم !")
    jdb.set('photo_room' , channelv.id)
    message.channel.send(`**تم تحديد روم <#${channelv.id}> للتصويت بنجاح**`)


      }

});

client.on("messageCreate", async (message) => {
  const args = message.content.trim() .split(/ +/);
  if (message.content.startsWith(prefix + "setsub")) {
     if (!message.member.permissions.has("ADMINISTRATOR")) return ; 
        let ids = args[1];
        if (!ids) return message.channel.send("برجاء ارسال الاي دي بعد الامر !")
        let channelv1 = message.guild.channels.cache.find(r => r.id === ids)
        if (!channelv1) return message.channel.send("لم امتكن من العثور على هذا الروم !")
    jdb.set('apply_room' , channelv1.id)
    message.channel.send(`**تم تحديد روم <#${channelv1.id}> للمشاركة بنجاح**`)


      }

});
client.on("messageCreate", async (message) => {
  const args = message.content.trim() .split(/ +/);
  if (message.content.startsWith(prefix + "setrole")) {
     if (!message.member.permissions.has("ADMINISTRATOR")) return ; 
        let role = args[1];
        if (!role) return message.channel.send("برجاء ارسال الاي دي بعد الامر !")
        let role1 = message.guild.roles.cache.find(r => r.id === role)
        if (!role1) return message.channel.send("لم امتكن من العثور علي الرول!")
    jdb.set('apply_role' , role1.id)
    message.channel.send(`**تم تحديد روم <@&${role1.id}> للمشاركة بنجاح**`)


      }

});
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  const entries = jdb.get("entries");
          const entries3 = entries * 2 - (entries - 1);
  const args = message.content.trim() .split(/ +/);
  if (message.content.startsWith(prefix + "setnum")) {
      if (!message.member.permissions.has("ADMINISTRATOR")) return ;
      let entries1 = args.slice(1).join(" ");
        if (!entries1) return message.channel.send("برجاء ارسال الرساله بعد الامر !")
        jdb.set('entries' , entries1);
   
    message.channel.send(`**المتسابق القادم سيكون رقم ${entries3}**`)


      }

});
//////////////////
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  //================= تعريفات =====================
  const apply_role = jdb.get("apply_role");
  const apply_r_done = message.guild.roles.cache.get(apply_role);

  const apply_room = jdb.get("apply_room");
  const thisChannel = client.channels.cache.get(apply_room);

  const photo_room = jdb.get("photo_room");
  const targetChannel = client.channels.cache.get(photo_room);

  const entries = jdb.get("entries");
  const entries1 = entries + 1;
  
  const react2 = jdb.get("aplyrect");
  
  const react1 = jdb.get("voterect");
  
  const line = jdb.get("line")
  //================== تعريفات ====================

  // if channel is the apply room
  if(message.channel.id === apply_room){
        if ((message.attachments.size == 1 && message.guild)) {
          message.attachments.forEach(async (attachment) => { 
            if (attachment.height) {
              const imageURL = attachment.url;
              try {
                // ============= ا الاوامر التي يقوم بها في روم المشاركة=============
                await message.react(`${react2}`);
                await message.member.roles.add(apply_r_done)
                await thisChannel.permissionOverwrites.edit(apply_r_done, {
                  SendMessages: false,
                });
                setTimeout(() => {
                  message.delete();
                }, 4000);
                // ============= ا الاوامر التي يقوم بها في روم المشاركة=============
                
                // ============= الاوامر التي يقوم بها في روم التصويت =============
                jdb.set("entries", entries1);
                // Send the image to the target channel
                
                await targetChannel
                  .send({
                    content: `
                ** المتسابق ** : <@${message.author.id}>
                ** المتسابق رقم : ** \`${entries1}\`
                `,
                    files: [imageURL],
                  })
                  .then((msg) => {
                    msg.react(`${react1}`);
                    msg.channel.send(line)
                    
                  })
                await message.author.send(`**<@${message.author.id}> تمت المشاركة في مسابقة الصور بنجاح برقم ${entries1} <a:1002941601787691078:1155332339270963272>\nرابط مباشر للصوره : https://discord.com/channels/${message.guild.id}/${photo_room}/${message.id} **`);
                // ============= الاوامر التي يقوم بها في روم التصويت =============
              } catch (error) {
                console.error("Error processing the image:", error);
              }
            }
          });
        } else {
          // =============== في حالة ارسال اكثر من صورة او كلام ===============
          console.log("no")
          message.delete();
          const sentmsg = await message.channel.send(`**عذرا لازم ترسل صورة واحدة فقط <@${message.author.id}>**`);
          setTimeout(async() => {
            await sentmsg.delete();
          }, 4000);
        }
      
  }


});
client.on('ready', async() => {
    client.user.setStatus(`online`)
    let status = ['Snow صناع الثقه والضمان'];
  setInterval(()=>{
    client.user.setActivity(status[Math.floor(Math.random()*status.length)]);
  },5000)
});
let msgline = ['1102645747586973706'];

client.on("messageCreate", message => {
 if(message.channel.type === "dm" || 
  message.author.bot) return
  
if(msgline.includes(message.channel.id)){   

  
  message.react("<a:emoji_129:1155340097600884796>")
  message.react("<a:blackflower:1155282710097576006>")
 let args = message.content.split(',')
  message.channel.send("https://media.discordapp.net/attachments/1155329922303271034/1155330768697036831/PicsArt_09-17-02.10.51.png").catch((err) => {
   console.log(err.message)
   })
   }
});
//////////////////

//////////////////
client.login(process.env.token).catch((err) => {
  console.log(err.message);
});
process.on('unhandledRejection', error => {     console.error('Error has been handler!'); });
