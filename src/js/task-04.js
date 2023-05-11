let containerValue = document.getElementById("value");

document.getElementById("increment").onclick = function () {
    let countPlus = containerValue.innerHTML;
    if(+countPlus <= 10000){
        containerValue.innerHTML++;
        let countPlus = containerValue.innerHTML;
    }
}

document.getElementById("decrement").onclick = function() {
    let countMinus = containerValue.innerHTML;
    if(+countMinus >= -10000){
        containerValue.innerHTML--;
      let countMinus = containerValue.innerHTML;
    }
  }