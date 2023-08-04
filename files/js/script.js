window.addEventListener('DOMContentLoaded', function (event) {
    'use strict';


    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
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


    function getDeviceType() {
        const width = window.innerWidth;

        if (width >= 1024) {
            return 'desktop';
        } else if (width >= 768) {
            return 'tablet';
        } else {
            return 'mobile';
        }
    }

    let deviceType;

    function handleResize() {
        deviceType = getDeviceType();
        console.log('Device type:', deviceType);
        return deviceType;
    }

    handleResize();

    window.addEventListener('resize', handleResize);



    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.7,
        effects: true
    });


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




    let prevScrollY = 0;
    const tagBody = document.body;


    // PRELOADER
    const tlLoader = gsap.timeline();

    tlLoader
        .set('.loader-item', { y: '-100%', opacity: 0 })
        .set('.loader-title', { opacity: 0 })
        .set('.loader', { opacity: 1 })
        .to('.loader-item', {
            y: 0,
            duration: .2,
            stagger: .1,
            opacity: 1,
            stagger: .1,
        })
        .to('.loader-item', {
            y: '100%',
            duration: .2,
            stagger: .1,
        })
        .to('.loader-title', {
            opacity: 1,
            duration: 1,
            scale: 1.2,
        },
            '-=.3'
        )
        .set('.loader-item', {
            y: '-100%',
            opacity: 0,
        })
        .to('.loader-title', {
            opacity: 0,
            duration: 1.5,
            scale: .8,
        })
        .to('.loader', {
            y: '-100%',
            duration: 1,
            opacity: 0.5,
        },
            '-=.3'
        )


    // ANIMATION FOR DESKTOP
    if (deviceType === 'desktop') {

        // HEADER BACKGROUND
        gsap.to('.header-bg-oval', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                end: '+=80',
                scrub: true,
                pin: true,
                // markers: true,
            },
            css: {
                width: 800,
                height: 800,
                borderRadius: '50%',
                transform: 'translateY(-250px)'
            }
        })

        gsap.from('.header-bg', {
            width: '100%',
            height: '100%',
            scrollTrigger: {
                trigger: '.header',
                start: '-50 top',
                end: 'bottom',
                scrub: true,
                // markers: true,
            }
        });


        // HEADER TITLE
        gsap.fromTo('.header-title', {
            scale: 1,
            y: 0,
        }, {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                end: '+=150',
                scrub: true,
                // markers: true,
                duration: 1,
            },
            scale: 0.5,
            y: -50,
        })


        // MENU
        gsap.fromTo('.menu-block-item', {
            x: '-100%',
            y: -25,
            opacity: 0,
        }, {
            x: 0,
            y: 0,
            opacity: 1,
            duration: .22,
            stagger: .12,
        })


        // STORY
        gsap.fromTo('.story-title', {
            y: -100,
            x: 100,
            opacity: 0,
            scale: 5,
        }, {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
                trigger: '#story',
                start: '-650 top',
                end: '+=100',
                scrub: true,
                // markers: true,
            }
        });

        let storyItemsLeft = gsap.utils.toArray('.story-description p')

        storyItemsLeft.forEach(item => {
            gsap.fromTo(item, {
                opacity: 0,
                y: -150,
            }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-500 top',
                    end: '+=150',
                    scrub: true,
                    // markers: true,
                    stagger: .2,
                }
            })
        })

        gsap.fromTo('.story-description .btn', {
            opacity: 0,
            y: -150,
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: '.story-description',
                start: '-500 top',
                end: '+=100',
                scrub: true,
                // markers: true,
            }
        })

        gsap.fromTo('.story-block-image', {
            opacity: 0,
            y: 150,
            scale: 2.5,
        }, {
            opacity: 1,
            y: 50,
            scale: 1,
            scrollTrigger: {
                trigger: '.story',
                start: '-450 top',
                end: '+=150',
                scrub: true,
                // markers: true,
            }
        })

        gsap.fromTo('.story-about-image', {
            y: 300,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.story-block.story-about-block',
                start: '-250 top',
                end: '+=450',
                scrub: true,
                // markers: true,
            }
        })

        gsap.fromTo('.story-about-title-img', {
            rotate: 0,
        }, {
            rotate: 225,
            scrollTrigger: {
                trigger: '.story-about-block',
                start: '-70 top',
                end: 'bottom',
                scrub: true,
                pin: true,
                // markers: true,
            }
        })

        gsap.fromTo('.story-about-block', {
            autoAlpha: 1
        }, {
            autoAlpha: 0,
            scrollTrigger: {
                trigger: '#story',
                start: 'center top',
                end: 'bottom',
                scrub: true,
                // markers: true,
            }
        });

        const storyAboutHeight = document.querySelector('.story-about-block');
        const paragraphs = gsap.utils.toArray('.story-about-text p');

        gsap.to(paragraphs, {
            height: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.story-about-text',
                start: `-${(paragraphs.length - 1) * storyAboutHeight.offsetHeight / paragraphs.length} top`,
                end: () => '+=' + (paragraphs.length - 1) * storyAboutHeight.offsetHeight / (paragraphs.length - 1),
                scrub: true,
                // markers: true,
                onUpdate: self => {
                    const progress = self.progress;
                    const currentIndex = Math.floor(progress * paragraphs.length);

                    paragraphs.forEach((paragraph, index) => {
                        gsap.set(paragraph, {
                            height: index === currentIndex ? 'auto' : 0,
                            opacity: index === currentIndex ? 1 : 0
                        });
                    });
                },
            },
        });

        // gsap.fromTo('.story-certificate', {
        //     height: '120px',
        //     opacity: 1,
        //     bottom: '0px'
        // }, {
        //     height: '0px',
        //     bottom: '120px',
        //     opacity: 0,
        //     scrollTrigger: {
        //         trigger: '.story-certificate',
        //         start: '-300%',
        //         end: '-40%',
        //         scrub: true,
        //     }
        // });


        // FLAVOURS
        const flavoursAboutHeight = document.querySelector('.flavours-about-block');

        gsap.fromTo('.flavours-about-title-img', {
            rotate: 0,
        }, {
            rotate: 180,
            scrollTrigger: {
                trigger: flavoursAboutHeight,
                start: `-${flavoursAboutHeight.offsetHeight / 4 * 3} top`,
                end: 'bottom',
                scrub: true,
                // pin: true,
                // markers: true,
            }
        })

        gsap.fromTo(flavoursAboutHeight, {
            backgroundColor: '#D8F0F2',
        }, {
            backgroundColor: '#FFD1E7',
            scrollTrigger: {
                trigger: flavoursAboutHeight,
                start: '-50 top',
                end: 'bottom',
                scrub: true,
                // pin: true,
                // markers: true,
            }
        })

        gsap.fromTo('#flavours', {
            opacity: 1
        }, {
            opacity: 0,
            scrollTrigger: {
                trigger: '#flavours',
                start: 'bottom',
                end: '110%',
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

        gsap.fromTo('.flavours-product-block', {}, {
            scrollTrigger: {
                trigger: '.scrollTrigger',
                strt: 'top top',
                end: 'bottm',
                scrub: true,
            }
        })

        gsap.fromTo('.flavours-title', {
            y: -80,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.flavours-product-block',
                start: '-250 top',
                end: '+=150',
                scrub: true,
                duration: 1,
                // markers: true,
            }
        });

        let flavoursItemsImg = gsap.utils.toArray('.flavours-item .flavours-img')

        flavoursItemsImg.forEach(item => {
            gsap.fromTo(item, {
                opacity: 0,
                y: -50,
            }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-700',
                    end: '-350',
                    scrub: true,
                    // markers: true,
                }
            })
        })

        let flavoursItemsTitle = gsap.utils.toArray('.flavours-item .flavours-name')

        flavoursItemsTitle.forEach(item => {
            gsap.fromTo(item, {
                opacity: 0,
                x: -50,
            }, {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-850',
                    end: '+=50',
                    scrub: true,
                    // markers: true,
                }
            })
        })

        let flavoursItemsDescription = gsap.utils.toArray('.flavours-item .flavours-description')

        flavoursItemsDescription.forEach((item, index) => {
            const isEven = index % 2 === 0;
            const xValue = isEven ? '100%' : '-100%';

            gsap.fromTo(item, {
                opacity: 0,
                x: xValue,
                y: xValue,
            }, {
                opacity: 1,
                x: 0,
                y: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-750',
                    end: '+=200',
                    scrub: true,
                    // markers: true,
                }
            })
        })


        // WHOSALE
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


        gsap.fromTo('.whosale-title', {
            y: -100,
            x: 100,
            opacity: 0,
            scale: 5,
        }, {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
                trigger: '#whosale',
                start: '-650 top',
                end: '+=100',
                scrub: true,
                // markers: true,
            }
        });

        let whosaleItemsLeft = gsap.utils.toArray('.whosale-description .paragraph')

        whosaleItemsLeft.forEach(item => {
            gsap.fromTo(item, {
                opacity: 0,
                y: -150,
            }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-650 top',
                    end: '+=150',
                    scrub: true,
                    // markers: true,
                    stagger: .2,
                }
            })
        })

        gsap.fromTo('.whosale-button .btn', {
            opacity: 0,
            y: -150,
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: '.whosale',
                start: '-500 top',
                end: '+=100',
                scrub: true,
                // markers: true,
            }
        })

        gsap.fromTo('.whosale-block-image', {
            opacity: 0,
            y: 150,
            scale: 2.5,
        }, {
            opacity: 1,
            y: 50,
            scale: 1,
            scrollTrigger: {
                trigger: '.whosale',
                start: '-450 top',
                end: '+=150',
                scrub: true,
                // markers: true,
            }
        })


        // TESTIMONIALS
        let testimonialItem = gsap.utils.toArray('.splide__track')

        testimonialItem.forEach(item => {
            gsap.fromTo(item, {
                opacity: 0,
                y: '100%',
            }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-850 top',
                    end: '+=250',
                    scrub: true,
                    // markers: true,
                }
            })
        })


        //CONTACT
        gsap.fromTo('.contact', {
            backgroundPosition: 'center 200%',
        }, {
            backgroundPosition: 'center 100%',
            scrollTrigger: {
                trigger: '.contact',
                start: '-400',
                end: '-50',
                scrub: true,
                duration: 2.5,
                // markers: true
            }
        });

        gsap.fromTo('.form', {
            y: 0,
        }, {
            y: 80,
            scrollTrigger: {
                trigger: '.contact',
                start: '-150 top',
                end: '+=200',
                scrub: true,
                duration: 1,
                // markers: true,
            }
        });

    }


    // ANIMATION FOR TABLET AND MOBILE
    if (deviceType === 'tablet') {

        // HEADER BACKGROUND
        gsap.to('.header-bg-oval', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                end: '+=80',
                scrub: true,
                pin: true,
                // markers: true,
            },
            css: {
                width: 600,
                height: 600,
                borderRadius: '50%',
                transform: 'translateY(-250px)'
            }
        })

        gsap.from('.header-bg', {
            width: '100%',
            height: '100%',
            scrollTrigger: {
                trigger: '.header',
                start: '-50 top',
                end: 'bottom',
                scrub: true,
                // markers: true,
            }
        });


        // HEADER TITLE
        gsap.fromTo('.header-title', {
            scale: 1,
            y: 0,
        }, {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                end: '+=150',
                scrub: true,
                // markers: true,
                duration: 1,
            },
            scale: 0.5,
            y: -50,
        })


        // MENU
        gsap.fromTo('.menu-block-item', {
            x: '-100%',
            y: -25,
            opacity: 0,
        }, {
            x: 0,
            y: 0,
            opacity: 1,
            duration: .22,
            stagger: .12,
        })


        // STORY
        gsap.fromTo('.story-title', {
            y: -100,
            x: 100,
            opacity: 0,
            scale: 5,
        }, {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
                trigger: '#story',
                start: '-650 top',
                end: '+=100',
                scrub: true,
                // markers: true,
            }
        });

        let storyItemsLeft = gsap.utils.toArray('.story-description p')

        storyItemsLeft.forEach(item => {
            gsap.fromTo(item, {
                opacity: 0,
                y: -150,
            }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-500 top',
                    end: '+=150',
                    scrub: true,
                    // markers: true,
                    stagger: .2,
                }
            })
        })

        gsap.fromTo('.story-description .btn', {
            opacity: 0,
            y: -150,
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: '.story-description',
                start: '-500 top',
                end: '+=100',
                scrub: true,
                // markers: true,
            }
        })

        gsap.fromTo('.story-block-image', {
            opacity: 0,
            y: 150,
            scale: 2.5,
        }, {
            opacity: 1,
            y: 50,
            scale: 1,
            scrollTrigger: {
                trigger: '.story',
                start: '-450 top',
                end: '+=150',
                scrub: true,
                // markers: true,
            }
        })

        gsap.fromTo('.story-about-image', {
            y: 300,
            x: '-15%',
            opacity: 0
        }, {
            y: 0,
            x: '-25%',
            opacity: 1,
            scrollTrigger: {
                trigger: '.story-block.story-about-block',
                start: '-250 top',
                end: '+=450',
                scrub: true,
                // markers: true,
            }
        })

        gsap.fromTo('.story-about-title-img', {
            rotate: 0,
        }, {
            rotate: 225,
            scrollTrigger: {
                trigger: '.story-about-block',
                start: '-70 top',
                end: 'bottom',
                scrub: true,
                pin: true,
                // markers: true,
            }
        })

        gsap.fromTo('.story-about-block', {
            autoAlpha: 1
        }, {
            autoAlpha: 0,
            scrollTrigger: {
                trigger: '#story',
                start: 'center top',
                end: 'bottom',
                scrub: true,
                // markers: true,
            }
        });

        const storyAboutHeight = document.querySelector('.story-about-block');
        const paragraphs = gsap.utils.toArray('.story-about-text p');

        gsap.to(paragraphs, {
            height: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.story-about-text',
                start: `-${(paragraphs.length - 1) * storyAboutHeight.offsetHeight / paragraphs.length} top`,
                end: () => '+=' + (paragraphs.length - 1) * storyAboutHeight.offsetHeight / (paragraphs.length - 1),
                scrub: true,
                // markers: true,
                onUpdate: self => {
                    const progress = self.progress;
                    const currentIndex = Math.floor(progress * paragraphs.length);

                    paragraphs.forEach((paragraph, index) => {
                        gsap.set(paragraph, {
                            height: index === currentIndex ? 'auto' : 0,
                            opacity: index === currentIndex ? 1 : 0
                        });
                    });
                },
            },
        });


        // FLAVOURS
        const flavoursAboutHeight = document.querySelector('.flavours-about-block');

        gsap.fromTo('.flavours-about-title-img', {
            rotate: 0,
        }, {
            rotate: 180,
            scrollTrigger: {
                trigger: flavoursAboutHeight,
                start: `-${flavoursAboutHeight.offsetHeight / 4 * 3} top`,
                end: 'bottom',
                scrub: true,
                // pin: true,
                // markers: true,
            }
        })

        gsap.fromTo('.flavours-about', {
            x: 0,
        }, {
            x: '-45%',
            scrollTrigger: {
                trigger: flavoursAboutHeight,
                start: `-${flavoursAboutHeight.offsetHeight / 4 * 3} top`,
                end: 'bottom',
                scrub: true,
                duration: 1,
                // markers: true,
            }
        });

        gsap.fromTo(flavoursAboutHeight, {
            backgroundColor: '#D8F0F2',
        }, {
            backgroundColor: '#FFD1E7',
            scrollTrigger: {
                trigger: flavoursAboutHeight,
                start: '-50 top',
                end: 'bottom',
                scrub: true,
                // pin: true,
                // markers: true,
            }
        })

        gsap.fromTo('#flavours', {
            opacity: 1
        }, {
            opacity: 0,
            scrollTrigger: {
                trigger: '#flavours',
                start: 'bottom',
                end: '110%',
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

        gsap.fromTo('.flavours-product-block', {}, {
            scrollTrigger: {
                trigger: '.scrollTrigger',
                strt: 'top top',
                end: 'bottm',
                scrub: true,
            }
        })

        gsap.fromTo('.flavours-title', {
            y: -80,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.flavours-product-block',
                start: '-250 top',
                end: '+=150',
                scrub: true,
                duration: 1,
                // markers: true,
            }
        });

        let flavoursItemsImg = gsap.utils.toArray('.flavours-item .flavours-img')

        flavoursItemsImg.forEach(item => {
            gsap.fromTo(item, {
                opacity: 0,
                y: -50,
            }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-700',
                    end: '-350',
                    scrub: true,
                    // markers: true,
                }
            })
        })

        let flavoursItemsTitle = gsap.utils.toArray('.flavours-item .flavours-name')

        flavoursItemsTitle.forEach(item => {
            gsap.fromTo(item, {
                opacity: 0,
                x: -50,
            }, {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-850',
                    end: '+=50',
                    scrub: true,
                    // markers: true,
                }
            })
        })

        let flavoursItemsDescription = gsap.utils.toArray('.flavours-item .flavours-description')

        flavoursItemsDescription.forEach((item, index) => {
            const isEven = index % 2 === 0;
            const xValue = isEven ? '100%' : '-100%';

            gsap.fromTo(item, {
                opacity: 0,
                x: xValue,
                y: xValue,
            }, {
                opacity: 1,
                x: 0,
                y: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-750',
                    end: '+=200',
                    scrub: true,
                    // markers: true,
                }
            })
        })


        // WHOSALE
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


        gsap.fromTo('.whosale-title', {
            y: -100,
            x: 100,
            opacity: 0,
            scale: 5,
        }, {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
                trigger: '#whosale',
                start: '-650 top',
                end: '+=100',
                scrub: true,
                // markers: true,
            }
        });

        let whosaleItemsLeft = gsap.utils.toArray('.whosale-description .paragraph')

        whosaleItemsLeft.forEach(item => {
            gsap.fromTo(item, {
                opacity: 0,
                y: -150,
            }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-650 top',
                    end: '+=150',
                    scrub: true,
                    // markers: true,
                    stagger: .2,
                }
            })
        })

        gsap.fromTo('.whosale-button .btn', {
            opacity: 0,
            y: -150,
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: '.whosale',
                start: '-500 top',
                end: '+=100',
                scrub: true,
                // markers: true,
            }
        })

        gsap.fromTo('.whosale-block-image', {
            opacity: 0,
            y: 150,
            scale: 2.5,
        }, {
            opacity: 1,
            y: 50,
            scale: 1,
            scrollTrigger: {
                trigger: '.whosale',
                start: '-450 top',
                end: '+=150',
                scrub: true,
                // markers: true,
            }
        })


        // TESTIMONIALS
        let testimonialItem = gsap.utils.toArray('.splide__track')

        testimonialItem.forEach(item => {
            gsap.fromTo(item, {
                opacity: 0,
                y: '100%',
            }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-850 top',
                    end: '+=250',
                    scrub: true,
                    // markers: true,
                }
            })
        })


        //CONTACT
        gsap.fromTo('.contact', {
            backgroundPosition: 'center 200%',
        }, {
            backgroundPosition: 'center 100%',
            scrollTrigger: {
                trigger: '.contact',
                start: '-400',
                end: '-50',
                scrub: true,
                duration: 2.5,
                // markers: true
            }
        });

        gsap.fromTo('.form', {
            y: 0,
        }, {
            y: 80,
            scrollTrigger: {
                trigger: '.contact',
                start: '-150 top',
                end: '+=200',
                scrub: true,
                duration: 1,
                // markers: true,
            }
        });

    }

    if (deviceType === 'mobile') {

        // HEADER BACKGROUND
        gsap.to('.header-bg-oval', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                end: '+=100',
                scrub: true,
                // markers: true,
            },
            css: {
                width: 'calc(100% - calc(1vw + 1vh) * 4)',
                height: 600,
                marginLeft: 'calc((1vw + 1vh) * 2)',
                marginRight: 'calc((1vw + 1vh) * 2)',
                borderRadius: 250,
                transform: 'translateY(-100px)'
            }
        })

        gsap.from('.header-bg', {
            width: '100%',
            height: '100%',
            scrollTrigger: {
                trigger: '.header',
                start: '-100 top',
                end: 'center',
                scrub: true,
                // markers: true,
            }
        });


        // HEADER TITLE
        gsap.fromTo('.header-title', {
            scale: .95,
            transform: 'translateY(0px)'
        }, {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                end: '+=220',
                scrub: true,
                // markers: true,
                duration: 1,
            },
            scale: 1.1,
            transform: 'translateY(-20px)'
        })


        // STORY
        gsap.fromTo('.story-title', {
            y: -100,
            x: '50%',
            opacity: 0,
            scale: 5,
        }, {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
                trigger: '#story',
                start: '-250 top',
                end: '+=100',
                scrub: false,
                // markers: true,
            }
        });

        let storyItemsLeft = gsap.utils.toArray('.story-description p')

        storyItemsLeft.forEach(item => {
            gsap.fromTo(item, {
                opacity: 0,
                x: '-120%',
            }, {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-300 top',
                    end: '+=100',
                    scrub: false,
                    // markers: true,
                    stagger: .2,
                }
            })
        })

        gsap.fromTo('.story-description .btn', {
            opacity: 0,
            y: -150,
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: '.story',
                start: '-100 top',
                end: '+=100',
                scrub: false,
                // markers: true,
            }
        })

        gsap.fromTo('.story-block-image', {
            opacity: 0,
            y: 150,
            scale: 2.5,
        }, {
            opacity: 1,
            y: 30,
            scale: 1,
            scrollTrigger: {
                trigger: '.story',
                start: 'top top',
                end: 'center',
                scrub: false,
                // markers: true,
            }
        })

        gsap.fromTo('.story-about-image', {
            y: 100,
            opacity: 0,
            scale: .7,
        }, {
            y: 0,
            opacity: 1,
            scale: .7,
            scrollTrigger: {
                trigger: '.story-block.story-about-block',
                start: '-600 top',
                end: '+=150',
                scrub: true,
                // markers: true,
            }
        })

        gsap.fromTo('.story-about-title-img', {
            rotate: 0,
        }, {
            rotate: 225,
            scrollTrigger: {
                trigger: '.story-about-block',
                start: '-100 top',
                end: 'bottom',
                scrub: true,
                // pin: true,
                // markers: true,
            }
        })

        gsap.fromTo('.story-about-block', {
            autoAlpha: 1
        }, {
            autoAlpha: 0,
            scrollTrigger: {
                trigger: '#story',
                start: '75% top',
                end: '120%',
                scrub: true,
                // markers: true,
            }
        });

        const paragraphs = gsap.utils.toArray('.story-about-text p');

        paragraphs.forEach(item => {
            gsap.fromTo(item, {
                opacity: 0,
                x: '-120%',
            }, {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-600 top',
                    end: '+=50',
                    scrub: false,
                    // markers: true,
                    stagger: .2,
                }
            })
        })


        // FLAVOURS
        const flavoursAboutHeight = document.querySelector('.flavours-about-block');

        gsap.fromTo('.flavours-about-title-img', {
            rotate: 0,
            // scale: .75,
        }, {
            rotate: 180,
            // scale: .75,
            scrollTrigger: {
                trigger: flavoursAboutHeight,
                start: `-${flavoursAboutHeight.offsetHeight / 4 * 3} top`,
                end: 'bottom',
                scrub: true,
                // pin: true,
                // markers: true,
            }
        })

        // gsap.fromTo('.flavours-about', {
        //     // x: 0,
        // }, {
        //     // x: '-50%',
        //     scrollTrigger: {
        //         trigger: flavoursAboutHeight,
        //         start: `-${flavoursAboutHeight.offsetHeight / 4 * 3} top`,
        //         end: 'bottom',
        //         scrub: true,
        //         duration: 1,
        //         // markers: true,
        //     }
        // });

        // gsap.fromTo('.flavours-about-image', {
        //     y: 100,
        //     opacity: 0,
        //     // scale: .75,
        // }, {
        //     y: 0,
        //     opacity: 1,
        //     // scale: .75,
        //     scrollTrigger: {
        //         trigger: '.flavours-about-block',
        //         start: '-500 top',
        //         end: '+=300',
        //         scrub: true,
        //         // markers: true,
        //     }
        // })

        gsap.fromTo(flavoursAboutHeight, {
            backgroundColor: '#D8F0F2',
        }, {
            backgroundColor: '#FFD1E7',
            scrollTrigger: {
                trigger: flavoursAboutHeight,
                start: '-100 top',
                end: 'bottom',
                scrub: true,
                // pin: true,
                // markers: true,
            }
        })

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

        // gsap.fromTo('.flavours-product-block', {}, {
        //     scrollTrigger: {
        //         trigger: '.scrollTrigger',
        //         strt: 'top top',
        //         end: 'bottm',
        //         scrub: true,
        //     }
        // })

        // gsap.fromTo('.flavours-title', {
        //     y: -80,
        //     opacity: 0,
        // }, {
        //     y: 0,
        //     opacity: 1,
        //     scrollTrigger: {
        //         trigger: '.flavours-product-block',
        //         start: '-250 top',
        //         end: '+=150',
        //         scrub: true,
        //         duration: 1,
        //         // markers: true,
        //     }
        // });

        // let flavoursItemsImg = gsap.utils.toArray('.flavours-item .flavours-img')

        // flavoursItemsImg.forEach(item => {
        //     gsap.fromTo(item, {
        //         opacity: 0,
        //         y: -50,
        //     }, {
        //         opacity: 1,
        //         y: 0,
        //         scrollTrigger: {
        //             trigger: item,
        //             start: '-700',
        //             end: '-350',
        //             scrub: true,
        //             // markers: true,
        //         }
        //     })
        // })

        // let flavoursItemsTitle = gsap.utils.toArray('.flavours-item .flavours-name')

        // flavoursItemsTitle.forEach(item => {
        //     gsap.fromTo(item, {
        //         opacity: 0,
        //         x: -50,
        //     }, {
        //         opacity: 1,
        //         x: 0,
        //         scrollTrigger: {
        //             trigger: item,
        //             start: '-850',
        //             end: '+=50',
        //             scrub: true,
        //             // markers: true,
        //         }
        //     })
        // })

        // let flavoursItemsDescription = gsap.utils.toArray('.flavours-item .flavours-description')

        // flavoursItemsDescription.forEach((item, index) => {
        //     const isEven = index % 2 === 0;
        //     const xValue = isEven ? '100%' : '-100%';

        //     gsap.fromTo(item, {
        //         opacity: 0,
        //         x: xValue,
        //         y: xValue,
        //     }, {
        //         opacity: 1,
        //         x: 0,
        //         y: 0,
        //         scrollTrigger: {
        //             trigger: item,
        //             start: '-750',
        //             end: '+=200',
        //             scrub: true,
        //             // markers: true,
        //         }
        //     })
        // })


        // WHOSALE
        // gsap.fromTo('#whosale', {
        //     opacity: 1
        // }, {
        //     opacity: 0,
        //     scrollTrigger: {
        //         trigger: '#whosale',
        //         start: 'center',
        //         end: 'bottom',
        //         scrub: true
        //     }
        // });


        // gsap.fromTo('.whosale-title', {
        //     y: -100,
        //     x: 100,
        //     opacity: 0,
        //     scale: 5,
        // }, {
        //     y: 0,
        //     x: 0,
        //     opacity: 1,
        //     scale: 1,
        //     scrollTrigger: {
        //         trigger: '#whosale',
        //         start: '-650 top',
        //         end: '+=100',
        //         scrub: true,
        //         // markers: true,
        //     }
        // });

        // let whosaleItemsLeft = gsap.utils.toArray('.whosale-description .paragraph')

        // whosaleItemsLeft.forEach(item => {
        //     gsap.fromTo(item, {
        //         opacity: 0,
        //         y: -150,
        //     }, {
        //         opacity: 1,
        //         y: 0,
        //         scrollTrigger: {
        //             trigger: item,
        //             start: '-650 top',
        //             end: '+=150',
        //             scrub: true,
        //             // markers: true,
        //             stagger: .2,
        //         }
        //     })
        // })

        // gsap.fromTo('.whosale-button .btn', {
        //     opacity: 0,
        //     y: -150,
        // }, {
        //     opacity: 1,
        //     y: 0,
        //     scrollTrigger: {
        //         trigger: '.whosale',
        //         start: '-500 top',
        //         end: '+=100',
        //         scrub: true,
        //         // markers: true,
        //     }
        // })

        // gsap.fromTo('.whosale-block-image', {
        //     opacity: 0,
        //     y: 150,
        //     scale: 2.5,
        // }, {
        //     opacity: 1,
        //     y: 50,
        //     scale: 1,
        //     scrollTrigger: {
        //         trigger: '.whosale',
        //         start: '-450 top',
        //         end: '+=150',
        //         scrub: true,
        //         // markers: true,
        //     }
        // })


        // TESTIMONIALS
        // let testimonialItem = gsap.utils.toArray('.splide__track')

        // testimonialItem.forEach(item => {
        //     gsap.fromTo(item, {
        //         opacity: 0,
        //         y: '100%',
        //     }, {
        //         opacity: 1,
        //         y: 0,
        //         scrollTrigger: {
        //             trigger: item,
        //             start: '-850 top',
        //             end: '+=250',
        //             scrub: true,
        //             // markers: true,
        //         }
        //     })
        // })


        // //CONTACT
        // gsap.fromTo('.contact', {
        //     backgroundPosition: 'center 200%',
        // }, {
        //     backgroundPosition: 'center bottom',
        //     scrollTrigger: {
        //         trigger: '.contact',
        //         start: '-400',
        //         end: '-50',
        //         scrub: true,
        //         duration: 2.5,
        //         // markers: true
        //     }
        // });

        // gsap.fromTo('.form', {
        //     y: 0,
        // }, {
        //     y: 80,
        //     scrollTrigger: {
        //         trigger: '.contact',
        //         start: '-150 top',
        //         end: '+=200',
        //         scrub: true,
        //         duration: 1,
        //         // markers: true,
        //     }
        // });

    }




    // HAMBURGER MENU AND MENU
    var body = document.querySelector('body');
    var hamburger = document.querySelector('#hamburger');
    var menuWrapper = document.querySelector('#menu-wrapper');
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
            body.classList.remove('open-modal');
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

    hamburger.addEventListener('click', function () {
        body.classList.add('open-modal');
    });

    body.addEventListener('click', function (event) {
        if (event.target.classList.contains('close-menu')) {
            body.classList.remove('open-modal');
            removeModalBackdrop();
        }
    });

    var menuWrapper = document.getElementById('menu-wrapper');
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('menu-block-item') && menuWrapper.contains(event.target)) {
            removeModalBackdrop();
        }
    });

});