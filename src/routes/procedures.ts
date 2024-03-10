import { Router } from 'express'
import { getProcedure, getProcedures } from '../controllers/procedureController'

const router = Router()

router.get('/', getProcedures)

router.get('/:id', getProcedure)

export default router
