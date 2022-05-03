const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

function changeColor() {
  h1.style.color = 'red';
}
function changeBgColor() {
  h1.style.backgroundColor = 'green';
}

// addEventListenerは複数関数を登録できる。
btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);