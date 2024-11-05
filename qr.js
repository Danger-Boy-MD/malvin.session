const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Danger_Boy,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function Danger_Boy_Md_Qr_Code() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Danger_Boy = Danger_Boy({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Malvin_King.ev.on('creds.update', saveCreds)
			Qr_Code_By_Malvin_King.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Danger_Boy.sendMessage(Qr_Code_By_Danger_Boy.user.id, { text: '' + b64data });
	
				   let DANGER_BOY_MD_TEXT = `
┏━━━━━━━━━━━━━━
⎝⎝ᴰᴬᴺᴳᴱᴿ𖡻ʙᴏʏ𖧹ᴹᴰ⎠⎠ SESSION IS 
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = 𖥘⚡ Dᴬᴺᴳᴱᴿ Bᴼᵞ 😈 ⚡𖥘
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || Bot Repo = https://github.com/Danger-Boy-MD/Danger-Boy-MD
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©2024-2099 ⎝⎝ᴰᴬᴺᴳᴱᴿ𖡻ʙᴏʏ𖧹ᴹᴰ⎠⎠`
	 await Qr_Code_By_Danger_Boy.sendMessage(Qr_Code_By_Danger_Boy.user.id,{text:Danger_Boy_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Danger_Boy.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					Danger_Boy_Md_Qr_Code();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await Danger_Boy_Md_Qr_Code()
});
module.exports = router
