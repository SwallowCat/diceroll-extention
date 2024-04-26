document.addEventListener('DOMContentLoaded', function() {
    var rollButton = document.getElementById('rollButton');
    var result = document.getElementById('result');

    rollButton.addEventListener('click', function() {
        var numDice = document.getElementById('numberOfDice').value;
        var maxNum = document.getElementById('maxNum').value;
        let sum = 0;
        maxNum++;

        for (let i = 0; i < numDice; i++) {
            let roll = getRandomInt(1, maxNum);
            sum += roll;
        }
        result.textContent = 'Result: ' + sum;
    });
});


// number of dice
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
