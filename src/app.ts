import dotenv from 'dotenv'
import express, { Router } from 'express'
import proceduresRouter from './routes/procedures'
import morgan from 'morgan'

dotenv.config()

const app = express()
const router = Router()

app.use(morgan('dev'))

app.use('/api/v1', router)

router.use('/procedures', proceduresRouter)

export default app
