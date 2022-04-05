const para = document.querySelector('button');

para.addEventListener('click', askRating);

function askRating () {
  const rating = prompt('From 1-10 how would you rate my website?');

  if(rating <= 6) {
    prompt('Please help me, how can I make my website better?');
  } else{
    alert('Thank you for your feedback')
  }
}
