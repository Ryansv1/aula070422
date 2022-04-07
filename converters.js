/* converters.js */
function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
    }
    module.exports.celsiusToFahrenheit = celsiusToFahrenheit;

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5/9);
}
    module.exports.fahrenheitToCelsius = fahrenheitToCelsius;
