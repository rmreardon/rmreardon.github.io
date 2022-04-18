const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 155 fahrenheit and a very humid day, so :insertx: was sweating buckets. Once they arrived at :inserty:, they burst into tears and fell down, then :insertz:. Bob was not remotely surprised when seeing this chain of events occur — :insertx: weighs 300 pounds, and it was a humid day.";
const insertX = ["Anita Bath", "Lipin Jection", "Phil Down"];
const insertY = ["Staples", "your parents house", "Dwayne Johnson's house"];
const insertZ = ["squished an ant with their bare finger", "slapped Chris Rock to see what it was like", "peeled a banana and then threw the peel at a tree"];

randomize.addEventListener('click', result);

function result() {
//create a new variable newStory = storyText
newStory=storyText
//create xItem, yItem, zItem
//let xItem=randomValueFromArray(insertX);
let xItem= randomValueFromArray (insertX)
let yItem= randomValueFromArray (insertY)
let zItem= randomValueFromArray (insertZ)
//replace :insertx: inserty:insertz
newStory=newStory.replace(/:insertx:/g, xItem)
newStory=newStory.replace(/:inserty:/g, yItem)
newStory=newStory.replace(/:insertz:/g, zItem)
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name)
//step 4 - find bob replace name
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone'; //replace 300 with formula you find on internet
    //turn weight into string
    //add string and ' stone' together
    const temperature =  Math.round((155 + 32)*5 / 9) + ' centigrade';
    newStory = newStory.replace ('155 fahrenheit', temperature);
    newStory = newStory.replace ('300 pounds', weight)
    //convert fahrenheit to centigrade
    //replace values in string with temp and weight var
  }

  story.textContent =newStory ;
  story.style.visibility = 'visible';
}
