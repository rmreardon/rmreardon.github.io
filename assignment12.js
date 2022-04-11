async function getQuote() {
  console.log("quote button was clicked");
  try{
    const response = await fetch(endpoint);
    if(!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json.activity);
  }catch(err) {
    console.log(err)
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}
const endpoint = 'https://www.boredapi.com/api/activity';
const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);

let newquotebutton = document.querySelector('#js-new-quote');
let CountButtonHomeClicks = 0;

newquotebutton.addEventListener('click', function () {
  CountButtonHomeClicks += 1;
  console.log(CountButtonHomeClicks);

  if (CountButtonHomeClicks == 3) {
    alert(`Give up and do nothing`)
  }
});
