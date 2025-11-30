import "./styles.css";
import { useState, useEffect } from "react";
import { getReadyMessages } from "./services/api";

export default function App() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("todas");
  const [modalInfo, setModalInfo] = useState(null);
  const [mensagens, setMensagens] = useState([]);
  const [loading, setLoading] = useState(true);

  const categorias = [
    "todas",
    "aniversario",
    "amor",
    "amizade",
    "familia",
    "evangelica",
    "motivacao",
    "saudade",
    "bomdia_boanoite"
  ];

  useEffect(() => {
    async function carregar() {
      try {
        const data = await getReadyMessages();
        setMensagens(data);
      } catch (err) {
        console.error("Erro ao carregar mensagens:", err);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, []);

  if (loading) {
    return <p style={{ padding: 20 }}>Carregando mensagens...</p>;
  }

  const mensagensFiltradas =
    categoriaAtiva === "todas"
      ? mensagens
      : mensagens.filter((msg) => msg.categoria === categoriaAtiva);

  const abrirModal = (msg) => {
    setModalInfo(msg);
  };

  const fecharModal = () => {
    setModalInfo(null);
  };

  return (
    <div className="container-principal">
      <header className="topo">
        <h1 className="logo">✨ Telemensagem Online</h1>
        <p className="sublogo">Escolha, personalize e envie pelo WhatsApp</p>
      </header>

      <div className="categorias">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`categoria-btn ${categoriaAtiva === cat ? "ativa" : ""}`}
            onClick={() => setCategoriaAtiva(cat)}
          >
            {cat.toUpperCase().replace("_", " ")}
          </button>
        ))}
      </div>

      <div className="lista-mensagens">
        {mensagensFiltradas.length === 0 && (
          <p style={{ padding: 20 }}>Nenhuma mensagem nesta categoria.</p>
        )}

        {mensagensFiltradas.map((msg) => (
          <div key={msg.id} className="card">
            <h3>{msg.titulo}</h3>

            <p className="duracao">🎧 {msg.duracao || "1:20"}</p>

            <div className="card-botoes">
              <div className="player">
                <audio
                  id={"player-" + msg.id}
                  src={`http://localhost:3333${msg.url}`}
                ></audio>

                <button
                  className="btn-preview"
                  onClick={() => {
                    const player = document.getElementById("player-" + msg.id);
                    player.paused ? player.play() : player.pause();
                  }}
                >
                  ▶⏸ Tocar / Pausar
                </button>

                <button
                  className="btn-stop"
                  onClick={() => {
                    const player = document.getElementById("player-" + msg.id);
                    player.pause();
                    player.currentTime = 0;
                  }}
                >
                  ⏹ Parar
                </button>
              </div>

              <button className="btn-comprar" onClick={() => abrirModal(msg)}>
                Enviar WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalInfo && (
        <>
          <div className="modal-backdrop" onClick={fecharModal}></div>

          <div className="modal">
            <div className="modal-conteudo">
              <button className="fechar" onClick={fecharModal}>
                ✖
              </button>

              <h2 className="modal-titulo">{modalInfo.titulo}</h2>

              <label>Seu nome (quem envia):</label>
              <input id="nomeRemetente" type="text" placeholder="Seu nome" />

              <label>Nome da pessoa que recebe:</label>
              <input
                id="nomeDestinatario"
                type="text"
                placeholder="Nome da pessoa"
              />

              <label>Número de WhatsApp do destinatário:</label>
              <input
                id="numeroDestinatario"
                type="text"
                placeholder="11999999999"
              />

              <label>Mensagem personalizada (opcional):</label>
              <textarea id="textoOpcional" rows={3}></textarea>

              <label>Escolha a voz:</label>
              <div className="opcoes-voz">
                <label>
                  <input
                    type="radio"
                    name="voz"
                    value="Feminina"
                    defaultChecked
                  />{" "}
                  Feminina
                </label>
                <label>
                  <input type="radio" name="voz" value="Masculina" /> Masculina
                </label>
              </div>

              <button
                className="btn-finalizar"
                onClick={() => {
                  const remetente =
                    document.getElementById("nomeRemetente").value;
                  const destinatario =
                    document.getElementById("nomeDestinatario").value;
                  const numero =
                    document.getElementById("numeroDestinatario").value;
                  const texto = document.getElementById("textoOpcional").value;
                  const voz = document.querySelector(
                    "input[name='voz']:checked"
                  ).value;

                  if (!remetente || !destinatario || !numero) {
                    alert("Preencha os dados obrigatórios!");
                    return;
                  }

                  const mensagemFinal = `
💌 *${remetente} lhe enviou uma telemensagem!*

🎙️ *Mensagem:* ${modalInfo.titulo}
🎤 *Voz:* ${voz}

${texto ? "💬 Mensagem personalizada:\n" + texto : ""}

❤️ Envio automático pelo site Telemensagem Online.
                  `;

                  const url = `https://wa.me/${numero}?text=${encodeURIComponent(
                    mensagemFinal
                  )}`;

                  window.open(url, "_blank");
                  fecharModal();
                }}
              >
                Enviar pelo WhatsApp 💚
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
