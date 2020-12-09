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

}

let app = new App();

console.log("Probando factorial()");
console.log(app.factorial(5));
