module.exports = class Help {

    help(ctx) {
        ctx.reply(
          '/start - Начало плодотворного партнерства с Вашим ботом! Поехали 👉\n'
        + '/getcours - Показать текущие курсы обмена валют в разрезе типов проводимых сделок.\n' 
        + '/settings - Изменить настройки бота для обеспечения наилучшего взаимодействия с ботом\n'
        + '/addsub - Добавить сколько угодно подписок на колебания курсов. Мы уведомим Вас сразу же после установки необходимого Вам курса!\n'
        + '/unsub - Очистить подписки на изменение курсов.\n'
        + '/help - помощь по работе бота. Краткая справка по возможностям!')
    }

}