import dotenv from 'dotenv'
import express, { Router } from 'express'
import proceduresRouter from './routes/procedures'

dotenv.config()

const app = express()
const router = Router()

app.use('/api/v1', router)

router.use('/procedures', proceduresRouter)

export default app
