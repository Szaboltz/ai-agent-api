import express from 'express'
import aiController from './controllers/ai.controller.js'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

app.post('/ai', aiController)

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})