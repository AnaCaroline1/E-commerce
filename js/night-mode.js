let dark = document.getElementById("dark");
let light = document.getElementById("light");

dark.addEventListener("click", function(){
  var element = document.body;
  var content = document.getElementById("DarkModetext");
  element.className = "dark-mode";
})
light.addEventListener('click', function(){
  var element = document.body;
  var content = document.getElementById("LightModetext");
  element.className = "light-mode";
})