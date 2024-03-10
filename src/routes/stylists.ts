import { Router } from 'express'
import { createStylistAccount, getStylistAccount } from '../controllers'

const router = Router()

router.post('/', createStylistAccount)

router.get('/:id', getStylistAccount)

export default router
