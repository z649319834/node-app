// 启动
mysql.server start

// 登陆
mysql -u root

// Sequelize 操作 mysql 的库
// sequelize-cli 文档地址：https://sequelize.org/master/manual/migrations.html

- config 配置文件

- migrations

- models

- seeders

# 数据库初始化

1、创建数据库，
2、使用`sequelize`和`sequelize-cli` 初始化项目的数据库配置信息,执行命令`npx sequelize init`
3、生成模型文件

- migrate 文件
- model 文件

```
npx sequelize-cli model:generate --name User --attributes name:string,date:string,content:string,status:number
```

4、持久化模型对应的数据表

```
npx sequelize db:migrate
```
