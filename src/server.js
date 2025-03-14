import express from 'express'
import aiController from './controllers/ai.controller.js'
import cors from 'cors'
import initialController from './controllers/initial.controller.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.post('/ai', aiController)

app.get('/init', initialController)

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})