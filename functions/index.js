const functions = require("firebase-functions");
const {Telegraf} = require("telegraf");

const bot = new Telegraf(functions.config().telegram.token, {
  telegram: {webhookReply: true},
});


bot.catch((err, ctx) => {
  functions.logger.error("[Bot] Error", err);
  return ctx.reply(`Ooops, encountered an error for ${ctx.updateType}`, err);
});


bot.command("/start", (ctx) => ctx.reply("Hello!"));
bot.on("message", (ctx) => ctx.reply("Check out my app at: https://t.me/LizaD_MyApp_Bot/LizaD "));


exports.lizaBot = functions.https.onRequest(async (request, response) => {
  functions.logger.log("Incoming message", request.body);
  await bot.handleUpdate(request.body, response);

  response.sendStatus(200);
});
