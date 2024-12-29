const icons = document.querySelectorAll('.icons img');
const container = document.querySelector('.container');

icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    const color = icon.dataset.color;
    container.style.backgroundColor = color;
    container.querySelector('.photo .img').src = icon.src;
  });
});