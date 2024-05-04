function celsiusParaFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit.toFixed(2);
}

function fahrenheitParaCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    return celsius.toFixed(2);
}

const converterController = {};

converterController.convertCelciusToFahrenheits = (req, res) => {
    const { celsius } = req.body;
    const fahrenheit = celsiusParaFahrenheit(celsius);

    const json = {
        celsius: celsius,
        fahrenheit: fahrenheit
    }

    res.status(200).json(json);
}

converterController.convertFahrenheitsToCelsius = (req, res) => {
    const { fahrenheit } = req.body;
    const celsius = fahrenheitParaCelsius(fahrenheit);

    const json = {
        fahrenheit: fahrenheit,
        celsius: celsius
    }

    res.status(200).json(json);
}

module.exports = converterController;