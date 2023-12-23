'use strict';

let body = document.querySelector('body');
let aElements =  document.querySelectorAll('.tabMenu li a');

let blackBtn = document.querySelector('.blackBtn');
let whiteBtn = document.querySelector('.whiteBtn');


for(let i =0; i<aElements.length; i++) {
  aElements[i].addEventListener('click', function(e) {
    e.preventDefault();
    e.target.classList.add('on');
    for(let j=0; j<aElements.length; j++){
      if(j !== i) {
        aElements[j].classList.remove('on');
      }
    }
  })
}


blackBtn.addEventListener('click', function() {
  body.style.backgroundColor='black';
});

whiteBtn.addEventListener('click', function() {
  body.style.backgroundColor='white';
});










// 'use strict';

// let aElements = document.querySelectorAll('.tabMenu li a');

// // HTMLCollection이므로 반복문을 통해 각 요소에 이벤트 추가
// for (let i = 0; i < aElements.length; i++) {
//   aElements[i].addEventListener('click', function(e) {
//     e.preventDefault();
//     e.target.classList.add('on');
    
//     for(let j=0; j< aElements.length; j++) {
//       if(j !== i) {
//         aElements[j].classList.remove('on'); 
//       }
//     }
//   });
// }