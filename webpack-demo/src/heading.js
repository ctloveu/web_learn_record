export default () => {
    const element = document.createElement('h2')
    element.textContent = 'Helle Webpack'
    element.addEventListener('click', () => {
        alert('SB,您好呀')
    })
    return element
}