//==================================================//
//burger
function togleBurger() {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
}
document.querySelector('.header__burger').addEventListener('click', () => {
    togleBurger();
})
//=============================================//
//modal
function openModal() {
    document.getElementById('modal').classList.add('active');
    document.getElementById('modalContainer').classList.add('active');
    document.querySelector('body').classList.add('lockModal');
}
function closeModal() {
    document.getElementById('modalContainer').classList.remove('active');
    document.getElementById('modal').classList.remove('active');
    document.querySelector('body').classList.remove('lockModal');
}

document.getElementById('modal__open').addEventListener('click', () => {
    openModal();
})
document.getElementById('modal__close').addEventListener('click', () => {
    closeModal();
})
document.getElementById('modal').addEventListener('click', (event) => {
    if (event.target.classList.contains('active', 'modal__close')) {
        closeModal();
    }
})
//=============================================//