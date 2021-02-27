const Subscribe = require('./Subscribe') 
const Help = require('./Help') 
const Settings = require('./Settings') 
const Start = require('../controlles/start/Start') 

module.exports = function command (bot) {

    const st = new Start()
    bot.start(st.start)

    const sub = new Subscribe()
    bot.command('addsub', sub.subscribe)
    bot.command('unsub', sub.unsubscribe)

    const h = new Help()
    bot.command('help', h.help)

    const set = new Settings()
    bot.command('help', set.setting)


}