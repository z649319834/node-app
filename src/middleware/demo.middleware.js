// 中间件完整结构
// 1. 是一个函数
// 2. err，req，res，next => function

function valid_name_middleware(req, res, next) {
  let { name } = req.query
  if (!name || !name.length) {
    res.json({
      message: '缺少name参数',
    })
  } else {
    next()
  }
}

module.exports = valid_name_middleware
