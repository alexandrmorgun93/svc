;
(() => {
    'use strict';

    /*variables*/


    /*parallax*/
    const Parallax = require('scroll-parallax');
    let p = new Parallax('.parallax', {
        intensity: 20
    }).init()


    const btn = document.querySelector('.btn_mobile');
    const nav = document.querySelector('.menu_nuv ');

    function menuNav(btn, nav) {
        btn.addEventListener('click', function () {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        })
    }

    menuNav(btn, nav);


    // BEGIN PROJECT SLIDER
    let slideImg = document.querySelectorAll('.img_slide');
    let slideText = document.querySelectorAll('.slide_text');
    let prevSlide = document.querySelector('.prev_slide');
    let nextSlide = document.querySelector('.next_slide');
    let yak = 0;


    function lastElem(arr, int, boll) {
        if (boll) {
            return (arr[int + 1]) ? int + 1 : 0;
        } else {
            return (arr[int - 1]) ? int - 1 : arr.length - 1;
        }
    }

    function slide(boll) {
        for (let i = 0; i < slideImg.length; i++) {
            slideImg[i].classList.remove('active');
        }
        for (let i = 0; i < slideText.length; i++) {
            slideText[i].classList.remove('active');
        }
        console.log(yak);

        yak = lastElem(slideImg, yak, boll);
        slideImg[yak].classList.add('active');

        yak = lastElem(slideText, yak, boll);
        slideText[yak].classList.add('active');
    }

    slide();


    nextSlide.addEventListener('click', () => {

        slide(false);
    });


    prevSlide.addEventListener('click', () => {
        slide(true);
    })

})();
