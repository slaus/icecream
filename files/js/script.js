window.addEventListener('DOMContentLoaded', function (event) {
    'use strict';

    const flavoursButton = document.querySelectorAll('.flavours-name');

    const closeDescription = () => {
        flavoursButton.forEach((item) => {
            item.closest('.flavours-btn').classList.remove('active');
        });
    }

    flavoursButton.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            closeDescription();

            item.closest('.flavours-btn').classList.add('active');
        });
    });

    const closeFlavoursButton = document.querySelectorAll('.flavours-close');

    closeFlavoursButton.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            closeDescription();
        });
    });

    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('.menu-block .menu-block-link');

    window.addEventListener('scroll', function () {
        var currentSection = '';

        sections.forEach(function (section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.offsetHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
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