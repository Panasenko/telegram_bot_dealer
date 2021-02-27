const config = require('config') 
const bot = require('./src/bot') 
const app = require('./src/app') 


const PORT = config.get("port") || 3000

bot.launch()

app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))