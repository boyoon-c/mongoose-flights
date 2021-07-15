import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

export {
  router
}

router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
//router.get('/', flightsCtrl.redirect)
router.post('/', flightsCtrl.create)

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource')
// })

