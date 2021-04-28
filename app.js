let theme = document.getElementById("theme")
let changebutton = document.getElementById("changebutton")
let pythoncolor = document.getElementById("pythona")
let htmlcolor = document.getElementById("htmla")
let djangocolor = document.getElementById("djangoa")
let jscolor = document.getElementById("jsa")
let contactStuff = document.getElementsByClassName("contactStuff")

function changeTheme() {
  if (theme.classList.contains("purpletheme")) {
    theme.classList.remove("purpletheme");
    theme.classList.add("bluetheme");
  } else if (theme.classList.contains("bluetheme")) {
    theme.classList.remove("bluetheme");
    theme.classList.add("purpletheme");
  }
}
function changeText(){
  if (changebutton.classList.contains("purplebutton")) {
    changebutton.classList.remove("purplebutton");
    changebutton.classList.add("bluebutton");
    document.getElementById("themename").textContent = " Purple Theme";
  } else if (changebutton.classList.contains("bluebutton")) {
    changebutton.classList.remove("bluebutton");
    changebutton.classList.add("purplebutton");
    document.getElementById("themename").textContent = " Blue Theme";
  }
}
function textColor(){
  /*To Change Text color*/
  /* Python */
  if(pythoncolor.classList.contains("blueText")){
    pythoncolor.classList.remove("blueText");
    pythoncolor.classList.add("greyText");
  } else if(pythoncolor.classList.contains("greyText")){
    pythoncolor.classList.remove("greyText");
    pythoncolor.classList.add("blueText");
  }
  /* Html */
  if(htmlcolor.classList.contains("blueText")){
    htmlcolor.classList.remove("blueText");
    htmlcolor.classList.add("greyText");
  } else if(htmlcolor.classList.contains("greyText")){
    htmlcolor.classList.remove("greyText");
    htmlcolor.classList.add("blueText");
  }
  /* Django */
  if(djangocolor.classList.contains("blueText")){
    djangocolor.classList.remove("blueText");
    djangocolor.classList.add("greyText");
  } else if(djangocolor.classList.contains("greyText")){
    djangocolor.classList.remove("greyText");
    djangocolor.classList.add("blueText");
  }
  /* Javascript */
  if(jscolor.classList.contains("blueText")){
    jscolor.classList.remove("blueText");
    jscolor.classList.add("greyText");
  } else if(jscolor.classList.contains("greyText")){
    jscolor.classList.remove("greyText");
    jscolor.classList.add("blueText");
  }
}
