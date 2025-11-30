/* eslint-disable no-unused-vars */
// src/pages/MensagensProntas.jsx
import { useState, useEffect } from "react"
import { getReadyMessages } from "../services/api"

export default function MensagensProntas() {
  const [mensagens, setMensagens] = useState([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState("")

  useEffect(() => {
    async function carregar() {
      try {
        const data = await getReadyMessages()
        setMensagens(data)
      } catch (err) {
        setErro("Não foi possível carregar as mensagens.")
      } finally {
        setLoading(false)
      }
    }
    carregar()
  }, [])

  if (loading) {
    return <p style={{ padding: 20 }}>Carregando mensagens...</p>
  }

  if (erro) {
    return <p style={{ padding: 20, color: "red" }}>{erro}</p>
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">Telemensagens Prontas</h2>
        <p className="section__subtitle">
          Clique para ouvir e escolher sua telemensagem.
        </p>

        <div className="category-grid">
          {mensagens.map((msg) => (
            <div className="category-card" key={msg.id}>
              <span className="category-card__icon">🎧</span>
              <h3>{msg.titulo}</h3>
              <p>{msg.descricao}</p>

              <audio
                controls
                src={`http://localhost:3333${msg.url}`}
                style={{ width: "100%", marginTop: 10 }}
              >
                Seu navegador não suporta áudio.
              </audio>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
