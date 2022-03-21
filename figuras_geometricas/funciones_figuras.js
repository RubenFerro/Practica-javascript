// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4 + " cm";
}

function areaCuadrado(lado) {
  return lado * lado + " cm^2";
}
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado) {
  return (lado * 3) + " cm";
}

function areaTriangulo(lado) {
  return (lado * lado) / 2 + " cm^2";
}
console.groupEnd();

// Código del círculo
console.group("Círculos");


// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML

// Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Triangulo
function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
  
    const area = areaTriangulo(value);
    alert(area);
  }

