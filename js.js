document.querySelector('.menu-btn').addEventListener('click', function (){
  this.classList.toggle('menu-btn_active')
  document.querySelector('.nav__list').classList.toggle('nav__list_active');
})

// slider
let slideIndex = 1;

const slides = document.querySelectorAll(".testimonials__box"),
      dots = document.querySelectorAll(".numder__element");


function WriteLog(){
   slideIndex ++;
  showSlides(slideIndex);
 }
 const TimerId = window.setInterval(WriteLog, 8000);

showSlides(slideIndex);

function showSlides(n) {
  slideIndex=n;
  let i;

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    // slides[i].style.display = "none";  
    slides[i].classList.remove('block');  
    slides[i].classList.add('none');  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].style="background:#FFFFFF;";
  }
  // slides[slideIndex-1].style.display = "flex";   
  slides[slideIndex-1].classList.remove('none');   
  slides[slideIndex-1].classList.add('block');   
  dots[slideIndex-1].style.background="#a55c30";
}
// slider



// slider 2

// _______________


function monitor() {
  
const prev=document.querySelectorAll('.slider__control')[0];
const next=document.querySelectorAll('.slider__control')[1];


const item_slider=document.querySelectorAll('.slider__box');
const carousel_slider=document.querySelector('.slider__carousel');
const window_slider = document.querySelector('.slider__window').clientWidth;

const margin_slider = 16;

let offset = 0;

let number;

let window = document.querySelector('.slider__window').offsetWidth;
if(1040<window){
  number=3;
}
if(1040>window){
  number=2;
}
if(750>=window){
  number=1;
}



let item_width=Math.floor(window_slider / number) + 'px';

item_slider.forEach(slide => {
        slide.style.width = item_width;
  })

  const width_carousel=document.querySelector('.slider__carousel').offsetWidth;


  // ((((
// let calculation=(396+16)*8;
// let calculation_1=(396+16)*3;
const calculation=(item_slider[0].offsetWidth+margin_slider)*item_slider.length;
const calculation_1=(item_slider[0].offsetWidth+margin_slider)*number;
// 3 этой фигне количесво показаных в окне
// 16 этой фигне отступ слайдов
const formula=calculation-calculation_1;
// ))))


  next.addEventListener('click', () => {
   
for (let i = 0; i< number; ++i) {

  offset += item_slider[0].offsetWidth+margin_slider;

  if(width_carousel>=offset){
    transform(offset)
  }
  if (offset >= width_carousel) {
    offset = 0;
    transform(offset)
    return 
}
if (offset == formula) {
  offset=formula;
  transform(offset)
  return
}

}

})

function transform(sum){
  carousel_slider.style.transform = `transLateX(-${sum}px)`;
}

  prev.addEventListener('click', () => {
    if (offset == 0) {
          offset = +formula;
    } else {
          offset -= +item_slider[0].offsetWidth+margin_slider;
    }
    carousel_slider.style.transform = `transLateX(-${offset}px)`;
})

}


  window.addEventListener('resize', monitor);
  monitor();
// slider 2

// Effect
  const options = {
    root: null,
    rootMargin: '40px 0px -100px 0px',
    threshold: 0.5
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImg = entry.target;

        lazyImg.classList.add('_active');

        observer.unobserve(lazyImg);
      }
    })
  }, options)

  const arr = document.querySelectorAll('section');
  arr.forEach(i => {
    observer.observe(i)
  })
// Effect

onload = function () {
  document.querySelector('body').classList.remove('background_red')
  document.querySelector('.promo__img').style="animation: cars 1s cubic-bezier(0.22, 0.61, 0.36, 1) 1s 1 normal backwards;";
};