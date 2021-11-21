function log_middleware(req, res, next) {
  console.log('请求来了...')
  next()
}

module.exports = log_middleware
