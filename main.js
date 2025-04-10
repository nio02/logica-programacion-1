//Ejercicio Lógica 1

document.getElementById("boton").addEventListener("click", () =>{
    event.preventDefault();

    let numero1 = document.getElementById("primer-numero").value;
    let numero2 = document.getElementById("segundo-numero").value;
    let numero3 = document.getElementById("tercer-numero").value;

    let listaMayor = numerosMayorMenor(numero1, numero2, numero3);
    let listaMenor = numerosMenorMayor(numero1, numero2, numero3);

    //Mostrar en consola
    console.log(`${listaMayor}\n${listaMenor}`);
    //Mostrar en documento
    const texto = document.createElement('p');
    texto.innerHTML = `${listaMayor}<br>${listaMenor}`;
    document.getElementById("numeros").appendChild(texto);
})

function numerosMayorMenor(num1, num2, num3){
    let listaOriginal = [num1, num2, num3];

    if (num1 == num2 && num2 == num3){
        return `Todos los números son iguales!`;
    } else {
        let listaOrdenada = [...listaOriginal].sort((a, b) => b - a); //Método para ordenar lista de números.
        return `${listaOrdenada}`;
    }
};

function numerosMenorMayor(num1, num2, num3){
    let listaOriginal = [num1, num2, num3];

    if (num1 == num2 && num2 == num3){
        return `Todos los números son iguales!`;
    } else {
        let listaOrdenada = [...listaOriginal].sort((a, b) => a - b); //Método para ordenar lista de números.
        return `${listaOrdenada}`;
    }
}