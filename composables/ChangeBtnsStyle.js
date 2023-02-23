const changeBtnsStyle = (e) => {
    const inner = e.currentTarget
    const firstBtn = inner.querySelector('.current--btn-active')
    if (e.target.closest('.no-border-btn')) {
        firstBtn.classList.add('no-border-btn')
        firstBtn.classList.remove('blue-border-btn')
    }
    if (e.target.closest('.grey-border-btn')) {
        firstBtn.classList.add('grey-border-btn')
        firstBtn.classList.remove('blue-border-btn')
    }
    else if (e.target.closest('.dashed-border-btn')) {
        firstBtn.classList.add('no-border-btn')
        firstBtn.classList.remove('blue-border-btn')
    }
    else if (e.target.closest('.blue-border-btn')) {
        firstBtn.classList.add('no-border-btn')
        firstBtn.classList.remove('blue-border-btn')
    }
    else if (!e.target.closest('.blue-border-btn, .no-border-btn')) {
        firstBtn.classList.remove('no-border-btn')
        firstBtn.classList.add('blue-border-btn')
    }
    inner.addEventListener('mouseleave', returnBtnsColor)
    function returnBtnsColor() {
        firstBtn.classList.remove('no-border-btn')
        firstBtn.classList.remove('grey-border-btn')
        firstBtn.classList.add('blue-border-btn')
        inner.removeEventListener('mouseleave', returnBtnsColor)
    }
}
export default changeBtnsStyle