// MENU MOBILE

let btnMenu =  document.getElementById('btn-abrir-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let btnFechar = document.getElementById('btn-fechar')

let cbPortifolio = document.getElementById('cbPortifolio')
let portifolioItens1 = document.getElementById('portifolio-itens1')
let portifolioItens2 = document.getElementById('portifolio-itens2')
let portifolioItens3 = document.getElementById('portifolio-itens3')
let portifolioItens4 = document.getElementById('portifolio-itens4')


btnMenu.addEventListener('click', ()=>{
  menu.classList.add('abrir-menu')
})

cbPortifolio.addEventListener('click', ()=>{
  portifolioItens1.classList.toggle('abrir-portifolio-itens1')
})

cbPortifolio.addEventListener('click', ()=>{
  portifolioItens2.classList.toggle('abrir-portifolio-itens2')
})

cbPortifolio.addEventListener('click', ()=>{
  portifolioItens3.classList.toggle('abrir-portifolio-itens3')
})

cbPortifolio.addEventListener('click', ()=>{
  portifolioItens3.classList.toggle('abrir-portifolio-itens4')
})

overlay.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})

btnFechar.addEventListener('click', ()=>{
  menu.classList.remove('abrir-menu')
})