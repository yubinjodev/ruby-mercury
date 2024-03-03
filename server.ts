import app from './src/app'

const port = 3000

app
  .listen(port, 'localhost', () => {
    console.info(`ruby-mercury server is live and running on http://localhost:${port}`)
  })
  .on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.error('Address already in use.')
    } else {
      console.error(err)
    }
  })
