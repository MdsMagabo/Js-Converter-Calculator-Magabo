function convertTemperature() {

  let temperature = parseFloat(document.getElementById("conTemp").value);
  let fromUnit = document.querySelector("#fromUnit").value;
  let toUnit = document.querySelector("#toUnit").value;

  
  let result;
  if (fromUnit === toUnit) {
    result = temperature;
  } else if (fromUnit === "Celsius (°C)") {
    if (toUnit === "Fahrenheit (°F)") {
      result = (temperature * 9/5) + 32;
    } else if (toUnit === "Kelvin (K)") {
      result = temperature + 273.15;
    }
  } else if (fromUnit === "Fahrenheit (°F)") {
    if (toUnit === "Celsius (°C)") {
      result = (temperature - 32) * 5/9;
    } else if (toUnit === "Kelvin (K)") {
      result = (temperature + 459.67) * 5/9;
    }
  } else if (fromUnit === "Kelvin (K)") {
    if (toUnit === "Celsius (°C)") {
      result = temperature - 273.15;
    } else if (toUnit === "Fahrenheit (°F)") {
      result = (temperature * 9/5) - 459.67;
    }
  }

  alert(`${temperature} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}`);
}
function myDisplay() {
  convertTemperature();
}
