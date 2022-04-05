const quoteButton=document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);

function getQuote() {
  console.log("quote button was clicked");
  try {
    const response = await fetch(endpoint)
    if(!response.ok){
      throw Error(response.statusText)
    }

    const json = response.jsun();
    console.log(json)
  }
}
const endpoint= 'https://random-quote-generator.her'
