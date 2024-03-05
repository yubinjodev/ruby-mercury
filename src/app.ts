import dotenv from 'dotenv'
import express, { Router } from 'express'
import procedures from './routes/procedures'

dotenv.config()

const app = express()
const router = Router()

app.use('/api/v1', router)

app.use('/procedures', procedures)

export default app
