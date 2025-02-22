// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b;
}

// Solo un registro en consola para nosotros
console.log(sum(7, 3));

// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Función para convertir de dólares a yenes
const fromDollarToYen = function(valueInDollar) {
    return valueInDollar * 156.5; // 1 USD = 156.5 JPY
}

// Función para convertir de yenes a libras
const fromYenToPound = function(valueInYen) {
    return valueInYen * 0.006; // 1 JPY = 0.006 GBP
}

// Exportar las funciones para que puedan ser usadas en otros archivos (como test.js)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
