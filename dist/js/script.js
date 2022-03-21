console.log('welcome')

new Swiper('.hero-swiper', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.hero-swiper .swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.hero-swiper .swiper-button-next',
        prevEl: '.hero-swiper .swiper-button-prev',
    },
})

new Swiper('.feedback-swiper', {
    direction: 'horizontal',
    loop: true,
    clickable: true,
    spaceBetween: 60,
    slidesPerView: 2,

    breakpoints: {
        991: {
            spaceBetween: 60,
            slidesPerView: 2,
        },

        768: {
            spaceBetween: 20,

        },
        0: {
            slidesPerView: 1,
        }
    },
})

new Swiper('.gallery-swiper', {
    effect: 'creative',
    creativeEffect: {
        prev: {
            opacity: 0
        },
        next: {
            scale: 1.2,
            opacity: 0
        }
    },
    direction: 'horizontal',
    // loop: true,
    simulateTouch: false,
    navigation: {
        nextEl: '.gallery-swiper .swiper-button-next',
        prevEl: '.gallery-swiper .swiper-button-prev',
    },
})

const scrollTop = document.getElementById('scroll-top');

if (scrollTop) {
    scrollTop.addEventListener('click', function (btn) {
        btn.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    })
}

const header = document.querySelector('.header')

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('visible')
    } else {
        scrollTop.classList.remove('visible')
    }

    if (window.pageYOffset > 200) {
        header.classList.add('header-black')
    } else {
        header.classList.remove('header-black')
    }
})

const burgerBtn = document.querySelector('.header-burger')

if (burgerBtn) {
    const burgerMenu = document.querySelector('.header-menu');
    const body = document.querySelector('body');

    burgerBtn.addEventListener('click', function (btn) {
        this.classList.toggle('open');

        if (this.classList.contains('open')) {
            burgerMenu.classList.add('show');
            body.classList.add('no-scroll');
            header.classList.add('header-dark');
        } else {
            burgerMenu.classList.remove('show');
            body.classList.remove('no-scroll');
            header.classList.remove('header-dark')
        }
    })
}

const calendars = document.querySelectorAll('.booking-calendar')

if(calendars.length) {
    console.log('work')

    const datepicker1 = new AirDatepicker('#airdatepicker-1', {
        minDate: new Date(),
        startDate: new Date(),
    });

    datepicker1.selectDate(new Date())

    const datepicker2 = new AirDatepicker('#airdatepicker-2', {
        minDate: new Date(),
        startDate: new Date(),
    });

    datepicker2.selectDate(new Date())
}


const tabHead = document.querySelectorAll('.tab-head a');

if (tabHead) {
    tabHead.forEach(tabH => {
        tabH.addEventListener('click', function (e) {
            e.preventDefault()

            const id = this.getAttribute('href').replace('#', '')
            const tabContent = document.querySelectorAll('.tab-content > div')


            tabContent.forEach(tabC => {
                tabC.classList.remove('active')
            })

            tabHead.forEach(tabH => {
                tabH.classList.remove('active')
            })

            this.classList.add('active')

            document.getElementById(id).classList.add('active')

            console.log(selectTime)
        })
    })
}

const selectTime = document.querySelectorAll('.tab-content .booking-time span.free')

if (selectTime) {
    selectTime.forEach(time => {

        time.addEventListener('click', function (e) {
            const selectActiveTime = document.querySelectorAll('.tab-content .active .booking-time span.free')

            selectActiveTime.forEach(elem => {
                elem.classList.remove('target')
            })

            this.classList.add('target')
        })
    })
}

const anim = document.querySelectorAll('.anim')

if (anim) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const elem = entry.target
            if(entry.isIntersecting) {
                elem.style.animationDelay = elem.dataset.animDel + 'ms'
                elem.style.animationDuration = elem.dataset.animDur + 'ms'
                elem.style.animationName = elem.dataset.animName
                observer.unobserve(elem)
            }
        })
    }, {threshold: .3})

    if (window.innerWidth > 991) {
        anim.forEach(el => {
            observer.observe(el)
        })
    }
}
