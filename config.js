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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_15_12_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMxLFxuICAgICAgICA3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgODUsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyLFxuICAgICAgICA0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDkwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDc4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgODksXG4gICAgICAgIDIyMixcbiAgICAgICAgNDksXG4gICAgICAgIDY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDksXG4gICAgICAgIDk0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMixcbiAgICAgICAgOTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODksXG4gICAgICAgIDExNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0OCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDg4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjExLFxuICAgICAgICA4OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIngzZnFJVGh5VlNDMytxNDJ2LzlBRUtRYU4xWnh0Um4wVFdLcklpdklvUGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInFKeF8yWHhDUmh5ZGRGamlyWTNwaFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjNiOTE0MzEtZThhOS00MThhLThlMmMtNTZlNGYzY2YzMDEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDk3LFxuICAgICAgMTU5LFxuICAgICAgMTYxLFxuICAgICAgNjcsXG4gICAgICAyMixcbiAgICAgIDI1MCxcbiAgICAgIDE5LFxuICAgICAgMjIzLFxuICAgICAgMTcxLFxuICAgICAgMTc5LFxuICAgICAgMjUyLFxuICAgICAgODksXG4gICAgICAxODgsXG4gICAgICA3NSxcbiAgICAgIDM5LFxuICAgICAgMjE5LFxuICAgICAgNixcbiAgICAgIDE2MyxcbiAgICAgIDc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkyLFxuICAgICAgNTUsXG4gICAgICAzNixcbiAgICAgIDEyMyxcbiAgICAgIDIwNyxcbiAgICAgIDE5MSxcbiAgICAgIDcxLFxuICAgICAgOSxcbiAgICAgIDAsXG4gICAgICAxMTIsXG4gICAgICAxNjYsXG4gICAgICA1MSxcbiAgICAgIDE1OCxcbiAgICAgIDIxNixcbiAgICAgIDExMSxcbiAgICAgIDIxMyxcbiAgICAgIDc4LFxuICAgICAgMTUxLFxuICAgICAgMTcsXG4gICAgICAyNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR0o2R1JYOFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3ODQ4NDQ0MjM0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0OTYyODM5ODE5NDk0MDoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfjZJfX/CfkZHwnZKB8J2RsPCdkavwnZGwIPCdkbTwnZGo8J2Rs/CdkbDwnZGy4oGwwrnCsuKYheGthPCfpYLwn4y78J+UpVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1ByL3pPZ0VFSnJveDdzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicmxEdzlLYjFJQXRBUHdqYzdCcHZLbUY2UmlZelVaWjN1RTRxaWpBOFdCaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6L3NUSWFDSmVYYmRzRFNmOWJMZUVUWlJYbXdUTjRRWGxvYjRsREJSQ1J4TUNqS2J3SytkM01mRlplVWRKS2RGcFFvYUEzTmUyL2xyK0pwR0ZIWXNDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnRkhuajEvZHhrYXVLb2lPc0p3YktJdnc1a2h2R09veWVTZm9GN0xaejBXZzRZeHAyL016Nk90QTJlNEtST0w1MGtPaFh5QWxnM2lJNXhzdGxxK1lpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNzg0ODQ0NDIzNDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTUyMTMwOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpIcVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkhxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiKzEzcWJUeDJ0TlJ4SUF6bjFLNWdGVmE1NndyZzUrZXFNd01NbmRZWGJNcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjkzMTA3MTk0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU1MjEzMTM5MjVcIn0iCn0="  // PUT your SESSION_ID 


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
