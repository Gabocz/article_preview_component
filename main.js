const shareIcon = document.getElementById('shareIcon')
const popUp = document.getElementById('popUp')
const card = document.querySelector('.card')


shareIcon.addEventListener('click', () => {
    popUp.classList.toggle('visible')
    shareIcon.classList.toggle('active')
})


