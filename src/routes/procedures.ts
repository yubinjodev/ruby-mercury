import { Router } from 'express'
import { getProcedure, getProcedures } from '../controllers'

const router = Router()

router.get('/', getProcedures)

router.get('/:id', getProcedure)

export default router
