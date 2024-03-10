import { Request, Response } from 'express'
import { queryDatabase } from '../lib/sql/queryDatabase'

// POST (create account)
// GET (see profile)
// PUT/PATCH (update profile)
// DELETE (delete profile)

export const createStylistAccount = async (req: Request, res: Response) => {
  const { firstName, lastName, phoneNumber, dob, streetAddress, city, country, postalCode } = req.body

  const query = `
  INSERT INTO stylists (first_name, last_name, phone_number, date_of_birth, street_address, city, country, postal_code) 
  VALUES (${firstName}, ${lastName}, ${phoneNumber}, ${dob}, ${streetAddress}, ${city}, ${country}, ${postalCode});
  `

  try {
    const results = await queryDatabase(query)

    if (results) {
      res.status(201).json({
        status: 'success',
        message: 'Your stylist account has been created successfully.',
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

export const getStylistAccount = async (req: Request, res: Response) => {
  const { id } = req.params

  const query = `
      SELECT * FROM stylists 
      WHERE stylist_id=${id}
      `

  try {
    const results = await queryDatabase(query)

    if (results) {
      res.status(200).json({
        status: 'success',
        message: 'Your stylist data has been fetched successfully.',
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
