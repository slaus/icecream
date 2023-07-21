window.addEventListener('DOMContentLoaded', function (event) {
    'use strict';

    const isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            );
        },
    }

    if (isMobile.any()) {
        this.document.body.classList.add('touch');
    } else {
        this.document.body.classList.add('desktop');
    }


    var splide = new Splide('.splide', {
        updateOnMove: true,
        type: 'loop',
        perPage: 4,
        perMove: 1,
        interval: 7000,
        breakpoints: {
            1199: {
                perPage: 3,
            },
            991: {
                perPage: 2,
            },
            767: {
                perPage: 1,
            }
        },
        autoplay: true,
        arrows: false,
        pagination: false,
        drag: true,
        // wheel: true,
        // direction: 'ttb'
    });

    splide.mount();



    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.7,
        effects: true
    });

    let prevScrollY = 0;
    const tagBody = document.body;

    gsap.fromTo('#header', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '#header',
            start: '60%',
            end: '120%',
            scrub: true,
            onUpdate: (self) => {
                const scrollY = self.progress;
                if (scrollY < prevScrollY) {
                    tagBody.style.backgroundColor = '#d8f0f2';
                } else {
                    tagBody.style.backgroundColor = '#d8f0f2';
                }
                prevScrollY = scrollY;
            }
        }
    });

    gsap.fromTo('#story', { 
        opacity: 1 
    }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '#story',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    });

    let storyItemsLeft = gsap.utils.toArray('.story .story-block-text')

    storyItemsLeft.forEach(item => {
        gsap.fromTo(item, {
            opacity: 0,
            x: -150
        }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-650',
                end: '-200',
                scrub: true
            }
        })
    })

    let storyItemsRight = gsap.utils.toArray('.story .story-block-image')

    storyItemsRight.forEach(item => {
        gsap.fromTo(item, {
            opacity: 0,
            width: '150%',
            x: 200,
            left: '300%',
        }, {
            opacity: 1,
            width: '100%',
            x: 0,
            left: '100%',
            scrollTrigger: {
                trigger: item,
                start: '-800',
                end: '-200',
                scrub: true
            }
        })
    })

    gsap.fromTo('.story-certificate', { 
        height: '120px', 
        opacity: 1, 
        bottom: '0px' 
    }, {
        height: '0px',
        bottom: '120px',
        opacity: 0,
        scrollTrigger: {
            trigger: '.story-certificate',
            start: '-300%',
            end: '-40%',
            scrub: true,
        }
    });

    // gsap.fromTo('#flavours', { 
    //     opacity: 1 
    // }, {
    //     opacity: 0,
    //     scrollTrigger: {
    //         trigger: '#flavours',
    //         start: 'bottom',
    //         end: '110%',
    //         scrub: true,
    //         onUpdate: (self) => {
    //             const scrollY = self.progress;
    //             if (scrollY < prevScrollY) {
    //                 tagBody.style.backgroundColor = '#FEDDEE';
    //             } else {
    //                 tagBody.style.backgroundColor = '#FEDDEE';
    //             }
    //             prevScrollY = scrollY;
    //         }
    //     }
    // });

    let flavoursItemsFirst = gsap.utils.toArray('.flavours .flavours-item:nth-child(3n+1)')

    flavoursItemsFirst.forEach(item => {
        gsap.fromTo(item, {
            opacity: 0,
            x: -100,
        }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-700',
                end: '-350',
                scrub: true
            }
        })
    })

    let flavoursItemsSecond = gsap.utils.toArray('.flavours .flavours-item:nth-child(3n+2)')

    flavoursItemsSecond.forEach(item => {
        gsap.fromTo(item, {
            opacity: 0,
            x: 100,
        }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-750',
                end: '-400',
                scrub: true
            }
        })
    })

    let flavoursItemsThird = gsap.utils.toArray('.flavours .flavours-item:nth-child(3n+3)')

    flavoursItemsThird.forEach(item => {
        gsap.fromTo(item, {
            opacity: 0,
            x: 100,
        }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-500',
                end: '-300',
                scrub: true
            }
        })
    })

    

    gsap.fromTo('#whosale', { 
        opacity: 1 
    }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '#whosale',
            start: 'center',
            end: 'bottom',
            scrub: true
        }
    });

    let whosaleItemsLeft = gsap.utils.toArray('.whosale .whosale-block-text')

    whosaleItemsLeft.forEach(item => {
        gsap.fromTo(item, {
            opacity: 0,
            x: -50
        }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-650',
                end: '-100',
                scrub: true
            }
        })
    })

    let whosaleItemsRight = gsap.utils.toArray('.whosale .whosale-block-image')

    whosaleItemsRight.forEach(item => {
        gsap.fromTo(item, {
            opacity: 0,
            x: 200
        }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-800',
                end: '-200',
                scrub: true
            }
        })
    })

    gsap.fromTo('#flavours', { 
        opacity: 1 
    }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '#flavours',
            start: 'center',
            end: 'bottom',
            scrub: true,
            onUpdate: (self) => {
                const scrollY = self.progress;
                if (scrollY < prevScrollY) {
                    tagBody.style.backgroundColor = '#FEDDEE';
                } else {
                    tagBody.style.backgroundColor = '#FEDDEE';
                }
                prevScrollY = scrollY;
            }
        }
    });


    gsap.fromTo('#contact', { 
        backgroundPosition: 'center 150%',
    }, {
        backgroundPosition: 'center 100%',
        scrollTrigger: {
            trigger: '#contact',
            start: '-300',
            end: '100',
            scrub: true
        }
    });

    // }







    

    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('.menu-block .menu-block-link');

    window.addEventListener('scroll', function () {
        var currentSection = '';
        var scrollPosition = window.pageYOffset;
        var windowHeight = window.innerHeight;
      
        sections.forEach(function (section) {
          var sectionTop = section.offsetTop;
          var sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop - windowHeight / 2) {
            currentSection = section.getAttribute('id');
          }
        });
      
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
          }
        });
      });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var targetSection = document.querySelector(link.getAttribute('href'));
            var offsetTop = targetSection.offsetTop;

            setTimeout(function () {
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }, 100);
        });
    });


    var body = document.querySelector('body');
    var hamburger = document.querySelector('#hamburger');
    var modalBackdrop = document.querySelector('.modal-backdrop');
    var closeMenu = document.querySelector('.close-menu');

    hamburger.addEventListener('click', function () {
        body.classList.add('open-modal');
        createModalBackdrop();
    });

    closeMenu.addEventListener('click', function () {
        body.classList.remove('open-modal');
        removeModalBackdrop();
    });

    function createModalBackdrop() {
        if (!modalBackdrop) {
            modalBackdrop = document.createElement('div');
            modalBackdrop.classList.add('modal-backdrop');
            document.body.appendChild(modalBackdrop);
        }
    }

    function removeModalBackdrop() {
        if (modalBackdrop) {
            document.body.removeChild(modalBackdrop);
            modalBackdrop = null;
        }
    }




    const testimonialBlock = (trigger) => {
        try {
            const block = document.querySelector(trigger),
                liTags = block.querySelectorAll('.carousel-indicators li'),
                messageTags = block.querySelectorAll('.item'),
                autoTimer = block.getAttribute('data-interval');

            let paused = false,
                slideIndex = 0;

            liTags.forEach((item, key) => {
                item.addEventListener('click', () => {
                    removeActive(liTags);
                    removeActive(messageTags);

                    slideIndex = key;

                    messageTags[slideIndex].classList.add('active');
                    item.classList.add('active');
                });
            });

            function showSlides(key) {
                if (key > messageTags.length - 1) {
                    slideIndex = 0;
                }

                if (key < 0) {
                    slideIndex = messageTags.length - 1;
                }

                messageTags.forEach((item, key) => {
                    removeActive(liTags);
                    removeActive(messageTags);

                    liTags[slideIndex].classList.add('active');
                    messageTags[slideIndex].classList.add('active');
                });
            }

            showSlides(slideIndex);

            function removeActive(tag) {
                tag.forEach(item => {
                    item.classList.remove('active');
                });
            }

            function plusSlides(n) {
                showSlides(slideIndex += n);
            }

            function activateAnimation() {
                paused = setInterval(function () {
                    plusSlides(1);
                }, autoTimer);
            }

            activateAnimation();

            block.addEventListener('mouseenter', () => {
                clearInterval(paused);
            });

            block.addEventListener('mouseleave', () => {
                activateAnimation();
            });
        } catch (e) { }
    }

    testimonialBlock('#testimonial-block');
});