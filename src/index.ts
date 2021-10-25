import { Client, Intents, Message } from "discord.js"
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.once("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`)
})

client.on("message", (message) => {
  if (message.content === "I love you.") message.reply("I know.")
})

client.on("message", async (message: Message) => {
  if (message.author.id != client?.user?.id) {
    const easterEgg = {
      train: "Choo choo! 🚅",
      ping: "Pong 🏓!",
      jump: "How high!"
    }[message.content]

    if (easterEgg) {
      const m = await message.reply(easterEgg)
      await new Promise((r) => setTimeout(r, 3000))
      await m.delete()
    }
    // ;["luna", "ftm", "klima"].forEach((keyword) => {
    //   if (message.content.toLowerCase().includes(keyword.toLowerCase())) {
    //     message.reply(`🚀🚀🚀 ${keyword.toUpperCase()} LFG 🚀🚀🚀`)
    //   }
    // })
  }
})

client.login()
