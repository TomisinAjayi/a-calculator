function calculateCost() {
  var braidsLength = document.getElementById("braidslength").value;
  var braidsVolume = document.getElementById("braidsvolume").value;
  var attachment = document.getElementById("attachment").value;
  var extras = document.getElementById("extras").value;
  var serviceQuality = document.getElementById("servicequality").value;

if (attachment === "" || braidsLength == 0) {
  alert("Please enter values");
  return;
}

var total = (braidsLength * braidsVolume) + attachment + (extras * serviceQuality);

total = Math.round(total * 100) / 100;

total = total.toFixed(2);

document.getElementById("totalCost").style.display = "block";
document.getElementById("cost").innerHTML = total;
};

document.getElementById("totalCost").style.display = "";

document.getElementById("calculate").onclick = function() {
  calculateCost();

};
