import "../css/Footer.css"
import Logo from "../img/Mídia (3).jfif"

function Footer() {
  return (
    <div>
      <footer>
        <div class="footer-container">
          <section class="footer-logo">
            <img src={Logo} alt="Logo" class="img-footer" />
          </section>

          <section class="section-nav-footer">
            <nav class="footer-menu">
              <ul>
                <li>
                  <a href="#">Início</a>
                </li>
                <li>
                  <a href="#sobre-mim">Sobre Mim</a>
                </li>
                <li>
                  <a href="#galeria">Galeria</a>
                </li>
                <li>
                  <a href="#contatos">Contatos</a>
                </li>
              </ul>
            </nav>
          </section>

          <section class="footer-bottom">
            <p>&copy; 2025 Mont Candy. Todos os direitos reservados.</p>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
