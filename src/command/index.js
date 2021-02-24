import Subscribe from './Subscribe.js'
import Help from './Help.js'
import Settings from './Settings.js'
import Start from '../controlles/start/Start.js'

export const command = bot => {

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