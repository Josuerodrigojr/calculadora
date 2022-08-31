
function numero(num1){
    // let num1 = document.getElementById('numero').value;
    // console.log (num1);
    var numero = document.getElementById('resultado').value;
    document.getElementById('resultado').value =numero + num1;

}

function limpar(){
    document.getElementById('resultado').value = " ";
}

function apagar(){
    var resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value = resultado.substring(0, resultado.length - 1);
}

function calcular(){
    var resultado = document.getElementById('resultado').value;
    if (resultado){
        resultado = eval(resultado);
        document.getElementById('resultado').value =resultado.toFixed(3);
    }
}