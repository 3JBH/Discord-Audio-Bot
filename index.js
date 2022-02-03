const Discord = require('discord.js');
const ffmpeg = require("ffmpeg-cli")
const scdl = require('soundcloud-downloader').default
const ytdl = require('ytdl-core');
const client = new Discord.Client({intents: 32767});
const request = require(`request`);
const fs = require("fs")
const { Token, Prefix } = require('./config.json');

var randomstring = require("randomstring");

client.on("message", async function (msg) {
let body = msg.content.split(" ");
	

	const randomnumber = Math.floor(Math.random() * 999)
    const args = msg.content.slice(Prefix.length).trim().split(' ');
    

    if (body[0] === `${Prefix}yt`) {
        var p = randomstring.generate(5);
        if (!args[0]) return msg.reply('No **Youtube** link found.');  
           ["https://www.youtube.com/" , "https://youtu.be/"].includes(args[0]);
                msg.reply("Started Download Song From **Youtube**...")
            const link = args.join(" ");		
            ytdl(`${link}`)
                .pipe(fs.createWriteStream('Results/'+p));
            await new Promise(resolve => setTimeout(resolve, 99999));
    
            ffmpeg.run("-y -i "+ process.cwd()+"/Results/"+p + " -map 0:a:0 -b:a 96k -ar 32000 "+process.cwd()+`/Results/YTDL_${randomnumber}.ogg`)
                  .then((result)=>{
                      console.log("ffmpeg part")
                    msg.reply("Finished. <a:duck:932303491307798550>",{
                        files: [`Results/YTDL_${randomnumber}.ogg`
                ]}).then(result=>{
                fs.unlinkSync("Results/"+p)
                fs.unlinkSync(`Results/YTDL_${randomnumber}.ogg`)
                console.log("Deleted All Files.")
            });
        })	
         }
    
        if (body[0] === `${Prefix}sc`) {
        var p = randomstring.generate(5);
        if (!args[0]) return msg.reply('No **SoundCloud** link found.');
        ["https://soundcloud.com/" , "https://m.soundcloud.com/"].includes(args[0]);
            msg.reply("Started Download Song From **SoundCloud**...")
        const link = args.join(" ");
        const SOUNDCLOUD_URL = `${link}`
    
        scdl.download(SOUNDCLOUD_URL).then(stream => stream.pipe(fs.createWriteStream('Results/'+p)))
    
        await new Promise(resolve => setTimeout(resolve, 99999));
    
        ffmpeg.run("-y -i "+ process.cwd()+"/Results/"+p + " -map 0:a:0 -b:a 96k -ar 32000 "+process.cwd()+`/Results/SCDL_${randomnumber}.ogg`)
                  .then((result)=>{
                    msg.reply("Finished. <a:duck:932303491307798550>",{
                        files: [`Results/SCDL_${randomnumber}.ogg`
                    ]}).then(result=>{
                        fs.unlinkSync("Results/"+p)
                        fs.unlinkSync(`Results/SCDL_${randomnumber}.ogg`)
                        console.log("Deleted All Files.")
        });
      })
       }  

       if (body[0] === `${Prefix}8d`) {          
        if(!msg.attachments.first()){ msg.reply("pls attach a file") }
          if(msg.attachments.first()){
           var p = randomstring.generate(5);
  try {
              var stream = request(msg.attachments.first().url).pipe(fs.createWriteStream('Results/'+p))
              stream.on('finish', function () { 
       
                  msg.reply("Adding Effect...")
                  console.log(p)
                  
              ffmpeg.run("-i " + process.cwd()+"/Results/"+p+ ' -af apulsator=hz=0.125 ' + process.cwd()+`/Results/8d_${randomnumber}.ogg`)
              .then((result)=>{
                console.log(result)
                  msg.reply("Finished.", {
                      files: [
                        `Results/8d_${randomnumber}.ogg`,
                       
                      ]}).then(result=>{
                        fs.unlinkSync(`Results/8d_${randomnumber}.ogg`)
                      fs.unlinkSync("Results/"+p);
                      })
                
              })
          
            })
              }  catch {
              msg.channel.send("Error")
            }
            }
         
              }

              if (body[0] === `${Prefix}bass`) {
                if(!msg.attachments.first()){ msg.reply("pls attach a file") }
                  if(msg.attachments.first()){
                   var p = randomstring.generate(5);
          try {
                      var stream = request(msg.attachments.first().url).pipe(fs.createWriteStream('Results/'+p))
                      stream.on('finish', function () { 
               
                          msg.reply("Adding Effect...")
                          console.log(p)
                          
                      ffmpeg.run("-i " + process.cwd()+"/Results/"+p+ ' -af bass=g=15 ' + process.cwd()+`/Results/Bass_${randomnumber}.ogg`)
                      .then((result)=>{
                        console.log(result)
                          msg.reply("Finished.", {
                              files: [
                                `Results/Bass_${randomnumber}.ogg`,
                               
                              ]}).then(result=>{
                                fs.unlinkSync(`Results/Bass_${randomnumber}.ogg`)
                              fs.unlinkSync("Results/"+p);
                              })
                        
                      })
                  
                    })
                      }  catch {
                      msg.channel.send("Error")
                    }
                    }
                 
                      }

                      if (body[0] === `${Prefix}underwater`) {
                        if(!msg.attachments.first()){ msg.reply("pls attach a file") }
                          if(msg.attachments.first()){
                           var p = randomstring.generate(5);
                  try {
                              var stream = request(msg.attachments.first().url).pipe(fs.createWriteStream('Results/'+p))
                              stream.on('finish', function () { 
                       
                                  msg.reply("Adding Effect...")
                                  console.log(p)
                                  
                              ffmpeg.run("-i " + process.cwd()+"/Results/"+p+ ' -af "lowpass=f=1000" ' + process.cwd()+`/Results/underwater_${randomnumber}.ogg`)
                              .then((result)=>{
                                console.log(result)
                                  msg.reply("Finished.", {
                                      files: [
                                        `Results/underwater_${randomnumber}.ogg`,
                                       
                                      ]}).then(result=>{
                                        fs.unlinkSync(`Results/underwater_${randomnumber}.ogg`)
                                      fs.unlinkSync("Results/"+p);
                                      })
                                
                              })
                          
                            })
                              }  catch {
                              msg.channel.send("Error")
                            }
                            }
                         
                              }

                              if (body[0] === `${Prefix}slow`) {
                                if(!msg.attachments.first()){ msg.reply("pls attach a file") }
                                  if(msg.attachments.first()){
                                   var p = randomstring.generate(5);
                          try {
                                      var stream = request(msg.attachments.first().url).pipe(fs.createWriteStream('Results/'+p))
                                      stream.on('finish', function () { 
                               
                                          msg.reply("Adding Effect...")
                                          console.log(p)
                                          
                                      ffmpeg.run("-i " + process.cwd()+"/Results/"+p+ ' -filter:a "atempo=0.800" -vn ' + process.cwd()+`/Results/slow_${randomnumber}.ogg`)
                                      .then((result)=>{
                                        console.log(result)
                                          msg.reply("Finished.", {
                                              files: [
                                                `Results/slow_${randomnumber}.ogg`,
                                               
                                              ]}).then(result=>{
                                                fs.unlinkSync(`Results/slow_${randomnumber}.ogg`)
                                              fs.unlinkSync("Results/"+p);
                                              })
                                        
                                      })
                                  
                                    })
                                      }  catch {
                                      msg.channel.send("Error")
                                    }
                                    }
                                 
                                      }

if (body[0] === `${Prefix}reverse`) {
 if(!msg.attachments.first()){ msg.reply("pls attach a file") }
 if(msg.attachments.first()){
var p = randomstring.generate(5);
 try {
var stream = request(msg.attachments.first().url).pipe(fs.createWriteStream('Results/'+p))
stream.on('finish', function () { 
                                       
msg.reply("Adding Effect...")
console.log(p)
                                                  
  ffmpeg.run("-i " + process.cwd()+"/Results/"+p+ ' -vf reverse -af areverse ' + process.cwd()+`/Results/reverse_${randomnumber}.ogg`)
.then((result)=>{
   console.log(result)
 msg.reply("Finished.", {
 files: [
  `Results/reverse_${randomnumber}.ogg`,
                                                       
 ]}).then(result=>{
fs.unlinkSync(`Results/reverse_${randomnumber}.ogg`)
 fs.unlinkSync("Results/"+p);
 })
                                                
    })
                                          
 })
   }  catch {
   msg.channel.send("Error")
   }
        }                                     
   }

   if (body[0] === `${Prefix}reverb`) {
    if(!msg.attachments.first()){ msg.reply("pls attach a file") }
    if(msg.attachments.first()){
   var p = randomstring.generate(5);
    try {
   var stream = request(msg.attachments.first().url).pipe(fs.createWriteStream('Results/'+p))
   stream.on('finish', function () { 
                                          
   msg.reply("Adding Effect...")
   console.log(p)
                                                     
     ffmpeg.run("-i " + process.cwd()+"/Results/"+p+ ' -af aecho=1.0:0.7:20:0.5 ' + process.cwd()+`/Results/reverb_${randomnumber}.ogg`)
   .then((result)=>{
      console.log(result)
    msg.reply("Finished.", {
    files: [
     `Results/reverb_${randomnumber}.ogg`,
                                                          
    ]}).then(result=>{
   fs.unlinkSync(`Results/reverb_${randomnumber}.ogg`)
    fs.unlinkSync("Results/"+p);
    })
                                                   
       })
                                             
    })
      }  catch {
      msg.channel.send("Error")
      }
           }                                     
      }
                   

       if (body[0] === `${Prefix}cmds` || body[0] === `${Prefix}commands`|| body[0] === `${Prefix}help`) {
		const embed = new Discord.MessageEmbed()
		.setColor('36393F')
		.setTitle('[ COMMANDS ]')
		.setDescription('──────────────────────────\n**!yt <URL>** - Download a **Youtube** video to MP3\n\n**!sc <URL>** - Download a **SoundCloud** song\n\n**!underwater** - Underwater effect\n\n**!bass** - Bass effect\n\n**!slow** - Slow your audio file\n\n**!reverb** - Add echo your audio file\n\n**!reverse** - Reverse your audio\n──────────────────────────\n\n**Source:** https://github.com/3JBH/Discord-Audio-Bot')
		.setFooter('Simple Discord Audio Bot Made By robson#0171', 'https://cdn-icons-png.flaticon.com/512/25/25231.png')
		msg.channel.send(embed)
}
});
       client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`)
        client.user.setActivity("https://github.com/3JBH/Discord-Audio-Bot", { type: "STREAMING", url: "https://www.twitch.tv/robson"})	
    });

    client.login(Token);
