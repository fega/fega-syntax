var koa = require('koa')
var app = koa()

// x-response-time
var something={
  it:"is something",
  number:10.3,
  constant:null,
  data: data,
  funct(){
    return 0
  }
}

app.use(function *(next) {
  var start = new Date()
  yield next
  var ms = new Date() - start
  this.set('X-Response-Time', ms + 'ms')
})

// logger

app.use(function *(next) {
  var start = new Date()
  yield next
  var ms = new Date() - start
  console.log(`${this.method} ${this.url} - ${ms}`)
})

// response

app.use(function *() {
  this.body = 'Hello World'
})

app.listen(3000)
