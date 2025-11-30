// server/index.js
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = 3333

app.use(cors())

// importa lista de mensagens prontas
const readyMessages = require('./messages-ready')

// rota simples de teste
app.get('/', (req, res) => {
  res.send('Servidor de telemensagem está rodando!')
})

// pasta com os áudios prontos
const audiosPath = path.join(__dirname, 'audios', 'pronto')
app.use('/audios', express.static(audiosPath))

// rota para listar as telemensagens prontas
app.get('/api/messages-ready', (req, res) => {
  const lista = readyMessages.map((msg) => ({
    ...msg,
    url: `/audios/${msg.arquivo}` // ex: /audios/amor01.mp3
  }))
  res.json(lista)
})

app.listen(PORT, () => {
  console.log(`🚀 Server rodando na porta ${PORT}`)
})

