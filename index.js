import {PORT} from './src/config/config.js'
import bot from './src/bin/bot.js'
import app from './src/bin/app.js'

const port = PORT || 3000;

bot.launch()

app.listen(PORT, () => console.log(`My server is running on port ${port}`))

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))