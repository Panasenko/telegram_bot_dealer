import { Telegraf } from 'telegraf'
import { TOKEN } from './config/config.js'

import { command } from './command/index.js'
import { middelware } from './middleware/console.js'

if (TOKEN === undefined) {
    throw new Error('BOT_TOKEN must be provided!')
}

const bot = new Telegraf(TOKEN)
middelware(bot)
command(bot)


export default bot