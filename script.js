// ========================================
// BOTÓN: CONOCER BENEFICIOS
// ========================================

const beneficiosBtn = document.getElementById("beneficiosBtn");

beneficiosBtn.addEventListener("click", function () {

    document.getElementById("beneficios").scrollIntoView({
        behavior: "smooth"
    });

});


// ========================================
// CALCULADORA DE AHORRO
// ========================================

const calcularBtn = document.getElementById("calcularBtn");

calcularBtn.addEventListener("click", function () {

    const facturaInput = document.getElementById("factura");
    const resultado = document.getElementById("resultado");

    const factura = Number(facturaInput.value);


    if (factura <= 0 || isNaN(factura)) {

        resultado.textContent =
            "⚠️ Por favor, ingresa un valor válido.";

        return;
    }


    // Estimación educativa del 30 %
    const ahorro = factura * 0.30;

    const ahorroAnual = ahorro * 12;


    resultado.innerHTML =
        "☀️ Ahorro mensual estimado: $" +
        ahorro.toLocaleString("es-CO") +
        " COP" +
        "<br><br>" +
        "📅 Ahorro anual estimado: $" +
        ahorroAnual.toLocaleString("es-CO") +
        " COP";

});


// ========================================
// ANIMACIÓN DE TARJETAS
// ========================================

const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {

    card.addEventListener("mouseenter", function() {

        card.style.transform = "translateY(-10px)";

    });


    card.addEventListener("mouseleave", function() {

        card.style.transform = "translateY(0)";

    });

});


// ========================================
// ANIMACIÓN AL HACER SCROLL
// ========================================

const animatedElements = document.querySelectorAll(
    ".info-box, .step, .card, .factor-grid article, .fact-grid div"
);


const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(function(element) {

    element.classList.add("hidden");

    observer.observe(element);

});


// ========================================
// ENTER EN LA CALCULADORA
// ========================================

const facturaInput = document.getElementById("factura");

facturaInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        calcularBtn.click();

    }

});
