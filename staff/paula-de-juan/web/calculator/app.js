function reset(){
    document.ans.value.toString().slice(0, -1);
  }

  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })