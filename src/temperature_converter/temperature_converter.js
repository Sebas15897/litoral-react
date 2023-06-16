import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  const convertToCelsius = () => {
    const convertedValue = ((fahrenheit - 32) * 5) / 9;
    setCelsius(convertedValue);
  };

  const convertToFahrenheit = () => {
    const convertedValue = (celsius * 9) / 5 + 32;
    setFahrenheit(convertedValue);
  };

  const handleCelsiusChange = (event) => {
    const value = parseFloat(event.target.value);
    setCelsius(value);
  };

  const handleFahrenheitChange = (event) => {
    const value = parseFloat(event.target.value);
    setFahrenheit(value);
  };

  return (
    <div>
      <h2>Conversor de temperatura</h2>
      <div>
        <label>
          Celsius:
          <input
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
          />
        </label>
        <button onClick={convertToCelsius}>Convertir</button>
      </div>
      <div>
        <label>
          Fahrenheit:
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
          />
        </label>
        <button onClick={convertToFahrenheit}>Convertir</button>
      </div>
    </div>
  );
};

export default TemperatureConverter;
