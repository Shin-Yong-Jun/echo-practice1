'use strict';

let loginClick = document.querySelector('.btn a');



let btnClickState = false;
const btnClick = () => {
  if(btnClickState === false) {
    loginClick.style.backgroundColor = 'red';
    loginClick.style.borderColor = 'red';
    btnClickState = true;
  } else {
    loginClick.style.backgroundColor = '#829c2c';
    loginClick.style.borderColor = '#778f28';
    btnClickState = false;
  }
  
}

loginClick.addEventListener('click', () => {
  btnClick();
})

