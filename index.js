// Vulnerabilidad baja: uso de 'eval' con entrada controlada
const userInput = "2 + 2";
console.log("Resultado:", eval(userInput));
