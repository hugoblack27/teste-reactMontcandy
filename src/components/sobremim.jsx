import "../css/sobremim.css";
import fotodona from "../img/foto da dona.jfif";

function SobreMim() {
  return (
    <div>
<section className="sobre-mim" id="sobre-mim">
  <section className="section-pattern  rounded-3  p-md-5 shadow-lg ">
    
    
    <div className="text-center mb-5">
      <h2 className="fw-bold text-dark mb-4 fs-2 fs-md-1 chewy-font">
        Minha Jornanda com os Doces
      </h2>
      <div
        className="mx-auto"
        style={{
          width: "80px",
          height: "4px",
          backgroundColor: "#d63384",
        }}
      ></div>
    </div>

    
    <div className=" align-items-center g-5 teste">
      
    
      <div className="foto-sobremim position-relative col-md-6 order-md-1">
        <img
          src={fotodona}
          alt="Confeiteira profissional em cozinha moderna preparando doces gourmet com ingredientes premium"
          className="rounded-2 shadow-lg w-100"
        />
      </div>

      
      <div className="col-md-6 order-md-2">
        <h3
          className="fw-bold text-dark mb-4 fs-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Da Tradição à Inovação
        </h3>
        <p className="text-secondary mb-4">
          Cada doce que crio carrega a herança das receitas de família que
          aprendi com minha avó, combinada com técnicas modernas de
          confeitaria francesa. Minha missão é transformar ingredientes
          simples em experiências gustativas memoráveis.
        </p>

       
        <div className="row row-cols-2 g-4 mb-4">
        
          <div className="text-center">
            <div
              className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
              style={{
                width: "3rem",
                height: "3rem",
                backgroundColor: "#ffe4e6",
              }}
            >
              <i
                className="fa-solid fa-candy-cane"
                style={{ color: "#db2777" }}
              ></i>
            </div>
            <h4 className="fw-semibold small">Ingredientes Frescos</h4>
          </div>

          
          <div className="text-center">
            <div
              className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
              style={{
                width: "3rem",
                height: "3rem",
                backgroundColor: "#ffe4e6",
              }}
            >
              <i
                className="fas fa-hand-holding-heart"
                style={{ color: "#db2777" }}
              ></i>
            </div>
            <h4 className="fw-semibold small">Artesanal</h4>
          </div>

          
          <div className="text-center">
            <div
              className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
              style={{
                width: "3rem",
                height: "3rem",
                backgroundColor: "#ffe4e6",
              }}
            >
              <i
                className="fas fa-award"
                style={{ color: "#db2777" }}
              ></i>
            </div>
            <h4 className="fw-semibold small">Qualidade Premium</h4>
          </div>

         
          <div className="text-center">
            <div
              className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
              style={{
                width: "3rem",
                height: "3rem",
                backgroundColor: "#ffe4e6",
              }}
            >
              <i
                className="fas fa-smile"
                style={{ color: "#db2777" }}
              ></i>
            </div>
            <h4 className="fw-semibold small">Satisfação</h4>
          </div>
        </div>

      
        <blockquote
          className="border-start ps-3 fst-italic text-secondary mb-4"
          style={{ borderColor: "#db2777" }}
        >
          "A verdadeira doçura está na paixão com que cada criação é feita"
        </blockquote>
      </div>
    </div>
  </section>
</section>

    </div>
  );
}

export default SobreMim;
