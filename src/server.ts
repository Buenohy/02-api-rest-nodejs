import { app } from './app.js'
import { env } from './env/index.js'

const port = Number(process.env.PORT) || 3000

app
  .listen({
    port,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
