var carro = document.querySelector('.tractor')
var fondo = document.querySelector('.padre')
var llanta1 = document.querySelector('.wheels')
var llants2 = document.querySelector('.wheels2')
var polvo = document.querySelector('.sprites')



carro.addEventListener('click', animaciones)

function animaciones(){
    fondo.classList.add('carretera')
    llanta1.classList.add('movimiento_llantas')
    llants2.classList.add('movimiento_llantas')
    polvo.classList.remove('oculto')
    
}