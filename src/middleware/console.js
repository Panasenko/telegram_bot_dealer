module.exports = function middelware (bot) {

    bot.use(async (ctx, next) => {
        console.log(ctx.update)
        
        await next() // runs next middleware
        // runs after next middleware finishes
    
      })
    
    
}