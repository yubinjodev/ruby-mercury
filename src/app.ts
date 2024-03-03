import dotenv from 'dotenv'
import mysql from 'mysql2'
import express, { Router } from 'express'

dotenv.config()

const app = express()
const connection = mysql.createConnection(process.env.DATABASE_URL as string)
export const router = Router()

router.get('/clients', (req, res) => {
  const query = 'SELECT * FROM clients'

  connection.connect((err) => {
    if (err) {
      return console.error('Error connecting to the database:', err)
    }
  })

  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ RESULT_MESSAGE: err.message })
    }
    res.status(200).json({
      RESULT_MESSAGE: 'Data has been successfully fetched',
      RESULT_CODE: 'DATA_FETCH_SUCCESS',
      records: results,
    })

    connection.end()
  })
})

app.use('/api/v1', router)

export default app
