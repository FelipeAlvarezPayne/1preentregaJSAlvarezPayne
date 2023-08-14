function generarNumeroAleatorio(){
    // Se le comenta la usuario lo que vamos a realizar
    alert('Consigna: Elegí 2 números y te indicaré algun numero dentro del rango de ambos');
    // Se le pide al usuario el primer número
    const primerNumero = parseInt(prompt('Ingrese el primer número'));
    // Se le pide al usuario el segundo número
    const segundoNumero = parseInt(prompt('Ingrese el segundo número'));

    // Se coteja que este ingresando números válidos y que el primero sea mayor que el segundo
    if (isNaN(primerNumero) || isNaN(segundoNumero)) {
        alert('Por favor ingresa valores numéricos válidos');
        return;
    } else if (segundoNumero < primerNumero) {
        alert('El primer número debe ser mayor que el segundo')
        return
    }

    //Se genera le número aleatorio con los números ingresados
    numeroAleatorio = Math.floor(Math.random() * (segundoNumero - primerNumero) + primerNumero);
    alert('El número generado es ' + numeroAleatorio);

    //Esto lo generé para testear que los números generados incluyan los números ingresados por el usuario
    for (let i = primerNumero; i <= segundoNumero; i++) {
        console.log(i);
    }

}

generarNumeroAleatorio();