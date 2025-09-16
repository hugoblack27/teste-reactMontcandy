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

function Galeria() {
  return (
    <div>
      <section class="galeria" id="galeria">
        <h2 class="galeria-escrita"> Galeria</h2>
        <section class="section-pattern rounded-4 p-4 p-md-5 container-fluid w-100 shadow">
          <section class="slideshow">
            <div class="slides">
              <div class="slide">
                <img src={brigadeiro1} alt="" />

                <div class="overlay">
                  <div class="heart-container">
                    <i
                      class="fas fa-heart heart"
                      onclick="toggleHeart(this)"
                    ></i>
                  </div>
                </div>
              </div>

              <div class="slide">
                <img src={brigadeiro2} alt="" />
                <div class="overlay">
                  <div class="heart-container">
                    <i
                      class="fas fa-heart heart"
                      onclick="toggleHeart(this)"
                    ></i>
                  </div>
                </div>
              </div>

              <div class="slide">
                <img src={brigadeiro3} alt="" />
                <div class="overlay">
                  <div class="heart-container">
                    <div class="heart-container">
                      <i
                        class="fas fa-heart heart"
                        onclick="toggleHeart(this)"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="slide">
                <img src={brigadeiro4} alt="" />
                <div class="overlay">
                  <div class="heart-container">
                    <i
                      class="fas fa-heart heart"
                      onclick="toggleHeart(this)"
                    ></i>
                  </div>
                </div>
              </div>

              <div class="slide">
                      <img src={brigadeiro5} alt="" />
                <div class="overlay">
                  <div class="heart-container">
                    <i
                      class="fas fa-heart heart"
                      onclick="toggleHeart(this)"
                    ></i>
                  </div>
                </div>
              </div>

              <div class="slide">
                <img src={brigadeiro6} alt="" />
                <div class="overlay">
                  <div class="heart-container">
                    <i
                      class="fas fa-heart heart"
                      onclick="toggleHeart(this)"
                    ></i>
                  </div>
                </div>
              </div>

              <div class="slide">
                <img src={brigadeiro7} alt="" />
                <div class="overlay">
                  <div class="heart-container">
                    <i
                      class="fas fa-heart heart"
                      onclick="toggleHeart(this)"
                    ></i>
                  </div>
                </div>
              </div>
              <div class="slide">
                <img src={brigadeiro8} alt="" />
                <div class="overlay">
                  <div class="heart-container">
                    <i
                      class="fas fa-heart heart"
                      onclick="toggleHeart(this)"
                    ></i>
                  </div>
                </div>
              </div>
              <div class="slide">
                <img src={brigadeiro9} alt="" />
                <div class="overlay">
                  <div class="heart-container">
                    <i
                      class="fas fa-heart heart"
                      onclick="toggleHeart(this)"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section class="section-galerias-geral d-grid gap-4 m-4">
          <section class="section-galerias row">
            {/* <img class="w-full h-48 object-cover" src="/imagens/brigadeiro 6.jfif" alt=""> */}
            <div class="section-galerias-text">
              <h5>Doces pra entrega</h5>
              <p> esses são meus doces e blá blá blá</p>
            </div>
          </section>
          <section class="section-galerias row">
            <img src={docesentregas} alt="" />
            <div class="section-galerias-text">
              <h5>Doces pra entrega</h5>
              <p> esses são meus doces e blá blá blá</p>
            </div>
          </section>
          <section class="section-galerias row">
            <img src={docesfestas} alt="" />
            <div class="section-galerias-text">
              <h5>Doces pra Festas</h5>
              <p> esses são meus doces e blá blá blá</p>
            </div>
          </section>
          <section class="section-galerias row">
            <img src="" alt="" />
            <div class="section-galerias-text">
              <h5>Doces de dias especiais</h5>
              <p>
                {" "}
                esses são meus doces e blá blá
                blásadojasiojdasjkldjklasjdlkjaskldjklsajdkljaslidkos
                lsakjdlksajdlkasjkldj
              </p>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Galeria;
