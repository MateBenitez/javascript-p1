document.addEventListener("DOMContentLoaded", function () {
    const tipoSeguro = document.getElementById("tipo-seguro");
    const edad = document.getElementById("edad");
    const cobertura = document.getElementById("cobertura");
    const calcularBtn = document.getElementById("calcular");
    const cotizacionElement = document.getElementById("cotizacion");

    calcularBtn.addEventListener("click", function () {
        const tipo = tipoSeguro.value;
        const age = parseInt(edad.value);
        const coverage = parseInt(cobertura.value);
        let cotizacion = 0;

        for (let mes = 1; mes <= 12; mes++) 
        {
            if (tipo === "auto") {
                cotizacion += 100 + age * 10 + coverage * 0.5;
            } else if (tipo === "hogar") {
                cotizacion += 50 + age * 5 + coverage * 0.3;
            }
        }

        cotizacionElement.textContent = `Cotización total para los 12 meses: $${cotizacion}`;
    });
});