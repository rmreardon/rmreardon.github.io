const para = document.querySelector('button');

para.addEventListener('click', updateName);

function updateName () {
  const name = prompt('Enter your email');
  para.textContent = `Thank You!`;
}

const para = document.querySelector('button');

para.addEventListener('click', askRating);

function askRating () {
  const rating = prompt('From 1-10 how would you rate my website?');

  if(rating <= 6) {
    prompt('Please help me, how can I make my website better?');
  } else{
    alert('Thank you for your feedback')
  }
  para.textContent = `Thank You!`;
}

function getOption() {
  var obj = document.getElementById("mySelect");
  document.getElementById("demo").innerHTML =
  obj.options[obj.selectedIndex].text;
}
