const botao = document.querySelector('button');
const search = document.querySelector('input');

botao.addEventListener('click', e=>{
    botao.classList.toggle('btn-active');
    search.classList.toggle('input-active');

})