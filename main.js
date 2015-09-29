// Variables for info we need

var firstNum = document.querySelector('#num_one');
var secondNum = document.querySelector('#num_two');
var sumIs = document.querySelector('#answer');
var one = firstNum.value;
var two = secondNum.value;

// Other variables

var showAnswer, completeOp;

// Addition Function

var addNums = function () {
  var one = firstNum.value;
  var two = secondNum.value;
  var answer = Number(one) + Number(two);
  return 'The answer is ' + answer + '.';
};

// Function to show answer

var showAnswer = function () {
  completeOp = addNums();
  sumIs.textContent = completeOp;
}

// Button Push stuff

calculateBtn.addEventListener('click', showAnswer);
