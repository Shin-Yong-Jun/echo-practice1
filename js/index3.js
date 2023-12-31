const table = document.querySelector('.tb_type1');


function changeBgBlack() {
  this.style.backgroundColor="black";
}
function changeBgWhite() {
  this.style.backgroundColor="white";
}


table.addEventListener('mouseenter', changeBgBlack);
table.addEventListener('mouseleave', changeBgWhite);

document.addEventListener('scroll', () => {
  console.log(parseInt(window.scrollY));
})