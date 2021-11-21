const express = require('express')

const router = express.Router()

router.get('/list', (req, res) => {
  res.json({
    list: [
      {
        id: '001',
        code: 'sku',
        name: '鞋子',
      },
    ],
  })
})

module.exports = router
