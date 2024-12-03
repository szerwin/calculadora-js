
//esto agrega el boton de la calculadora que se agregue
function agregar(valor){
document.getElementById("pantalla").value += valor
}
//esta acción borra los datos de la pantalla
function borrar (){
    document.getElementById("pantalla").value ="" 
}
//esta acción hace las operaciones
function calcular(){
    const valorPantalla = document.getElementById("pantalla").value
    const resultado = eval(valorPantalla)
    document.getElementById("pantalla").value = resultado
}