// Get the modal
var petunjuk = document.getElementById("petunjuk");
var tujuan = document.getElementById("tujuan");
var tentang = document.getElementById("tentang");
var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
var petunjukbtn = document.getElementById("petunjukbtn");
var tujuanbtn = document.getElementById("tujuanbtn");
var tentangbtn = document.getElementById("tentangbtn");

// Get the <span> element that closes the modal
var petunjukclose = document.getElementsByClassName("petunjukclose")[0];
var tujuanclose = document.getElementsByClassName("tujuanclose")[0];
var tentangclose = document.getElementsByClassName("tentangclose")[0];

// When the user clicks the button, open the modal 
petunjukbtn.onclick = function() {
  petunjuk.style.display = "flex";
}
tujuanbtn.onclick = function() {
  tujuan.style.display = "flex";
}
tentangbtn.onclick = function() {
  tentang.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
petunjukclose.onclick = function() {
  petunjuk.style.display = "none";
}
tujuanclose.onclick = function() {
  tujuan.style.display = "none";
}
tentangclose.onclick = function() {
  tentang.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
  if (event.target == petunjuk) {
    petunjuk.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == tujuan) {
    tujuan.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == tentang) {
    tentang.style.display = "none";
  }
}