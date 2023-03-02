const changeBtnsStyle = (e) => {
    const inner = e.currentTarget
    const firstBtn = inner.querySelector('.current--btn-active')
    const hoverBtns = inner.querySelectorAll('.btn--hover')
    if(e.target.closest('.btn--hover') && !e.target.closest('.current--btn-active')) {
        inner.classList.add('mouse-entered')
    }
    else {
        inner.classList.remove('mouse-entered')
    }
    inner.addEventListener('mouseleave', returnBtnsColor)
    function returnBtnsColor() {
        inner.classList.remove('mouse-entered')
        inner.removeEventListener('mouseleave', returnBtnsColor)
    }
    /* e.stopPropagation();
    const inner = e.currentTarget
    let children = inner.querySelectorAll('.no-border-btn, .grey-border-btn, .dashed-border-btn, .blue-border-btn')
    const firstBtn = inner.querySelector('.current--btn-active')
    let btnsMainClass;
    for (const child of children) {
        if(child.classList.contains('no-border-btn')) {
            btnsMainClass = 'no-border-btn'
        }
        else if(child.classList.contains('grey-border-btn')) {
            btnsMainClass = 'grey-border-btn'
        }
        else if(child.classList.contains('dashed-border-btn')) {
            btnsMainClass = 'dashed-border-btn'
        }
    }
    if (e.target.closest('.no-border-btn')) {
        for (const child of children) {
            child.classList.add('no-border-btn')
            child.classList.remove('blue-border-btn')
        }
        firstBtn.classList.add('no-border-btn')
        firstBtn.classList.remove('blue-border-btn')
        e.target.closest('.no-border-btn').classList.add('blue-border-btn')
        e.target.closest('.blue-border-btn').classList.remove('no-border-btn')
    }
    else if (e.target.closest('.grey-border-btn')) {
        for (const child of children) {
            child.classList.add('grey-border-btn')
            child.classList.remove('blue-border-btn')
        }
        e.target.closest('.grey-border-btn').classList.add('blue-border-btn')
        e.target.closest('.blue-border-btn').classList.remove('grey-border-btn')
        firstBtn.classList.add('grey-border-btn')
        firstBtn.classList.remove('blue-border-btn')
    }
    else if (e.target.closest('.dashed-border-btn')) {
        firstBtn.classList.add('no-border-btn')
        firstBtn.classList.remove('blue-border-btn')
    }
    else if (!e.target.closest('.blue-border-btn, .no-border-btn, .grey-border-btn')) {
        if (btnsMainClass === 'no-border-btn') {
            for (const child of children) {
                child.classList.add('no-border-btn')
                child.classList.remove('blue-border-btn')
            }
        }
        else if (btnsMainClass === 'grey-border-btn') {
            for (const child of children) {
                child.classList.add('grey-border-btn')
                child.classList.remove('blue-border-btn')
            }
        }
        firstBtn.classList.remove('no-border-btn')
        firstBtn.classList.remove('grey-border-btn')
        firstBtn.classList.add('blue-border-btn')
    }
    inner.addEventListener('mouseleave', returnBtnsColor)
    function returnBtnsColor() {
        if (btnsMainClass === 'no-border-btn') {
            for (const child of children) {
                child.classList.add('no-border-btn')
                child.classList.remove('blue-border-btn')
            }
        }
        else if (btnsMainClass === 'grey-border-btn') {
            for (const child of children) {
                child.classList.add('grey-border-btn')
                child.classList.remove('blue-border-btn')
            }
        }
        firstBtn.classList.remove('no-border-btn')
        firstBtn.classList.remove('grey-border-btn')
        firstBtn.classList.add('blue-border-btn')
        inner.removeEventListener('mouseleave', returnBtnsColor)
    } */
}
export default changeBtnsStyle