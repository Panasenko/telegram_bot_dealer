import { PORT } from './config/config.js'

import bot from './bin/bot.js'
import app from './bin/app.js'

const port = PORT || 3000;

bot.launch()




app.listen(PORT, () => console.log(`My server is running on port ${port}`))

