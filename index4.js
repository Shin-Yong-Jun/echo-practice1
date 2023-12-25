let pagingNum = document.querySelectorAll(".paging ul li .num");
// pagingNum[0].classList.add('on');

for(let i = 0; i<pagingNum.length; i++) {
  pagingNum[i].addEventListener('click', function(e) {
    e.preventDefault();
    pagingNum[i].classList.add('on');
    
    for(let j=0; j<pagingNum.length; j++) {
      if(j !== i) {
        pagingNum[j].classList.remove('on');
      }
    }
  })
}



