function getOption() {
  var obj = document.getElementById("mySelect");
  document.getElementById("demo").innerHTML = obj.options[obj.selectedIndex].text;

  if(option === 'oil') {
    alert('me too');
  } else{
    alert('ok')
  }


}
