import { Client, Intents, Message } from "discord.js"
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.once("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`)
})

client.on("message", (msg: Message) => {
  const easterEgg = {
    train: "Choo choo! 🚅",
    ping: "Pong 🏓!",
    jump: "How high!"
  }[msg.content]

  if (easterEgg) {
    msg.reply(easterEgg)
  }
})

client.login()
