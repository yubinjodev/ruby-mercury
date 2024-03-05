import dotenv from 'dotenv'
import app from './src/app'

dotenv.config()

app
  .listen(Number(process.env.PORT), 'localhost', () => {
    console.info(`ruby-mercury server is live and running on http://localhost:${process.env.PORT}`)
  })
  .on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.error('Address already in use.')
    } else {
      console.error(err)
    }
  })
