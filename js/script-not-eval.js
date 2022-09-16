const digitalCalculator = {
  operatorSymbols: ["+", "-", "*", "/", "="],

  calculatorMemory: [],
  displayMemory: "",

  showOnDisplay: (Number) => {
    document.getElementById("display-screen").value += Number;
    displayMemory += "" + Number;
    console.log("displayMemory when digiting number:", this.displayMemory);
    console.log(calculatorMemory);
  },

  selectOperation: (Operator) => {
    document.getElementById("display-screen").value += Operator;
    calculatorMemory.push(displayMemory);
    calculatorMemory.push(Operator);
    displayMemory = "";
    console.log("displayMemory after operator:", this.displayMemory);
    console.log("calculatorMemory:", this.calculatorMemory);
  },

  deleteEverything: () => {
    calculatorMemory = [];
    displayMemory = "";
    document.getElementById("display-screen").value = "";
  },

  showResult: () => {
    calculatorMemory.push(this.displayMemory);

    for (i = 0; i <= calculatorMemory.length; i++)
      if (calculatorMemory[i] === this.operatorSymbols[0]) {
        let operationResult =
          Number(calculatorMemory[i - 1]) + Number(calculatorMemory[i + 1]);
        document.getElementById("display-screen").value = operationResult;
        displayMemory = operationResult;
        calculatorMemory.push(operationResult);
        console.log(calculatorMemory);
      }
  },
};
