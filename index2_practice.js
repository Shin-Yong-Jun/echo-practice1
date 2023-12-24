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



// for(let i = 0; i<aElements.length;)

function switchWhite() {
  body.style.backgroundColor='white';
}
function switchBlack() {
  body.style.backgroundColor='black';
}

// blackBtn.addEventListener('click', () => {
//   if(blackBtn.value==="블랙배경") {
//     switchBlack();
//     blackBtn.value="화이트배경";
//   } else {
//     switchWhite();
//     blackBtn.value="블랙배경";
//   }

// })

// console.log(aElements[0].textContent)


//===========================================
function blackBtnSwitchBg() {
    if(blackBtn.value==="블랙배경") {
        body.style.backgroundColor='black';
        blackBtn.value="화이트배경";
      } else {
          body.style.backgroundColor='white';
          blackBtn.value="블랙배경";
      
        }
      }
      
      
      blackBtn.addEventListener('click', () => {
          blackBtnSwitchBg();
        })
        
//===========================================


// blackBtn.onclick = () => {
//   if(blackBtn.value==='블랙배경') {
//     body.style.backgroundColor='black';
//     blackBtn.value="화이트배경";
//   } else {
//     body.style.backgroundColor='white';
//     blackBtn.value="블랙배경";
    
//   }
// }


// function switchBlack(self) {
//   if(self.value === "블랙배경") {
//     body.style.backgroundColor='black';
//     self.value = "화이트배경";
//   } else {
//     body.style.backgroundColor='white';
//     self.value = "블랙배경";

//   }
// }


// blackBtn.addEventListener('click', function() {
//   if(blackBtn.value === "블랙배경") {
//     body.style.backgroundColor='black';
//     blackBtn.value = "화이트배경";
// } else {
//   body.style.backgroundColor='white';
//   blackBtn.value="블랙배경"
// }
// });

// whiteBtn.addEventListener('click', function() {
//   body.style.backgroundColor='white';
// });










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