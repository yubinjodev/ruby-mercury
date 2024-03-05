import dotenv from 'dotenv'
import { Router } from 'express'
import mysql from 'mysql2'

dotenv.config()

const router = Router()
const connection = mysql.createConnection(process.env.DATABASE_URL as string)

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err)
  }
})

router.get('/', (req, res) => {
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
  })
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  const query = `
  SELECT * FROM procedures 
  WHERE procedure_id=${id}
  `

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
  })
})

export default router
