;
(() => {
    'use strict';

    /*variables*/


    /*parallax*/
    const Parallax = require('scroll-parallax');
    let p = new Parallax('.parallax' ,{
        intensity :20
    }).init()

    /*btn-mobile*/
    /*let btn = document.querySelector('.btn_mobile')
        btn.addEventListener('click',function () {
            this.classList.toggle('active');
        })*/
   /* let nuv = document.querySelector('.menu_nuv ')
        nuv.addEventListener('click',function () {
            nuv.classList.toggle('active');
        })*/
    const btn = document.querySelector('.btn_mobile');
    const nav = document.querySelector('.menu_nuv ');
        function menuNav(btn,nav) {
            btn.addEventListener('click',function () {
                this.classList.toggle('active');
                nav.classList.toggle('active');
            })
        }

       menuNav(btn,nav);
})();
