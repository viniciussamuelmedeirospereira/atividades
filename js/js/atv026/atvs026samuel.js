function verificar() {
    const numero = Number(document.getElementById('numero').value);

    if (numero <= 15) {
        alert('Não pode votar');
    }
    else if (numero == 16 || numero == 17) {
        alert('Voto facultativo');
    }
    else {
        alert('Voto obrigatorio');
    }
}