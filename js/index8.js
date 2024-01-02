const container = document.querySelector('.container'),
    slide = container.querySelector('.slide'),
    slideImgs = slide.querySelector('.slideImgs'),
    next = slide.querySelector('.next'),
    prev = slide.querySelector('.prev');

  let currentIndex = 0;

  // 이미지 자동 슬라이드

  function autoSlide() {
    currentIndex = (currentIndex + 1) % slideImgs.children.length;
    const translateValue = -100 * currentIndex + '%';
    slideImgs.style.transform = `translateX(${translateValue})`;
  }
  
  container.addEventListener('mouseleave', ()=>{
    intervalId=setInterval(autoSlide, 3000);
  });
  
  container.addEventListener('mouseenter', ()=>{
    clearInterval(intervalId);
  });
  

  
  // 이전 다음 버튼 클릭시 이미지 이동
  next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideImgs.children.length;
    const translateValue = -100 * currentIndex + '%';
    slideImgs.style.transform = `translateX(${translateValue})`;
  })
  
  prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideImgs.children.length) % slideImgs.children.length;
    const translateValue = -100 * currentIndex + '%';
    slideImgs.style.transform = `translateX(${translateValue})`;
  })
  
  // 처음부터 자동슬라이드 작동
  intervalId=setInterval(autoSlide, 3000);
  autoSlide();