const express = require('express')
const app = express()

const bodyParser = require('body-parser')

// 引入mysql操作
const db = require('../db/models')

// 请求参数解析
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

// 创建
app.post('/create', async (req, res, next) => {
  try {
    const { name, content, status, date } = req.body
    console.log(111, db.User.findAll)

    let user = await db.User.create({
      name,
      content,
      status,
      date,
    })
    console.log('user', user)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

// 查询
app.post('/list', async (req, res, next) => {
  try {
    const { status, page } = req.body
    let pageCount = 10
    let pageOffset = (page - 1) * pageCount
    let where = {}
    if (status) {
      where = {
        status,
      }
    }
    let list = await db.User.findAndCountAll({
      where,
      pageCount,
      pageOffset,
    })
    res.json(list)
  } catch (error) {
    next(error)
  }
})

// 更新
app.post('/update', async (req, res, next) => {
  try {
    const { id, name, content, status, date } = req.body
    let user = await db.User.findOne({
      where: { id },
    })
    if (user && user.id) {
      user.name = name || user.name
      user.content = content || user.content
      user.status = status || user.status
      user.date = date || user.date
      user = await user.save()
      res.json(user)
    }
  } catch (error) {
    next(error)
  }
})

// 删除
app.post('/delete', async (req, res, next) => {
  try {
    const { id } = req.body
    let user = await db.User.findOne({
      where: { id },
    })
    if (user && user.id) {
      user = await user.destroy()
      res.json({
        user: user,
        message: '删除成功',
      })
    }
  } catch (error) {
    next(error)
  }
})

app.listen(8000, () => {
  console.log('启动成功！')
})
