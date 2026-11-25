let iconCart = document.querySelector('.basket');
let closeBtn = document.querySelector('.cartTabbb .closee');
let body = document.querySelector('body');

iconCart.addEventListener('click', () => {
    body.classList.toggle('activTabCart');
})
closeBtn.addEventListener('click', () => {
    body.classList.toggle('activTabCart');
})


