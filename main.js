//Utilisation de fonction de callback
//Fonction secondaire
//addition
function addition(a, b) {
  return a + b;
}

//Soustraction
function soustraction(a, b) {
  return a - b;
}
//Multiplication
function multiplication(a, b) {
  return a * b;
}
//Division
function division(a, b, callback) {
  return a / b;
}
//Fonction principale
//Calculateur
function calculer(a, b, callback) {
  return console.log(callback(a, b));
}

calculer(2, 5, multiplication);
