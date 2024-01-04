const container = document.querySelector(".container"),
  slide = container.querySelector(".slide"),
  slideImgs = slide.querySelector(".slideImgs"),
  next = slide.querySelector(".next"),
  prev = slide.querySelector(".prev");

// 이미지 자동 슬라이드

let currentIndex = 0;
let intervalId = null;

function autoSlide() {
  currentIndex = (currentIndex + 1) % slideImgs.children.length;
  const translateValue = -100 * currentIndex + "%";
  slideImgs.style.transform = `translateX(${translateValue})`;
  updateNation(currentIndex);
  console.log(nationNums);
}

container.addEventListener("mouseleave", () => {
  if(intervalId !== null) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(autoSlide, 1000);
});

container.addEventListener("mouseenter", () => {
  clearInterval(intervalId);
  intervalId = null;
});

// 처음부터 자동슬라이드 작동
intervalId=setInterval(autoSlide, 1000);

// 이전 다음 버튼 클릭시 이미지 이동
next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slideImgs.children.length;
  const translateValue = -100 * currentIndex + "%";
  slideImgs.style.transform = `translateX(${translateValue})`;
  updateNation(currentIndex);
});

prev.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + slideImgs.children.length) % slideImgs.children.length;
  const translateValue = -100 * currentIndex + "%";
  slideImgs.style.transform = `translateX(${translateValue})`;
  updateNation(currentIndex);
});



//================== Nation 만들기 =======================================

const nationBox = document.querySelector(".nationBox"),
  nation = nationBox.querySelector(".nation");

// 이미지 수대로 nation li 를 만들기 위한 배열 준비. length 활용준비
const nationList = new Array(slideImgs.children.length).fill(undefined);
console.log(nationList);

for (let i = 0; i < nationList.length; i++) {
  nation.innerHTML += `<li class = "nationNum${i}"></li>`;
}

// nation li 의 width 를 이미지 수에 따라 동적으로 변경
const nationNums = document.querySelectorAll(".nationBox .nation li");
const totalNationNums = nationNums.length;
nationNums.forEach((element) => {
  element.style.width = `${100 / totalNationNums}%`;
});

// 첫번째 순서에 active 클래스 추가
nationNums[0].classList.add("active");

// nation li 클릭시 해당 이미지로 이동 및 active 클래스 추가(autoSlide와 버튼 동작시 활용)
function updateNation(currentIndex) {
  nationNums.forEach((element) => {
    element.classList.remove("active");
  });
  nationNums[currentIndex].classList.add("active");
}
