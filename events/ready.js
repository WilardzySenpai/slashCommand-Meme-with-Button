const client = require("../index");

client.on("ready", () => {
    console.log("\x1b[34m%s\x1b[0m", `${client.user.tag} ready to work!`)
    const statuses = [ // status bot
        "with はちき#3819",
        `🏓Ping: ${client.ws.ping}ms!`,
        `with ${client.guilds.cache.size} server`,
        `with ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} user`,
        "Youtube",
        "hm / Slash command",
        "Spotify",
        "Soundcloud",
        "hotdog.ml"
    ]
    let index = 0
    setInterval(() => {
        if (index === statuses.length) index = 0
        const status = statuses[index]
        client.user.setActivity(`${status}`, {
            type: "LISTENING"
            //browser: "DISCORD IOS"
        })
        index++
    }, 10000)
})
