const config = require('config') 
const { Telegraf } = require("telegraf")


//const Telegraf = require('telegraf')
//const session = require('telegraf/session')

const command = require('./command/index') 
const middelware = require('./middleware/console') 

const TOKEN = config.get('token')

if (TOKEN === undefined) {
    throw new Error('BOT_TOKEN must be provided!')
}

const bot = new Telegraf(TOKEN)

middelware(bot)
command(bot)

module.exports = bot