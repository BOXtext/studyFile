const koa = require('koa')

const app = new koa()

var fs = require('fs')
// 异步读取
fs.readFile('data.txt', function(err, data) {
	if(err) {
		return console.error(err)
	}
	console.log("异步读取" + data.toString())
})

//异步打开文件
console.log('准备打开文件')
fs.open('data.txt', 'r+', (err, fd) => {
	if(err) {
		return console.error(err)
	}
	console.log('打开文件春哥')
})

// 获取文件信息
fs.stat('data.txt', (err, stats) => {
	if(err) {
		return console.error(err)
	}
	// 判断是否是文件
	if(stats.isFile()) {
		console.log(stats)
		console.log('读取文件信息春哥！')
	}
})

// 写入文件 --毁掉函数只包含了err错误信息
fs.writeFile('data.txt', insertData, (err))

app.listen(3000)