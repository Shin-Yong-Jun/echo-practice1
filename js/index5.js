'use strict';

const main_container = document.querySelector('.main_container'),
img = main_container.querySelector('.main_container .img img'),
nationBox = main_container.querySelectorAll('.nationBox');

let beforeNationBox = nationBox[0];

function changeImg(e) {
  e.preventDefault();
  console.log('WKt')
  img.setAttribute('src', `./images/bg${this.textContent}.jpg`)
  beforeNationBox.style.opacity = '.5';
  this.style.opacity = '1';
  beforeNationBox = this;
}

for (let i =0; i<nationBox.length; i++) {
  nationBox[i].addEventListener('click', changeImg);
}
