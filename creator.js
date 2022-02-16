const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{


"displayName": "CREATOR•BOT",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:CREATOR•BOT\nitem1.TEL;waid=6285225931009\nitem1.X-ABLabel:📍 Creator\nitem2.EMAIL;type=INTERNET:admin@foxes.my.id\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://foxes.my.id\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Pekalongan 🇮🇩\nitem5.X-ABLabel:───────[ FOXESBOT ]───────\nEND:VCARD"
 }, {
  }, {
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['creator']
handler.tags = ['info']

handler.command = /^(creator)$/i

module.exports = handler