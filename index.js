window.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('#nav-toggle')
    const sidebar = document.getElementById('sidebar')
    const close = document.querySelector('#close-button')

    navToggle.addEventListener('click', () => {
        sidebar.setAttribute('class', 'sidebar show')
    })

    close.addEventListener('click', () => {
        sidebar.classList.toggle('show')
    })
})