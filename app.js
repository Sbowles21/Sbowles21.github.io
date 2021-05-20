let pythoncolor = document.getElementById("pythona");
let htmlcolor = document.getElementById("htmla");
let djangocolor = document.getElementById("djangoa");
let jscolor = document.getElementById("jsa");
let contactStuff = document.getElementsByClassName("contactStuff");
let darkButton = document.getElementById('dark');
let lightButton = document.getElementById('light');
let purpleButton = document.getElementById('Purple');
let blueButton = document.getElementById('Blue');
let body = document.body;
let theme = localStorage.getItem('theme');
let themebox = document.getElementById("boxcolor");

if (theme) {
  body.classList.add(theme);
}
darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  body.classList.replace('Blue', 'dark');
  body.classList.replace('Purple', 'dark');
  localStorage.setItem('theme', 'dark');
  boxcolor()
};
lightButton.onclick = () => {
  body.classList.replace('dark', 'light');
  body.classList.replace('Blue', 'light');
  body.classList.replace('Purple', 'light');
  localStorage.setItem('theme', 'light');
  textColor()
  boxcolor()
};
blueButton.onclick = () => {
  body.classList.replace('dark', 'Blue');
  body.classList.replace('light', 'Blue');
  body.classList.replace('Purple', 'Blue');
  localStorage.setItem('theme', 'Blue');
  textColor()
  boxcolor()
};
purpleButton.onclick = () => {
  body.classList.replace('dark', 'Purple');
  body.classList.replace('light', 'Purple');
  body.classList.replace('Blue', 'Purple');
  localStorage.setItem('theme', 'Purple');
  textColor()
  boxcolor()
};

function boxcolor(){
  if (body.classList.contains('dark')){
    document.getElementById("pythonProject").id = "pythonProject2"
    document.getElementById("htmlProject").id = "htmlProject2"
    document.getElementById("djangoProject").id = "djangoProject2"
    document.getElementById("jsProject").id = "jsProject2"
    pythoncolor.classList.add("blackText")
    htmlcolor.classList.add("blackText")
    djangocolor.classList.add("blackText")
    jscolor.classList.add("blackText")
  }else {
    document.getElementById("pythonProject2").id = "pythonProject"
    document.getElementById("htmlProject2").id = "htmlProject"
    document.getElementById("djangoProject2").id = "djangoProject"
    document.getElementById("jsProject2").id = "jsProject"
    pythoncolor.classList.remove("blackText")
    htmlcolor.classList.remove("blackText")
    djangocolor.classList.remove("blackText")
    jscolor.classList.remove("blackText")
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