import "../css/galeria.css"

function Galeria() {
    return(
        <div>
                    <section class="galeria" id="galeria"> 

            <h2 class="galeria-escrita"> Galeria</h2>
<section class="section-pattern rounded-3xl p-8 md:p-12 max-w-9xl w-full floating-shadow">
    
    <section class="slideshow">
        <div class="slides">
            <div class="slide">
                {/* <img src="/imagens/Brigadeiros 1.jfif" alt=""> */}
                <div class="overlay">
                    <div class="heart-container">
                        <i class="fas fa-heart heart" onclick="toggleHeart(this)"></i>
                    </div>
                </div>
            </div>
            
            <div class="slide">
                {/* <img src="/imagens/Brigadeiros 2.jfif" alt=""> */}
                <div class="overlay">
                    <div class="heart-container">
                        <i class="fas fa-heart heart" onclick="toggleHeart(this)"></i>
                    </div>
                </div>
            </div>
            
            <div class="slide">
                {/* <img src="/imagens/brigadeiro 3.jfif" alt=""> */}
                <div class="overlay">
                    <div class="heart-container">
                        <div class="heart-container">
                            <i class="fas fa-heart heart" onclick="toggleHeart(this)"></i>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="slide">
                {/* <img src="/imagens/brigadeiro 4.jfif" alt=""> */}
                <div class="overlay">
                    <div class="heart-container">
                        <i class="fas fa-heart heart" onclick="toggleHeart(this)"></i>
                    </div>
                </div>
            </div>
            
            <div class="slide">
                {/* <img src="/imagens/brigadeiro 5.jfif" alt=""> */}
                <div class="overlay">
                    <div class="heart-container">
                        <i class="fas fa-heart heart" onclick="toggleHeart(this)"></i>
                    </div>
                </div>
            </div>
            
            <div class="slide">
                {/* <img src="/imagens/brigadeiro 6.jfif" alt=""> */}
                <div class="overlay">
                    <div class="heart-container">
                        <i class="fas fa-heart heart" onclick="toggleHeart(this)"></i>
                    </div>
                </div>
            </div>
            
            <div class="slide">
                {/* <img src="/imagens/brigadeiro 7.jfif" alt=""> */}
                <div class="overlay">
                    <div class="heart-container">
                        <i class="fas fa-heart heart" onclick="toggleHeart(this)"></i>
                    </div>
                </div>
            </div>
            <div class="slide">
                {/* <img src="/imagens/brigadeiros 8.jpg" alt=""> */}
                <div class="overlay">
                    <div class="heart-container">
                        <i class="fas fa-heart heart" onclick="toggleHeart(this)"></i>
                    </div>
                </div>
            </div>
            <div class="slide">
                {/* <img src="/imagens/brigadeiro 9.jpg" alt=""> */}
                <div class="overlay">
                    <div class="heart-container">
                        <i class="fas fa-heart heart" onclick="toggleHeart(this)"></i>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
</section>

    <section class="section-galerias-geral grid-cols-2 gap-12 m-8">
        <section class="section-galerias">
            {/* <img class="w-full h-48 object-cover" src="/imagens/brigadeiro 6.jfif" alt=""> */}
            <div class="section-galerias-text">
                <h5>Doces pra entrega</h5>
                <p> esses são meus doces e blá blá blá</p>
            </div>
        </section>
        <section class="section-galerias">
            {/* <img class="w-full h-48 object-cover" src="/imagens/doces-entrega.jpg" alt=""> */}
            <div class="section-galerias-text">
                <h5>Doces pra entrega</h5>
                <p> esses são meus doces e blá blá blá</p>
            </div>
        </section>
        <section class="section-galerias">
            {/* <img class="w-full h-48 object-cover" src="/imagens/doces-festas.jpg" alt=""> */}
            <div class="section-galerias-text">
                <h5>Doces pra Festas</h5>
                <p> esses são meus doces e blá blá blá</p>
            </div>
        </section>
        <section class="section-galerias">
            {/* <img class="w-full h-48 object-cover" src="/imagens/brigadeiro 6.jfif" alt=""> */}
            <div class="section-galerias-text">
                <h5>Doces de dias especiais</h5>
                <p> esses são meus doces e blá blá blásadojasiojdasjkldjklasjdlkjaskldjklsajdkljaslidkos lsakjdlksajdlkasjkldj</p>
            </div>
        </section>
    </section>
</section>
        </div>
    )
}

export default Galeria