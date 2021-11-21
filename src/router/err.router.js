const express = require('express')

const router = express.Router()

router.get('/err', (req, res) => {
  throw new Error('测试异常')
})

router.use(function err_middleware(err, req, res, next) {
  if (err) {
    res.status(500).json({
      error: err.message,
    })
  }
})

module.exports = router
