
import { Telegraf } from 'telegraf'
import { getMainMenu } from '../keyboards/keyboards.js'
import { TOKEN } from '../config/config.js'

import { foo } from '../command/start.js'


if (TOKEN === undefined) {
    throw new Error('BOT_TOKEN must be provided!')
  }

let bot = new Telegraf(TOKEN)


bot.command('time', foo)


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