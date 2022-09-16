function showOnDisplay(Number) {
  document.getElementById("display-screen").value += Number;
}

function selectOperation(Operator) {
  document.getElementById("display-screen").value += Operator;
}

function showResult() {
  let result = eval(document.getElementById("display-screen").value);
  document.getElementById("display-screen").value = result;
}

function deleteEverything() {
  document.getElementById("display-screen").value = "";
}
