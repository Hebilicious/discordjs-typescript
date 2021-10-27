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

interface SendAndDeleteArgs {
  message: Message
  response: string
  time?: number
}
const sendAndDelete = async ({ message, response, time = 3 }: SendAndDeleteArgs) => {
  const m = await message.reply(response)
  await new Promise((r) => setTimeout(r, time * 1e3))
  await m.delete()
}

client.on("message", async (message: Message) => {
  if (message.author.id != client?.user?.id) {
    const easterEgg = {
      train: "Choo choo! 🚅",
      ping: "Pong 🏓!",
      jump: "How high!"
    }[message.content]

    if (easterEgg) {
      await sendAndDelete({ message, response: easterEgg })
    }
    // const lfgs = ["luna", "ftm", "klima", "ohm"]
    // for (const lfg of lfgs) {
    //   if (message.content.toLowerCase().includes(lfg.toLowerCase())) {
    //     await sendAndDelete({ message, response: `🚀🚀🚀 ${lfg.toUpperCase()} LFG 🚀🚀🚀` })
    //   }
    // }
  }
})

client.login()
