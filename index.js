function insert(num) { // functinon excutando um parametro para numeros
 let  numero = document.getElementById('result').innerHTML // ativando os numeros buscando id
 document.getElementById('result').innerHTML = numero + num; // variavel retorna num
}

function clean(){   //ativando botao de limpar
    document.getElementById('result').innerHTML = "";
}

function back() { // functinon excutando um parametro para numeros

    let resultado = document.getElementById('result').innerHTML // ativando os numeros buscando id
    document.getElementById('result').innerHTML = resultado.substring(0, resultado. length -1) //apagando um de cadsa vez
   }

   function calcular() { // functinon excutando um parametro para numeros

    let resultado = document.getElementById('result').innerHTML // ativando os numeros buscando id
    if(resultado)
    {
        document.getElementById('result').innerHTML = eval(resultado)
    }
    else
    {
        document.getElementById('result').innerHTML = "Nada a calcular"
    }
   }