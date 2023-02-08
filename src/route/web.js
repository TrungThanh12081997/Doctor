import express from 'express'
import { getHomePage, getAboutPage } from '../controllers/homeController'

let router = express.Router()

let initWebRoutes = (app) => {
  router.get('/', getHomePage)
  // page router
  router.get('/about', getAboutPage)
  return app.use('/', router)
}

module.exports = initWebRoutes
