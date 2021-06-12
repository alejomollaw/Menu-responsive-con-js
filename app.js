addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.nav__button-responsive')
    if (button) {
        button.addEventListener('click', () => {
            const nav__list = document.querySelector('.nav__list')
            nav__list.classList.toggle('show')
        })
    }
})