const container = document.querySelector('.container'),
    slide = container.querySelector('.slide'),
    slideImgs = slide.querySelector('.slideImgs'),
    next = slide.querySelector('.next'),
    prev = slide.querySelector('.prev');

  let currentIndex = 0;

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