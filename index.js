//Graus Fahrenheit p/kelvin
//(KELVIN) = (GRAUS_FAHRENHEIT -32)*(5/9) + 273.15

//GRAUS CELSIUS P/FAHRENHEIT
//(GRAUS_FAHRENHEIT) = (GRAUS CELCIUS)*(9/5) + 32

let kelvin = (77-32)*(5/9) + 273.15
console.log(kelvin)
 
//*b) calcule e mostre o valor de 80 C em F, mostrando a unidade no console tabém
let Fahrenheit = (80)*(9/5) + 32
console.log(Fahrenheit)

//calcule e mostre o valor de 30 c em F e K mostrando as unidades no console
let Fahrenheit1 = (30)*(9/5) + 32
console.log(Fahrenheit1)

let kelvin1 = (Fahrenheit1-32)*(5/9) + 273.15
console.log(kelvin1)

//altere o ultimo item para que o usario insira o valor em graus Celsios que ele deseja converter
