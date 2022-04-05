const para = document.querySelector('button');

para.addEventListener('click', updateName);

function updateName () {
  const name = prompt('Enter your email');
  para.textContent = `Thank You!`;
}
