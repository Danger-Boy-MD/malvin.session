const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: DANGER_BOY,    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function DANGER_BOY_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Danger_Boy = DANGER_BOY({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Danger_Boy.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Danger_Boy.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Danger_Boy.ev.on('creds.update', saveCreds)
            Pair_Code_By_Danger_Boy.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Danger_Boy.sendMessage(Pair_Code_By_Danger_Boy.user.id, { text: '' + b64data });

               let DANGER_BOY_TEXT = `
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
 await Pair_Code_By_Danger_Boy.sendMessage(Pair_Code_By_Danger_Boy.user.id,{text:DANGER_BOY_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Danger_Boy.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    DANGER_BOY_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await DANGER_BOY_MD_PAIR_CODE()
});
module.exports = router
