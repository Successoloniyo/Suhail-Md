const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_20_47_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA2NixcbiAgICAgICAgMTkyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkyLFxuICAgICAgICA2NyxcbiAgICAgICAgMzksXG4gICAgICAgIDcwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDc0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NixcbiAgICAgICAgMTY4LFxuICAgICAgICAzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc1LFxuICAgICAgICA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExLFxuICAgICAgICAxNzMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDcsXG4gICAgICAgIDMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIwLFxuICAgICAgICA3NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDcxLFxuICAgICAgICA5MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgxLFxuICAgICAgICA5MixcbiAgICAgICAgMTUyLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTExLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgNzIsXG4gICAgICAgIDc3LFxuICAgICAgICA1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NixcbiAgICAgICAgMjAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhVWpvUTNYaHo3dFVnSlpxNjZSWmZsTGNtN1R5UitoQURJSWgzVUovZm13PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNTk4NjA1MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRGQkE3QkZDMDFGQjkyRjA4MjJBRDQ2QUQwRjdCNTJDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTg2Njg0OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGUzBFd01EdVNmYUFjWjBnUm5TMV9nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlkYjI0ZjBkLTQ2OWMtNGE0OS05ZTcyLWU1N2FkODM1NWFhZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0LFxuICAgICAgMjMwLFxuICAgICAgNDMsXG4gICAgICA0MixcbiAgICAgIDQ5LFxuICAgICAgMjQxLFxuICAgICAgMTA3LFxuICAgICAgMTgxLFxuICAgICAgMTYxLFxuICAgICAgMjQ2LFxuICAgICAgMTA4LFxuICAgICAgMjUsXG4gICAgICAyMzgsXG4gICAgICAyMzgsXG4gICAgICAxODAsXG4gICAgICAyMjEsXG4gICAgICAxNDUsXG4gICAgICAxNyxcbiAgICAgIDQ0LFxuICAgICAgOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICA5MCxcbiAgICAgIDgyLFxuICAgICAgMjcsXG4gICAgICA5OCxcbiAgICAgIDM4LFxuICAgICAgMjAsXG4gICAgICA5NSxcbiAgICAgIDEyMixcbiAgICAgIDExNCxcbiAgICAgIDIxMSxcbiAgICAgIDQyLFxuICAgICAgNDMsXG4gICAgICA0NyxcbiAgICAgIDIwNyxcbiAgICAgIDcwLFxuICAgICAgMTA2LFxuICAgICAgMTQ0LFxuICAgICAgMCxcbiAgICAgIDEzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBRFZUTFIzSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1OTg2MDUzNzo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjcwMjY5NzkyOTM2MDM3OjU4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08yZ29CMFEyS3VNdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOXk3b1oyM2FhWmM0US8vL0FmNzF1OTUxMDJqWlk0aGZ1VGxpUWsrUWtIOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyL1h1UVJ2ZkdPUGNyRXlVZ3V6bndoLy84S1FlODYzZzhxR2NkeEUvSStFVkdhZVc2Ym9hOVF2V0UyZEpGYXhkZENNYVRETVJ5ZmhiWTBQRlNCSG1DQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpZWt3MHBISGVwUTZNdDJoYS9iZHNWZjJzOUcvUktwbmpldCtsUElOdkVHZWsycEJ4L1hLbmJMclpRMWlmZFNhYmtWM3puR2JzL3RaM2tWb0NURmZEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTU5ODYwNTM3OjU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTg2Njg0NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUh1VFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSHVULmpzb24iOiAie1wia2V5RGF0YVwiOlwiM0JsSFNIdFBHYmtUelNWWGdIck93K2NSTEdNNng5Ti9Tb05UVUVpUkYxOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MTM0NTg5MixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9|  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
