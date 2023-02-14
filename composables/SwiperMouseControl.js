const SwiperMouseControl = (swiper) => {
    let slidesIsEnd = false
    initHandle(swiper)
    function initHandle(swiper) {
        swiper.on('reachEnd', function () {
            setTimeout(() => {
                swiper.mousewheel.disable()
                slidesIsEnd = true;
            }, 500)
        })
        swiper.on('reachBeginning', function () {
            setTimeout(() => {
                swiper.mousewheel.disable()
                slidesIsEnd = false;
            }, 500)
        })
        swiper.wrapperEl.addEventListener('wheel', function (e) {
            if(!swiper.isLocked) {
                if (e.deltaY < 0 && slidesIsEnd) {
                    swiper.mousewheel.enable()
                    e.preventDefault();
                }
                if (e.deltaY > 0 && !slidesIsEnd) {
                    swiper.mousewheel.enable()
                    e.preventDefault();
                }
            }
            else {
                swiper.mousewheel.disable()
            }
        })
    }
}
export default SwiperMouseControl