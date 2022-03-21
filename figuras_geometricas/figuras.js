// Cuadradro
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es : " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es : " + areaCuadrado + "cm^2");
console.groupEnd();

// Triangulo
console.group("Triangulo")

const ladotriangulo1 = 5;
const ladotriangulo2 = 6;
const basetriangulo = 4;
const alturatriangulo = 5;
console.log("Los lados, la base y la altura del triangulo miden: " 
+ ladotriangulo1 + "cm " + ladotriangulo2 + "cm " + basetriangulo + "cm " + alturatriangulo + "cm");

const perimetrotriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;
console.log("El perimetro del triangulo es : " + perimetrotriangulo + "cm");

const areatriangulo = (basetriangulo * alturatriangulo) / 2;
console.log("El area del triangulo es : " + areatriangulo + "cm^2");
console.groupEnd();

// circulo
console.group("Circulo");

const radioCirculo = 5;
const diametrocirculo = radioCirculo * 2;
const PI = Math.PI;

const perimetroCirculo = diametrocirculo * PI;
console.log("El perimetro del circulo es : " + perimetroCirculo + "cm");

const areaCirculo = PI * radioCirculo * radioCirculo;
console.log("El area del circulo es : " + areaCirculo + "cm^2");

console.groupEnd();

