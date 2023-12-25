

const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')


const pulo = () => {
    mario.classList.add('pulo') 
    
    setTimeout(() => {
        mario.classList.remove('pulo')
    },500)
} 

const marioBateu = setInterval(() => {
    const obstaculoPosicao  = pipe.offsetLeft
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px','')
    console.log(marioPosicao ) 
    if (obstaculoPosicao <= 120 && obstaculoPosicao < 0 && marioPosicao < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${obstaculoPosicao}px`

        mario.style.animation = 'none'
        mario.style.left = `${marioPosicao}px`

        mario.src = './imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(marioBateu)
    }
}, 10)

document.addEventListener('keydown', pulo)