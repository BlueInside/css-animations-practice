const body = document.querySelector('body');
const html = document.querySelector('html');

html.addEventListener('click', () => {
  const div = document.createElement('div');
  div.classList.add('box');
  body.appendChild(div);
});
