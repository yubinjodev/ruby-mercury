import dotenv from 'dotenv'
import mysql from 'mysql2'

dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL as string
export const pool = mysql.createPool(DATABASE_URL)

export const queryDatabase = (query: string, parameters = []): Promise<any> => {
  return new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      if (error) {
        reject(error)
        return
      }

      connection.query(query, parameters, (error, results) => {
        connection.release()

        if (error) {
          reject(error)
        } else {
          resolve(results)
        }
      })
    })
  })
}
