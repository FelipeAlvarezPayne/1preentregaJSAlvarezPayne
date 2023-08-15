function generarNumeroAleatorio(){

    // Se le comenta la usuario lo que vamos a realizar
    alert('Consigna: Elegí 2 números y te mencionare algún número dentro del rango de ambos');
    // Se le pide al usuario el número inicial
    const numeroInicial = parseInt(prompt('Ingrese el número inicial'));
    // Se le pide al usuario el número final
    const numeroFinal = parseInt(prompt('Ingrese el número final'));

    // Observo que esté ingresando números válidos y que el primero sea mayor que el segundo
    if (isNaN(numeroInicial ) || isNaN(numeroFinal)) {
        alert('Por favor ingresa valores numéricos válidos');
        return;
    } else if (numeroFinal < numeroInicial ) {
        alert('El primer número debe ser mayor que el segundo')
        return;
    }

    //Se genera le número aleatorio con los números ingresados
    numeroAleatorio = Math.floor(Math.random() * (numeroFinal - numeroInicial ) + numeroInicial );
    alert('El número generado es ' + numeroAleatorio);

    //Aclaro que los números generados incluyan los números ingresados por el usuario
    for (let i = numeroInicial ; i <= numeroFinal; i++) {
        console.log(i);
    }

}

generarNumeroAleatorio();

