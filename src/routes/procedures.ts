import dotenv from 'dotenv'
import { Router } from 'express'
import mysql from 'mysql2'

dotenv.config()

const router = Router()
const connection = mysql.createConnection(process.env.DATABASE_URL as string)

router.get('/', (req, res) => {
  connection.connect((err) => {
    if (err) {
      return console.error('Error connecting to the database:', err)
    }
  })

  const query = 'SELECT * FROM procedures'

  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({
        status: 'error',
        message: err.message || 'Server error has occurred.',
        data: null,
      })
    }
    res.status(200).json({
      status: 'success',
      message: 'Procedures have been successfully fetched.',
      data: results,
    })

    connection.end()
  })
})

export default router
