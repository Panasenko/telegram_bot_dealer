const getMainMenu = require('./keyboards') 

module.exports = class Start {

    start(ctx) {
        ctx.replyWithHTML(
            'Приветсвую в <b>DealerBot</b>\n\n' 
            + 'Данный бот поможет быть всегда в курсе о любых колебаниях валют!'
            + 'Начни с справки /help или воспользуйся меню ниже для продолжения.'
            )

        ctx.replyWithSticker('CAACAgIAAxkBAAICjWA2xSn3E9GARIO-qz6mJPZCHbFWAAL5BgACRvusBAXmf7zy8Nr1HgQ', getMainMenu())

    }
}