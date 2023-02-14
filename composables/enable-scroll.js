const EnableScroll =  () => {
    if(document.querySelector('body').classList.contains('no-scroll')) {
        let scrollY = -document.querySelector('body').style.top.replace(/[a-z]/gi, '')
        document.querySelector('body').classList.remove('no-scroll')
        document.querySelector('body').style.removeProperty('top')
        window.scroll(0, scrollY)
    }
}
export default EnableScroll