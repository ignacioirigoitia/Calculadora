let calculadora = {
    sumar: (a,b) => a + b,
    restar: (a,b) => a - b,
    multiplicar: (a,b) => a * b,
    dividir: function(a, b){
        if(a !== 0 && b !==0){
            return a / b
        }else{
            let mensaje = "Error";
            return mensaje
        }
    }  
}

module.exports = calculadora // exportando como modulo, el modulo es todo el objeto literal junto con todos sus metodos