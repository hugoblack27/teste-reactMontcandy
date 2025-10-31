import "../css/galeria.css";
import brigadeiro1 from "../img/Brigadeiros 1.jfif";
import brigadeiro2 from "../img/Brigadeiros 2.jfif";
import brigadeiro3 from "../img/brigadeiro 3.jfif";
import brigadeiro4 from "../img/brigadeiro 4.jfif";
import brigadeiro5 from "../img/brigadeiro 5.jfif";
import brigadeiro6 from "../img/brigadeiro 6.jfif";
import brigadeiro7 from "../img/brigadeiro 7.jfif";
import brigadeiro8 from "../img/brigadeiros 8.jpg";
import brigadeiro9 from "../img/brigadeiro 9.jpg";
import brigadeiro10 from "../img/Brigadeiro 10.png";
import brigadeiro11 from "../img/Brigadeiro 11.png";
import logo from "../img/Mídia (3).jfif";
import docesentregas from "../img/doces-entrega.jpg";
import docesfestas from "../img/doces-festas.jpg";
import { useEffect, useState } from "react";

function Galeria() {
  const slides = [
    { src: brigadeiro1, alt: "Brigadeiro 1" },
    { src: brigadeiro2, alt: "Brigadeiro 2" },
    { src: brigadeiro3, alt: "Brigadeiro 3" },
    { src: brigadeiro4, alt: "Brigadeiro 4" },
    { src: brigadeiro5, alt: "Brigadeiro 5" },
    { src: brigadeiro6, alt: "Brigadeiro 6" },
    { src: brigadeiro7, alt: "Brigadeiro 7" },
    { src: brigadeiro8, alt: "Brigadeiro 8" },
    { src: brigadeiro9, alt: "Brigadeiro 9" },
  ];

  const [favorites, setFavorites] = useState({});
  useEffect(() => {
    const favs = {};
    slides.forEach(({ alt }) => {
      if (localStorage.getItem(alt)) {
        favs[alt] = true;
      }
    });
    setFavorites(favs);
  }, []);

  function toggleHeart(alt) {
    setFavorites((prev) => {
      const newFavorites = { ...prev };
      if (newFavorites[alt]) {
        delete newFavorites[alt];
        localStorage.removeItem(alt);
      } else {
        newFavorites[alt] = true;
        localStorage.setItem(alt, "favorito");
      }
      return newFavorites;
    });
  }

  const [indiceAtual, setIndiceAtual] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comentarios, setComentarios] = useState([
    {
      usuario: "Usuario1",
      texto:
        "Parabéns, Mila! Mto lindo seu trabalho! E mto gostosos seus doces!!!! Sucesso!!!!",
    },
    { usuario: "Usuario2", texto: "Perfeito para minha festa!" },
    { usuario: "Usuario3", texto: "Quero muito experimentar um dia!" },
    { usuario: "Usuario4", texto: "❤️👏👏👏👏" },
  ]);
  const [novoComentario, setNovoComentario] = useState("");

  // Array de imagens para o "post"
  const imagens = [
    {
      src: brigadeiro1,
      alt: "Brigadeiro Gourmet",
      title:
        "Brigadeiro Gourmet: Deliciosos brigadeiros feitos com chocolate premium e recheios variados, perfeitos para qualquer ocasião.",
    },
    {
      src: brigadeiro2,
      alt: "Doces de diversos sabores",
      title:
        "Uma seleção irresistível de doces artesanais preparados com ingredientes de qualidade e muito carinho. Cada sabor é uma experiência única, perfeita para adoçar qualquer momento especial.",
    },
    {
      src: brigadeiro7,
      alt: "Doces com Frutas",
      title:
        "Combinação perfeita entre o sabor natural das frutas e a doçura artesanal. Feitos com ingredientes frescos e selecionados, são ideais para quem busca um toque leve, refrescante e irresistível em cada mordida.",
    },
    {
      src: brigadeiro10,
      alt: "Doces para aniversarios ou casamentos",
      title:
        "Feitos com chocolate de alta qualidade e recheios irresistíveis, nossos brigadeiros gourmet são a escolha perfeita para deixar qualquer celebração ainda mais doce e especial. Elegantes, saborosos e feitos com carinho, encantam convidados de todas as idades.",
    },
    {
      src: brigadeiro8,
      alt: "Brigadeiros Gourmet",
      title:
        "Em datas especiais como Páscoa, Halloween e outras comemorações, nossos doces ganham um toque temático e cheio de encanto. Com sabores únicos e apresentações criativas, são perfeitos para tornar cada celebração ainda mais doce, divertida e inesquecível.",
    },
    {
      src: brigadeiro11,
      alt: "Brigadeiros diversos",
      title:
        "Venha experimentar nossos doces!!",
    },
  ];

  const navegarGaleria = (direcao) => {
    setIndiceAtual(
      (prev) => (prev + direcao + imagens.length) % imagens.length
    );
  };

  const irParaImagem = (index) => setIndiceAtual(index);

  const toggleLikeModal = () => setLiked(!liked);

  const addComment = () => {
    if (novoComentario.trim()) {
      setComentarios([
        ...comentarios,
        { usuario: "Você", texto: novoComentario },
      ]);
      setNovoComentario("");
    }
  };
  return (
    <div>
      <section className="galeria" id="galeria">
        <h2 className="galeria-escrita">Galeria</h2>
        <section className="section-pattern rounded-4 p-md-5 container-fluid w-100 shadow">
          <section className="slideshow">
            <div className="slides">
              {slides.map(({ src, alt }) => {
                const isActive = favorites[alt];
                return (
                  <div className="slide" key={alt}>
                    <img src={src} alt={alt} />
                    <div className="overlay">
                      <div
                        className={`fas fa-heart heart ${
                          isActive ? "active" : ""
                        }`}
                        onClick={() => toggleHeart(alt)}
                        style={{ cursor: "pointer" }}
                      >
                        <i
                          className={` ${isActive ? "fa-solid" : "fa-regular"}`}
                        ></i>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </section>

        <section className="galeria" id="galeria">
          <section className="section-galerias-geral">
            
            <div className="post-content">
              <div className="image-section">
                <img
                  src={imagens[indiceAtual].src}
                  alt={imagens[indiceAtual].alt}
                  loading="lazy"
                />
                <button
                  className="nav-btn prev"
                  onClick={() => navegarGaleria(-1)}
                  aria-label="Imagem anterior"
                >
                  &larr;
                </button>
                <button
                  className="nav-btn next"
                  onClick={() => navegarGaleria(1)}
                  aria-label="Próxima imagem"
                >
                  &rarr;
                </button>
                <div className="indicators">
                  {imagens.map((_, index) => (
                    <div
                      key={index}
                      className={`indicator ${
                        index === indiceAtual ? "active" : ""
                      }`}
                      onClick={() => irParaImagem(index)}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="sidebar">
                <div className="sidebar-header">
                  <img src={logo} alt="Perfil" />
                  <h6>Mont Candy</h6>
                </div>
                {/* Legenda dinâmica */}
                <div className="legenda">{imagens[indiceAtual].title}</div>
                <div className="likes">
                  {liked ? "43 curtidas" : "42 curtidas"}
                </div>
                <div className="actions">
                  <button
                    className="like-btn"
                    onClick={toggleLikeModal}
                    aria-label="Curtir"
                  >
                    ❤️
                  </button>
                  <button aria-label="Comentar">💬</button>
                  <button aria-label="Compartilhar">📤</button>
                  <button aria-label="Salvar">🔖</button>
                </div>
                <div className="comments">
                  {comentarios.map((comment, index) => (
                    <div key={index} className="comment">
                      <strong>{comment.usuario}:</strong> {comment.texto}
                    </div>
                  ))}
                </div>
                <div className="add-comment">
                  <input
                    type="text"
                    placeholder="Adicione um comentário..."
                    value={novoComentario}
                    onChange={(e) => setNovoComentario(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addComment()}
                  />
                  <button onClick={addComment}>Publicar</button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Galeria;
