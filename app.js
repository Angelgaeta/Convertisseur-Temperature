/*Ecrivez un programme JavaScript pour convertir les températures depuis Celsius vers Fahrenheit. La formule : (1 °C × 9/5) + 32 = 33,8 °F*/

let celcius = document.getElementById("cel");
let fahreinheint = document.getElementById("far");
let btnConvert = document.getElementById("convert");

btnConvert.addEventListener("click", function () {
  if (celcius.value >= 1) {
    fahreinheint.value = (celcius.value * 9) / 5 + 32;
  } else {
    alert("Veuillez entrer une valeur supérieur à 0");
  }
});
