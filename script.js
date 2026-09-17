// Botón para ir a la sección de beneficios

const beneficiosBtn = document.getElementById("beneficiosBtn");

beneficiosBtn.addEventListener("click", function () {

    document.getElementById("beneficios").scrollIntoView({
        behavior: "smooth"
    });

});


// Calculadora de ahorro aproximado

const calcularBtn = document.getElementById("calcularBtn");

calcularBtn.addEventListener("click", function () {

    const factura = Number(document.getElementById("factura").value);
    const resultado = document.getElementById("resultado");

    if (factura <= 0 || isNaN(factura)) {

        resultado.textContent =
            "Por favor, ingresa un valor válido.";

        return;
    }

    // Estimación educativa del 30 %
    const ahorro = factura * 0.30;

    resultado.textContent =
        "Ahorro mensual estimado: $" +
        ahorro.toLocaleString("es-CO") +
        " COP";

});


// Animación sencilla para las tarjetas

const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {

    card.addEventListener("mouseenter", function() {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function() {
        card.style.transform = "translateY(0)";
    });

});