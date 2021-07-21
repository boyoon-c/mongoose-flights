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
router.get('/:id', flightsCtrl.show)
router.post('/:id', flightsCtrl.createTicket)
router.post('/:id/destinations', flightsCtrl.addToDestination)
router.delete('/:id', flightsCtrl.delete)