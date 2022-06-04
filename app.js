const themeOneBtn = document.querySelector("#one");
const themeTwoBtn = document.querySelector("#two");
const themeThreeBtn = document.querySelector("#three");

const themeBtn = document.querySelectorAll(".btn-choose");

const selectedNumbers = document.querySelectorAll("#value");
const display = document.querySelector("#display");
const resetBtn = document.querySelector("#reset-btn");
const delBtn = document.querySelector("#del-btn");
const operatorBtn = document.querySelectorAll("#operators");
const equalBtn = document.querySelector('#equal');

const themesForBody = document.querySelector(".body");
const themesForDisplay = document.querySelector(".display");
const themesForHeader = document.querySelector(".header");
const themesForCalculator = document.querySelector(".calculator");
const themesForBtn = document.querySelectorAll(".btn")
const themesForDeleteBtn = document.querySelector(".btn-del");
const themesForResetBtn = document.querySelector(".btn-reset");
const themesForEqualBtn = document.querySelector(".btn-equal");

themeBtn.forEach(button=>{
  button.addEventListener('click',()=>{
    if(button.id==='one'){
      themeOneBtn.classList.remove('non-selected-btn');
      themeTwoBtn.classList.add('non-selected-btn');
      themeThreeBtn.classList.add('non-selected-btn');
      themesOne();
    }
    if(button.id==='two'){
      themeTwoBtn.classList.remove('non-selected-btn');
      themeTwoBtn.classList.add('selected-btn');
      themeOneBtn.classList.add('non-selected-btn');
      themeThreeBtn.classList.add('non-selected-btn');
      themesTwo();
    }
    if(button.id==='three'){
      themeThreeBtn.classList.remove('non-selected-btn');
      themeThreeBtn.classList.add('selected-btn');
      themeOneBtn.classList.add('non-selected-btn');
      themeTwoBtn.classList.add('non-selected-btn');
      themesThree();
    }
  })
});

function themesOne() {
  themesForBody.style.backgroundColor = "hsl(222, 26%, 31%)";
  themesForHeader.style.color = "white";
  themesForDisplay.style.color = "white";
  themesForDisplay.style.backgroundColor = "hsl(224, 36%, 15%)";
  themesForCalculator.style.backgroundColor = "hsl(224, 36%, 15%)";
  themesForBtn.forEach( button=> {
    button.style.boxShadow = "0 5px hsl(28, 16%, 65%)";
    button.style.color = "hsl(221, 14%, 31%)";
  });
  themesForDeleteBtn.style.color = "white";
  themesForDeleteBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
  themesForDeleteBtn.style.boxShadow = "0 5px hsl(224, 28%, 35%)";
  themesForResetBtn.style.color = "white";
  themesForResetBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
  themesForResetBtn.style.boxShadow = "0 5px hsl(224, 28%, 35%)";
  themesForEqualBtn.style.color = "white";
  themesForEqualBtn.style.backgroundColor = "hsl(6, 63%, 50%)";
  themesForEqualBtn.style.boxShadow = "0 5px hsl(6, 70%, 34%)";
}

function themesTwo() {
  themesForBody.style.backgroundColor = "hsl(0, 5%, 81%)";
  themesForHeader.style.color = "hsl(60, 10%, 19%)";
  themesForDisplay.style.color = "hsl(60, 10%, 19%)";
  themesForDisplay.style.backgroundColor = "hsl(0, 0%, 93%)";
  themesForCalculator.style.backgroundColor = "hsl(0, 0%, 93%)";
  themesForBtn.forEach( button=> {
    button.style.boxShadow = "0 5px hsl(35, 11%, 40%)";
    button.style.color = "hsl(60, 10%, 9%)";
  });
  themesForDeleteBtn.style.color = "hsl(60, 10%, 19%)";
  themesForDeleteBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
  themesForDeleteBtn.style.boxShadow = "0 5px hsl(185, 58%, 25%)";
  themesForResetBtn.style.color = "hsl(60, 10%, 19%)";
  themesForResetBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
  themesForResetBtn.style.boxShadow = "0 5px hsl(185, 58%, 25%)";
  themesForEqualBtn.style.color = "hsl(60, 10%, 19%)";
  themesForEqualBtn.style.backgroundColor = "hsl(25, 98%, 60%)";
  themesForEqualBtn.style.boxShadow = "0 5px hsl(25, 99%, 27%)";
}

function themesThree() {
  themesForBody.style.backgroundColor = "black";
  themesForHeader.style.color = "red";
  themesForDisplay.style.color = "red";
  themesForDisplay.style.backgroundColor = "grey";
  themesForCalculator.style.backgroundColor = "grey";
  themesForBtn.forEach( button=> {
    button.style.boxShadow = "0 5px red";
    button.style.color = "black";
  });
  themesForDeleteBtn.style.color = "red";
  themesForDeleteBtn.style.backgroundColor = "black";
  themesForDeleteBtn.style.boxShadow = "0 5px red";
  themesForResetBtn.style.color = "red";
  themesForResetBtn.style.backgroundColor = "black";
  themesForResetBtn.style.boxShadow = "0 5px red";
  themesForEqualBtn.style.color = "red";
  themesForEqualBtn.style.backgroundColor = "black";
  themesForEqualBtn.style.boxShadow = "0 5px red";
}

var variables = ['' , ''];
var operator = '';
var id = 0;

function reset(){
  variables = ['',''];
  operator = '';
  id = 0;
  updateScreen();
}

function updateScreen(){
  if(variables[id]=== ''){
    display.value = 0;
  } else{
    display.value = variables[id];
  }
}

function del(){
  if(variables[id].length > 0){
    variables[id] = variables[id].substr(0, variables[id].length-1);
    updateScreen();
  }
}

function calculate(){
  //to remove final operators
  let checkingLastIndex = /[\+\-\*\/]$/;
  if(checkingLastIndex.test(variables[0])) {
    variables[0] = variables[0].substr(0, variables[0].length-1);
  }

  var res = eval(variables[0]);
  res = Number(res);
  Number.isInteger(res) ?
  variables[0] = res :
  variables[0] = parseFloat(res.toFixed(5));
  id = 0;
  updateScreen();
}

selectedNumbers.forEach(button => {
    button.addEventListener('click', ()=>{

    //if you type / or * for the first time, zero will be inserted automatically
    if(variables[id] === "" && button.innerText=== "/" ) {
      variables[id] += "0";
    }

    if(variables[id] === "" && button.innerText=== "*" ) {
      variables[id] += "0";
    }

    let checkingOperator = /[\+\-\*\/]/;
    let notToMakeDoubleOperator = /[\+\-\*\/]$/;

    if(checkingOperator.test(button.innerText)) {
      if(notToMakeDoubleOperator.test(variables[id])) {
        //this will put only one operator. If you type + -, + will become -.
        variables[id] = variables[id].substr(0, variables[id].length-1)+button.innerText;
      } else {
        variables[id] += button.innerText;
      }
    } else if(button.innerText === "0"){
        //this will solve binary porblem such as 012-1=9
        if(variables[id]=== "0") {
          variables[id] = variables[id].substr(0, variables[id].length-1)+button.innerText;
        } else if(variables[id].length>0){
          variables[id] += button.innerText;
        }
    } else {
      variables[id] += button.innerText;
    }
    updateScreen();
  })
})

resetBtn.addEventListener('click',reset);
delBtn.addEventListener('click',del);
equalBtn.addEventListener('click',calculate);
