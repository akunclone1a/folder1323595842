const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{


"displayName": "CREATORâ¢BOT",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:CREATORâ¢BOT\nitem1.TEL;waid=6285225931009:6285225931009\nitem1.X-ABLabel:ð Creator\nitem2.EMAIL;type=INTERNET:admin@foxes.my.id\nitem2.X-ABLabel:ð Email\nitem3.URL:https://foxes.my.id\nitem3.X-ABLabel:âï¸ Rest Api\nitem4.ADR:;;ð®ð© Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:ð Region | Pekalongan ð®ð©\nitem5.X-ABLabel:âââââââ[ FOXESBOT ]âââââââ\nEND:VCARD"
 }, {
  }, {
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['creator']
handler.tags = ['info']

handler.command = /^(creator)$/i

module.exports = handler