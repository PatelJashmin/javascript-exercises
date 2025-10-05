const convertToCelsius = function(tempInFar) { 
  const convertedToCel = (tempInFar-32)*(5/9);
  return Math.round(convertedToCel*10)/10;
};

const convertToFahrenheit = function(tempInCel) {
  const convertedToFar = tempInCel*(9/5) + 32;
  return Math.round(convertedToFar*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
