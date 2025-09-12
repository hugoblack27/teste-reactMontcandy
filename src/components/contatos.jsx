import "../css/contatos.css"
import video from "../img/video.mp4"

function Contats() {
  return (
    <div>
      <section class="contatos-sectionsprincipal" id="contatos">
        <section class="sect-contatos">
          <h1>Contatos</h1>
          <section className="section-pattern-contatos rounded- p-5 p-md-4 w-100 shadow">
<video
  className="video-contatos"
  src={video}
  controls
  autoPlay
  muted
></video>
            <section>
              <a
                href="https://www.instagram.com/montcandy_/"
                class="instagram-btn"
                target="_blank"
              >
                <i class="fa-brands fa-instagram fa-3x"></i>
                Nos siga no instagram!!
              </a>
              <a href="#" class="whatsapp-btn" target="_blank">
                <i class="fa-brands fa-whatsapp fa-3x"></i>
                Nos chame no whatsapp!!
              </a>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Contats;
