import express from 'express'
let configViewEngine = (app) => {
  app.use(express.static('./src/public'))
  // cấu hình link public lấy tài nguyên từ public render ra views
  app.set('view engine', 'ejs')
  // gõ được logic trong html vd như if else ,for
  app.set('views', './src/views')
  // tìm ejs trong folder views
}

module.exports = configViewEngine
