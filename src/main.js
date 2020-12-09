export default class App {

    factorial(numero)
    {
        let resultado = 1;
        for (let i = numero; i > 0 ; i --)
        {
            resultado *= i;
        }
        return resultado;
    }

    convertirAString(numero)
    {
        let i = 1;
        let resultado = "";
        while(i <= numero)
        {
            resultado = "*" + resultado;
            i++;
        }
        return resultado;
    }

    obtenerDivisibles(numero)
    {
        let i = numero;
        let divisibles = 0;
        let a = numero;
        do
        {
            if(a % i == 0)
            {
                divisibles = divisibles + 1;
            }
            i--;
        }
        while(i>=1)
        return divisibles;
    }

    elevar(numero, potencia)
    {
        let resultado = 1;
        for(let i = 1; i <= potencia; i++)
        {
            resultado =  resultado * numero;
        }
        return resultado;
    }

}

let app = new App();

console.log("Probando factorial()");
console.log(app.factorial(5)); //Resultado debe ser 120

console.log("Probando convertirAString()");
console.log(app.convertirAString(6)); //Resultado debe ser ******

console.log("Probando obtenerDivisibles()");
console.log(app.obtenerDivisibles(6)); //Resultado debe ser 4

console.log("Probando elevar()");
console.log(app.elevar(3,4)); //Resultado debe ser 81
