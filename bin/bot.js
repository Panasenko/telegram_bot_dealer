import { Telegraf } from 'telegraf'
import { TOKEN } from '../config/config.js'

import { command } from '../command/index.js'

if (TOKEN === undefined) {
    throw new Error('BOT_TOKEN must be provided!')
}

const bot = new Telegraf(TOKEN)



bot.use(async (ctx, next) => {
    console.log(ctx)
    
    await next() // runs next middleware
    // runs after next middleware finishes

  })

command(bot)

/* 
bot.command('time', ctx => {
    ctx.reply(String(new Date()))
})

bot.hears('хочу есть', ctx => {
    ctx.reply('Так передохни и покушай')
})

bot.on('text', ctx => {
    ctx.reply('just text')
})

bot.on('voice', ctx => {
    ctx.reply('Какой чудный голос')
})

bot.on('sticker', ctx => {
    ctx.reply('Прикольный стикер')
})

bot.on('edited_message', ctx => {
    ctx.reply('Вы успешно изменили сообщение')
}) */

export default bot