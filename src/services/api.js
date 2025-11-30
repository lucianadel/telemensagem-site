// src/services/api.js

const API_URL = 'http://localhost:3333' // backend

// Buscar mensagens prontas
export async function getReadyMessages() {
  const res = await fetch(`${API_URL}/api/messages-ready`)
  if (!res.ok) {
    throw new Error('Erro ao carregar as mensagens prontas')
  }
  return res.json()
}
