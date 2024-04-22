document.addEventListener('DOMContentLoaded', function() {
    var D6 = document.getElementById('1d6');
    var D100 = document.getElementById('1d100');

    D6.addEventListener('click', function() {
        var result = getRandomInt(1, 7);
        document.getElementById('result').textContent = 'Result: ' + result;
    });

    D100.addEventListener('click', function() {
        var result = getRandomInt(1, 101);
        document.getElementById('result').textContent = 'Result: ' + result;
    });
});


// number of dice
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
