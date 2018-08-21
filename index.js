// const koa=require('koa')
// const router = require('koa-router')(); 
// const app = new koa()
// // CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
// // 下面以koa2-cors为例，
// const cors = require('koa2-cors');
// router.get('/koa',(ctx,next)=>{
//     ctx.body="Hello koa"
// })
// app.use(router.routes()); //作用：启动路由
// app.use( async(ctx,req,res) => {
//     console.log(ctx.request.url)
//     ctx.set('Access-Control-Allow-Origin', 'https://www.v2ex.com/api')
//     ctx.body = "hello world"
// })
// app.listen(process.env.PORT || 3001)
// console.log("demo in run")
// module.exports = () => 'Ahoy, world!'


const express = require('express')
const request = require('request')
const app = express()

app.use('/', function(req, res) {
  const url = 'https://fxb.tianfn.net:4443/creditvane-ui-api/rest/api/' + req.url
  req.pipe(request(url)).pipe(res.set('Access-Control-Allow-Origin', '*'))
})

app.listen(process.env.PORT || 3001)
console.log("server is run","127.0.0.1:3001")

