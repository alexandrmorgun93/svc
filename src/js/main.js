;
(() => {
  'use strict';

  /*variables*/


  /*parallax*/
  const Parallax = require('scroll-parallax');
  let p = new Parallax('.parallax', {
    intensity: 20
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

  function menuNav(btn, nav) {
    btn.addEventListener('click', function() {
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
  // window.onload = function() {
  //   slide();
  // }
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
      slideText[i].classList.remove('active');
    }


    yak = lastElem(slideImg, slideText, yak, boll);
    slideImg[yak].classList.add('active');
    slideText[yak].classList.add('active');
  }
  slide();
  prevSlide.addEventListener('click', () => {
    slide(false);
  })

  nextSlide.addEventListener('click', () => {
    slide(true);
  })






})();
