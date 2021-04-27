function change() {
  if (document.getElementById("theme").classList.contains("purpletheme")) {
    document.getElementById("theme").classList.remove("purpletheme");
    document.getElementById("theme").classList.add("bluetheme");
  } else if (document.getElementById("theme").classList.contains("bluetheme")) {
    document.getElementById("theme").classList.remove("bluetheme");
    document.getElementById("theme").classList.add("purpletheme");
  }
  if (document.getElementById("changebutton").classList.contains("purplebutton")) {
    document.getElementById("changebutton").classList.remove("purplebutton");
    document.getElementById("changebutton").classList.add("bluebutton");
    document.getElementById("themename").textContent = " Purple Theme";
  } else if (document.getElementById("changebutton").classList.contains("bluebutton")) {
    document.getElementById("changebutton").classList.remove("bluebutton");
    document.getElementById("changebutton").classList.add("purplebutton");
    document.getElementById("themename").textContent = " Blue Theme";
  }
}

function hideImages(){
  if (document.getElementById("img1").classList.contains("shown")){
    document.getElementById("img1").classList.remove("shown")
    document.getElementById("img1").classList.add("hidden")
    document.getElementById("Python-box1").style.height = "225px"
    document.getElementById("what_do").textContent = "Show"
  } else{
    document.getElementById("img1").classList.remove("hidden")
    document.getElementById("img1").classList.add("shown")
    document.getElementById("what_do").textContent = "Hide"
    document.getElementById("Python-box1").style.height = "auto"
  }
  if (document.getElementById("img2").classList.contains("shown")){
    document.getElementById("img2").classList.remove("shown")
    document.getElementById("img2").classList.add("hidden")
    document.getElementById("Python-box2").style.height = "200px"
  } else{
    document.getElementById("img2").classList.remove("hidden")
    document.getElementById("img2").classList.add("shown")
    document.getElementById("Python-box2").style.height = "628px"
  }
  if (document.getElementById("img3").classList.contains("shown")){
    document.getElementById("img3").classList.remove("shown")
    document.getElementById("img3").classList.add("hidden")
    document.getElementById("Html_box1").style.height = "190px"
  } else{
    document.getElementById("img3").classList.remove("hidden")
    document.getElementById("img3").classList.add("shown")
    document.getElementById("Html_box1").style.height = "560px"
  }
  if (document.getElementById("img4").classList.contains("shown")){
    document.getElementById("img4").classList.remove("shown")
    document.getElementById("img4").classList.add("hidden")
    document.getElementById("Html_box2").style.height = "225px"
  } else{
    document.getElementById("img4").classList.remove("hidden")
    document.getElementById("img4").classList.add("shown")
    document.getElementById("Html_box2").style.height = "560px"
  }
}
