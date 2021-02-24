import  Subscribe  from './Subscribe.js'

export const command = bot => {

const subscribe = new Subscribe()
bot.command('addsubscribe', subscribe.sub)


}