import dotenv from 'dotenv'
import app from './src/app'

dotenv.config()

const PORT = Number(process.env.PORT) || 3000

app.listen(PORT, 'localhost', () => {
  console.info(`ruby-mercury server is live and running on http://localhost:${PORT}`)
})
