let handler = async (m, { conn }) => {
    let vcard = `
  BEGIN:VCARD
VERSION:3.0
N:ANZADY;;;;
FN:ANZADY
ORG:ANZADY
TITLE:
TEL;TYPE=CELL;VALUE=uri:tel:+255654667145
X-ABLabel:MICKEY
X-WA-BIZ-DESCRIPTION:
X-WA-BIZ-NAME:ANZADY TECH
END:VCARD
    `.trim();
  
    await conn.sendMessage(
      m.chat,
      {
        contacts: {
          displayName: "ANZADY TECH",
          contacts: [{ vcard }],
        },
      },
      { quoted: m }
    );
  };
  
  handler.help = ["owner"];
  handler.tags = ["main"];
  handler.command = ["owner", "creator",];
  
  export default handler;
  
