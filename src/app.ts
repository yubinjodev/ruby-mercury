import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express, { Router } from 'express'
import morgan from 'morgan'
import proceduresRouter from './routes/procedures'
import stylistsRouter from './routes/stylists'

dotenv.config()

const app = express()
const router = Router()
const jsonParser = bodyParser.json()

app.use(jsonParser)

app.use(morgan('dev'))

app.use('/api/v1', router)

router.use('/procedures', proceduresRouter)

router.use('/stylists', stylistsRouter)

export default app
