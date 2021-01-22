//Peso
var weightSlider = document.getElementById("sliderWeight");
var weightOutput = document.getElementById("weightOutput");

weightOutput.innerHtml = weightSlider.value;

weightSlider.oninput = function(){
  weightOutput.innerHtml = this.value;
}
function showValueWeight(newVal){
  weightSlider.value = newVal;
}
weightSlider.addEventListener("input",updateValueOutPutWeight);
function updateValueOutPutWeight(e){
  weightOutput.value = e.srcElement.value;
}
// Altura
var heightSlider = document.getElementById("sliderHeight");
var heightOutput = document.getElementById("heightOutput");

heightOutput.innerHtml = heightSlider.value;

heightSlider.oninput = function(){
  heightOutput.innerHtml = this.value;
}
function showValueHeight(newVal){
  heightSlider.value = newVal;
}
heightSlider.addEventListener("input",updateValueOutPutHeight);
function updateValueOutPutHeight(e){
  heightOutput.value = e.srcElement.value;
}
// imc = peso kg / (altura * altura) mt
const button = document.getElementById("btnCalcular");
button.addEventListener("click", function(){
  let peso = document.getElementById("weightOutput").value; 
  let altura = document.getElementById("heightOutput").value; 
  let alturaEmMetros = (altura / 100);
  let alturaAoQuadrado = (alturaEmMetros * alturaEmMetros);
  let imc = (peso / alturaAoQuadrado);
  let resultadoP= document.querySelector("#resultado");
  resultadoP.innerHTML = imc.toFixed(2);
});
