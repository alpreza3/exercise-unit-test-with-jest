// Importamos las funciones desde app.js
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// Prueba de suma
test('Sum of 7 and 3 should equal 10', () => {
    expect(sum(7, 3)).toBe(10);
});

// Prueba de fromDollarToYen
test('One dollar should be 156.5 yen', () => {
    const yen = fromDollarToYen(1); // 1 USD = 156.5 JPY
    expect(yen).toBe(156.5);
});

// Prueba de fromEuroToDollar
test('One euro should be 1.07 dollars', () => {
    const dollars = fromEuroToDollar(1); // 1 EUR = 1.07 USD
    expect(dollars).toBe(1.07);
});

// Prueba de fromYenToPound
test('One yen should be 0.006 pounds', () => {
    const pounds = fromYenToPound(1); // 1 JPY = 0.006 GBP
    expect(pounds).toBe(0.006);
});

// Probar con montos mayores
test('5 dollars should be 782.5 yen', () => {
    const yen = fromDollarToYen(5); // 5 USD = 5 * 156.5 = 782.5 JPY
    expect(yen).toBe(782.5);
});

test('10 euros should be 10.7 dollars', () => {
    const dollars = fromEuroToDollar(10); // 10 EUR = 10 * 1.07 = 10.7 USD
    expect(dollars).toBeCloseTo(10.7, 1);  // Compara con una tolerancia de 1 decimal
});

test('1000 yen should be 6 pounds', () => {
    const pounds = fromYenToPound(1000); // 1000 JPY = 1000 * 0.006 = 6 GBP
    expect(pounds).toBe(6);
});
