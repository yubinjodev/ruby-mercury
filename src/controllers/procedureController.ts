import { Request, Response } from 'express'
import { queryDatabase } from '../lib/sql/queryDatabase'

export const getProcedures = async (req: Request, res: Response) => {
  const query = 'SELECT * FROM procedures'

  try {
    const results = await queryDatabase(query)

    if (results) {
      res.status(200).json({
        status: 'success',
        message: 'The procedures have been fetched successfully.',
        data: results,
      })
    }
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Server error occurred.',
      data: err,
    })
  }
}

export const getProcedure = async (req: Request, res: Response) => {
  const { id } = req.params

  const query = `
    SELECT * FROM procedures 
    WHERE procedure_id=${id}
    `

  try {
    const results = await queryDatabase(query)

    if (results) {
      res.status(200).json({
        status: 'success',
        message: 'The procedure has been fetched successfully.',
        data: results || 'poo',
      })
    }
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Server error occurred.',
      data: err,
    })
  }
}
