var koa = require('koa')

var app = new koa()

const fs = require('fs')

const main = ctx => {
	ctx.response.type = 'html'
	ctx.response.body = fs.createReadStream('./views')
}
app.use(main)
app.listen(3000)