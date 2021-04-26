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
