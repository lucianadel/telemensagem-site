/* eslint-disable no-undef */
// server/index.js
const express = require('express')
const cors = require('cors')
const path = require('path')

// inicializa o app Express
const app = express()
const PORT = 3333

// ativa o CORS (importante para o frontend acessar o backend)
app.use(cors())

// importa a lista de mensagens prontas
const readyMessages = require('./messages-ready')

// rota simples de teste
app.get('/', (req, res) => {
  res.send('Servidor de telemensagem está rodando!')
})

// caminho da pasta com os áudios prontos
const audiosPath = path.join(__dirname, 'audios', 'pronto')
app.use('/audios', express.static(audiosPath))

// rota para listar as telemensagens prontas
app.get('/api/messages-ready', (req, res) => {
  const lista = readyMessages.map(msg => ({
    ...msg,
    url: `/audios/${msg.arquivo}`
  }))
  res.json(lista)
})

// inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Server rodando na porta ${PORT}`)
})
