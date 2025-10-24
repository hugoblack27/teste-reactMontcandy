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
                        className={`fas fa-heart heart ${isActive ? "active" : ""}`}
                        onClick={() => toggleHeart(alt)}
                        style={{ cursor: "pointer" }}
                      >
                        <i
                          className={` ${
                            isActive ? "fa-solid" : "fa-regular"
                          }`}
                        ></i>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </section>


        <section className="section-galerias-geral">
          <section className="section-galerias row">
            <img src={brigadeiro7} alt="" />
            <div className="section-galerias-text">
              <h5>Doce, leve e frutado! 🍓</h5>
              <p> Sabores que encantam e refrescam a cada mordida!</p>
            </div>
          </section>
          <section className="section-galerias row">
            <img src={docesentregas} alt="" />
            <div className="section-galerias-text">
              <h5>Todo dia festivo merece um toque de doçura!</h5>
              <p>De Natal a aniversários, a Mont’ Candy está pronta pra adoçar seus melhores momentos com nossos sabores irresistíveis!</p>
            </div>
          </section>

          <section className="section-galerias row">
            <img src={docesfestas} alt="" />
            <div className="section-galerias-text">
              <h5>Doces pra Festas</h5>
              <p>Cada festa merece um toque de doçura… e nós levamos isso até você! 🍭 </p>
            </div>
          </section>
          <section className="section-galerias row">
            <img src={brigadeiro9} alt="" />
            <div className="section-galerias-text">
              <h5>Um dia triste? Deixe a doçura cuidar disso! 💖</h5>
              <p>
                Conheça nossos doces de vários sabores e adoçe seu momento.
              </p>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Galeria;
