const sections = document.querySelectorAll('section');
const selector = document.querySelector('.selector');
const gradients = [
  'linear-gradient(to right top, #f46b45, #eea849)',
  'linear-gradient(to right top, #005c97, #363795)',
  'linear-gradient(to right top, #e53935, #e45d5d)',
];

const options = {
  threshold: 0.7,
};

const navCheck = entries => {
  entries.forEach(entry => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute('data-index');
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if (entry.isIntersecting) {
      selector.style.setProperty('left', `${directions.left}px`);
      selector.style.setProperty('top', `${directions.top}px`);
      selector.style.setProperty('width', `${directions.width}px`);
      selector.style.setProperty('height', `${directions.height}px`);
      selector.style.background = gradients[gradientIndex];
    }
  });
};

let observer = new IntersectionObserver(navCheck, options);

setTimeout(() => {
  sections.forEach(section => {
    observer.observe(section);
  });
}, 100);
