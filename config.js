const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© ZidiTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_32_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDk0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUxLFxuICAgICAgICA1MixcbiAgICAgICAgNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxODUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMixcbiAgICAgICAgODAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTksXG4gICAgICAgIDY3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgOCxcbiAgICAgICAgODgsXG4gICAgICAgIDk0LFxuICAgICAgICAzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDg3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODgsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1LFxuICAgICAgICA2LFxuICAgICAgICA5OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI5LFxuICAgICAgICA5NixcbiAgICAgICAgNzMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQwLFxuICAgICAgICAxODksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTczLFxuICAgICAgICA3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDkzLFxuICAgICAgICA2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxLFxuICAgICAgICAzMyxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyLFxuICAgICAgICA3NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDUxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgODEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAzMixcbiAgICAgICAgMjIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI3LFxuICAgICAgICAxODIsXG4gICAgICAgIDczLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvLzRzem9IRFJFekQ5TVdWSERzNFgyN2JkUXRYUEpMRTc4QU9SQVNpL0tjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjEyMDQ1MjExODA4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1REFGM0NCRkY5OUY1QTVDQjU2ODAwRUZGQzQxNzNGM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM1NzExMjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxMjA0NTIxMTgwOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTJFNUZDRDU1RjYwNjRCMjRCMDAwMjM4RjMyNEZEMkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNTcxMTI2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjc2WVRVUTVOU08yRUdvbWNRV3o1M1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjE3M2UzOGItOTA2MS00MTVhLTk1MWMtODNkM2FhOTRhYTMwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg0LFxuICAgICAgMTQ2LFxuICAgICAgNzgsXG4gICAgICAyMzUsXG4gICAgICAyMzIsXG4gICAgICA3MixcbiAgICAgIDI1NCxcbiAgICAgIDE0OSxcbiAgICAgIDE4MSxcbiAgICAgIDIyLFxuICAgICAgNzYsXG4gICAgICAyNDEsXG4gICAgICAyMjAsXG4gICAgICA4NyxcbiAgICAgIDQ1LFxuICAgICAgNTIsXG4gICAgICAxMzksXG4gICAgICAxNDUsXG4gICAgICAyNDEsXG4gICAgICAzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjksXG4gICAgICAxMjAsXG4gICAgICAxMTcsXG4gICAgICAyMzcsXG4gICAgICAxNyxcbiAgICAgIDExNixcbiAgICAgIDUxLFxuICAgICAgMjU1LFxuICAgICAgNzQsXG4gICAgICAyMTUsXG4gICAgICAxMTAsXG4gICAgICAxMjYsXG4gICAgICAxNTMsXG4gICAgICA4MCxcbiAgICAgIDE0OSxcbiAgICAgIDc5LFxuICAgICAgMTkyLFxuICAgICAgMjAyLFxuICAgICAgMTA1LFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNEV0dKQ0NRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxMjA0NTIxMTgwODoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzI5OTc4MzQ2MjUwNDE6MjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+Nkl9f8J+RkfCdkoHwnZGw8J2Rq/CdkbAg8J2RtPCdkajwnZGz8J2RsPCdkbLigbDCucKy4piF4a2E8J+lgvCfjLvwn5SlXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUG4vek9nRUVLM2swTG9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJybER3OUtiMUlBdEFQd2pjN0JwdkttRjZSaVl6VVpaM3VFNHFpakE4V0JrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBac0V6cnlPdlVGSGdEVjNkZVhFMndSdDRPYWlZRWtFNjhYVWJkbmNUamMzblJWMEd2ZXNLekg3R1k0VDBJZ3hwbHJ6YmYwT1JUV2FQTVltREZrYUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNlV1JCZEpHU0Eza0JIeWJjYmw4Z0p2RmdPLzEvTUVmdEFQMzJwNWkvRjVMVEdsamkxS2c3ZW1QaDR6SzhqQ3BURHRoVDNZbUExVlpRQmNBYmZpSWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjEyMDQ1MjExODA4OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzU3MTEyMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNoQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2hDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiajZmR3N6ZTRNK0dpSDNEekZtOGo2ekxwWXYyUmZjVzdoWGpoeS83ZnFGND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjkzMTA3MTkzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzMyNjUyNzkwNzlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "ZiDi",
  packname: process.env.PACK_NAME || "ZiDi",
  botname : process.env.BOT_NAME  || "ZiDi-XMD",
  ownername:process.env.OWNER_NAME|| "ZiDi-Malik-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ZiDi-G"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
