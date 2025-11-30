import { useEffect, useState } from "react";
import AudioPlayer from "./components/AudioPlayer";

const API_URL = "http://localhost:3333/api/messages-ready";

const CATEGORIES = [
  { id: "todas", label: "Todas" },
  { id: "amor", label: "Amor" },
  { id: "aniversario", label: "Aniversário" },
  { id: "maes", label: "Dia das Mães" },
  { id: "pais", label: "Dia dos Pais" },
  { id: "infantil", label: "Infantil" },
];

function App() {
  const [messages, setMessages] = useState([]);
  const [category, setCategory] = useState("todas");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    async function loadMessages() {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        const data = await res.json();
        setMessages(data);
      } catch (err) {
        console.error(err);
        setError(
          "Não foi possível carregar as mensagens. Verifique se o servidor está rodando."
        );
      } finally {
        setLoading(false);
      }
    }

    loadMessages();
  }, []);

  const normalizedSearch = search.toLowerCase();

  const filteredMessages = messages.filter((msg) => {
    const matchCategory = category === "todas" || msg.categoria === category;
    const text = `${msg.titulo ?? ""} ${msg.descricao ?? ""}`.toLowerCase();
    const matchSearch = text.includes(normalizedSearch);
    return matchCategory && matchSearch;
  });

  const whatsappNumber = "55SEUNUMEROAQUI";

  function buildWhatsAppLink(message) {
    const texto = `Olá! Vi a telemensagem "%s" no site e gostaria de saber como funciona para enviar.`.replace(
      "%s",
      message.titulo ?? "Personalizada"
    );

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(texto)}`;
  }

  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <div className="container header-inner">
          <div className="logo-area">
            <span className="logo-icon">💌</span>
            <div>
              <h1 className="logo-title">Telemensagem Online</h1>
              <p className="logo-subtitle">
                Mensagens personalizadas com voz e trilha sonora
              </p>
            </div>
          </div>

          <div className="header-contact">
            <div className="header-phone">
              <span>Atendimento WhatsApp</span>
              <strong>(00) 00000-0000</strong>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              Falar agora
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="pill">IA + Emoção Humana</span>
            <h2>
              Surpreenda quem você ama com
              <span> uma telemensagem inesquecível.</span>
            </h2>
            <p>
              Escolha uma mensagem pronta ou peça algo totalmente exclusivo. Nós
              gravamos com voz feminina ou masculina, trilha de fundo e muita
              emoção.
            </p>

            <div className="hero-actions">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Quero enviar uma telemensagem
              </a>
              <a href="#lista" className="btn btn-ghost">
                Ver mensagens prontas
              </a>
            </div>

            <ul className="hero-list">
              <li>✔ Aniversários, pais, mães, infantil, amor e mais</li>
              <li>✔ Entrega rápida por áudio ou link</li>
              <li>✔ Opção de mensagem personalizada</li>
            </ul>
          </div>

          <div className="hero-card">
            <div className="hero-wave" />
            <div className="hero-card-inner">
              <p className="hero-card-title">Exemplo de telemensagem</p>
              <p className="hero-card-text">
                <strong>“Hoje o dia é seu...”</strong> – trilha suave, voz
                emocionada e aquela mensagem que toca o coração de quem recebe.
              </p>
              <div className="hero-badges">
                <span>🎙 Voz feminina ou masculina</span>
                <span>🎵 Fundo musical</span>
                <span>⚡ Entrega rápida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LISTA */}
      <section id="lista" className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h3>Mensagens prontas</h3>
              <p>Filtre por ocasião ou pesquise por palavra-chave.</p>
            </div>
            <div className="search-box">
              <input
                type="text"
                placeholder="Buscar por título ou descrição..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* CATEGORIAS */}
          <div className="category-bar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`category-pill ${
                  category === cat.id ? "active" : ""
                }`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {loading && <p className="info">Carregando mensagens...</p>}
          {error && <p className="error">{error}</p>}

          {!loading && !error && filteredMessages.length === 0 && (
            <p className="info">
              Nenhuma mensagem encontrada com esses filtros.
            </p>
          )}

          {/* CARDS */}
          <div className="grid">
            {filteredMessages.map((msg) => (
              <article
                key={msg.id}
                className={`card ${msg.destaque ? "card-featured" : ""}`}
              >
                <div className="card-header">
                  <h4>{msg.titulo}</h4>
                  {msg.categoria && (
                    <span className="tag">
                      {CATEGORIES.find((c) => c.id === msg.categoria)?.label ??
                        msg.categoria}
                    </span>
                  )}
                </div>

                <p className="card-description">{msg.descricao}</p>

                <div className="card-meta">
                  {msg.voz && <span>🎙 {msg.voz}</span>}
                  {msg.duracao && <span>⏱ {msg.duracao}</span>}
                </div>

                {/* PLAYER NOVO */}
                {msg.url && (
                  <div className="card-audio">
                    <AudioPlayer
                      src={`http://localhost:3333${msg.url}`}
                    />
                  </div>
                )}

                <div className="card-actions">
                  <button
                    type="button"
                    className="btn btn-ghost small"
                    onClick={() => setSelected(msg)}
                  >
                    Ver detalhes
                  </button>
                  <a
                    href={buildWhatsAppLink(msg)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary small"
                  >
                    Quero essa mensagem
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} Telemensagem Online – Todos os direitos
            reservados.
          </p>
          <p className="footer-mini">Desenvolvido com carinho por você ✨</p>
        </div>
      </footer>

      {/* MODAL */}
      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <h3>{selected.titulo}</h3>

            {selected.categoria && (
              <p className="modal-tag">
                Categoria:{" "}
                <strong>
                  {CATEGORIES.find((c) => c.id === selected.categoria)?.label ??
                    selected.categoria}
                </strong>
              </p>
            )}

            <p className="modal-text">{selected.descricao}</p>

            <div className="modal-meta">
              {selected.voz && <span>🎙 Voz: {selected.voz}</span>}
              {selected.duracao && <span>⏱ Duração: {selected.duracao}</span>}
            </div>

            {/* PLAYER NO MODAL */}
            {selected.url && (
              <div className="modal-audio">
                <AudioPlayer
                  src={`http://localhost:3333${selected.url}`}
                />
              </div>
            )}

            <a
              href={buildWhatsAppLink(selected)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary full"
            >
              Quero enviar essa telemensagem
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
