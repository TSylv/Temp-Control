function convertToCelsius(fahrenheit) {
    return (fahrenheit -32) * 5 / 9;
}



function describeTemperature(fahrenheit) {
  const celsius = convertToCelsius(fahrenheit);

  if (celsius < 0) return "very cold";
  if (celsius < 20) return "cold";
  if (celsius < 30) return "warm";
  if (celsius < 40) return "hot";
  return "very hot";
}


let input = prompt("Enter temperature in Fahrenheit:");
let f = Number(input);
let c = convertToCelsius(f);
let description = describeTemperature(f);

alert(`${f}°F is ${c.toFixed(1)}°C — ${description}`);