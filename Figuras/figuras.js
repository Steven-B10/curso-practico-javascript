// Código del cuadrado 
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado ** 2    
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


// Código del Triángulo
function perimetroTriangulo( lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcularPerimetroTriangulo() {
    const inputA = document.getElementById("inputA");
    const inputB = document.getElementById("inputB");
    const inputBase = document.getElementById("inputBase");

    const bs = parseInt(inputBase.value);
    const a = parseInt(inputA.value);
    const b = parseInt(inputB.value);

    const perimetro = perimetroTriangulo(a, b, bs);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("inputBase");
    const inputAltura = document.getElementById("inputAltura");
    
    const h = parseInt(inputAltura.value);
    const bs = parseInt(inputBase.value);

    const area = areaTriangulo(bs, h);
    alert(area);
}

// Código del círculo 
// Diámetro 
function diametroCirculo(radio) {
    return radio * 2;
} 
// PI
const PI = Math.PI.toFixed(2);
// Circunferencía
function perimetroCiculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// Área
function areaCirculo(radio) {
    return (radio ** 2) * PI
}

function calcularDiametroCirculo() {
    const input = document.getElementById("inputRadio");
    const d = parseFloat(input.value);

    const diametro = diametroCirculo(d);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputRadio");
    const p = parseFloat(input.value);

    const perimetro = perimetroCiculo(p);
    alert(perimetro)
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputRadio");
    const a = parseFloat(input.value);

    const area = areaCirculo(a);
    alert(area);
}


