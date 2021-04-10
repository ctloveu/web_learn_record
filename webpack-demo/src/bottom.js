export const testTreeShake = () => {
    console.log(555)
}

export default () => {
    const div = document.createElement('div')
    div.textContent = '我在底部'
    div.addEventListener('click', () => {
        alert('SB,我在底部')
    })
    return div
}