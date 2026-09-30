    function verificar(){
    const numero = Number(document.getElementById('numero').value);
    if (numero %2 == 0){
        console.log('Par');     
    }
    else{
        console.log('Impar');
    }
    }