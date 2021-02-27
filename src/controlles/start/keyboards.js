const { Markup } = require('telegraf') 

module.exports = function getMainMenu () {
    return Markup
    .keyboard([
        ['Показать курсы', 'Подписка на изменения'],
        ['Настройки']
    ])
    .oneTime()
    .resize()
}