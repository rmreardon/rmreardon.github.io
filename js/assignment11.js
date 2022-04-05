function getOption() {
  var obj = document.getElementById("mySelect");
  document.getElementById("demo").innerHTML = obj.options[obj.selectedIndex].text;
  obj.textContent = "Cool!"


}
