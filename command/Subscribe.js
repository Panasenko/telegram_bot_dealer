export default class Subscribe {

    subscribe(ctx) {
        ctx.reply('sub')
    }

    unsubscribe(ctx) {
        ctx.reply('unsub')
    }
}

