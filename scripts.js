var peso = document.getElementById('peso');
var res = document.getElementById('res');
var img = document.getElementById('img');
var bot = document.getElementById('botao');

function clicar() {
    var pesoValor = parseFloat(peso.value); 
    switch (true) {
        case (pesoValor <= 56.6): 
            res.innerText = 'Abaixo do peso';
            img.innerHTML = '<img src = "imagens/pessoa-magra-p.jpg">'
            document.body.style.background = '#996c5d'
        break

        case (pesoValor >= 56.6 && pesoValor <= 76.2):
            res.innerText = 'Peso normal'
            img.innerHTML = '<img src = "imagens/pessoa-normal-p.jpg">'
            document.body.style.background = '#4a5f59'
        break

        case (pesoValor >= 76.2 && pesoValor <= 91.6):
            res.innerText = 'Sobrepeso'
            img.innerHTML = '<img src = "imagens/pessoa-gorda-p.jpg">'
            document.body.style.background = '#ecad91'
        break

        case (pesoValor >= 91.6 && pesoValor <= 106.7):
            res.innerText = 'Obesidade grau 1'
            img.innerHTML = '<img src = "imagens/pessoa-gorda-p.jpg">'
            document.body.style.background = '#ecad91'
        break

        case (pesoValor >= 106.7 && pesoValor <= 121.8):
            res.innerText = 'Obesidade grau 2'
            img.innerHTML = '<img src = "imagens/pessoa-gorda-p.jpg">'
            document.body.style.background = '#ecad91'
        break

        case (pesoValor = 121.8):
            res.innerText = 'Obesidade grau 3 (MORBITA)'
            img.innerHTML = '<img src = "imagens/pessoa-gorda-p.jpg">'
            document.body.style.background = '#ecad91'
        break

        default:
            res.innerText = 'Peso fora do IMC'
    }
}
