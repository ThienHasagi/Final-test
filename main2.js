function numberOneTriangle(n) {
  var output = "";
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
      output += "1 ";
    }
    output += "\n";
  }
  return output;
}
var result = numberOneTriangle(5);
document.getElementById("output").innerText = result;
