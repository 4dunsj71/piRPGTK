var dropdown = document.getElementById("dicechoice");
var optionValue = dropdown.options[dropdown.selectedIndex].value;
var dice = {

    sides: parseInt(optionValue, 10),
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}


//Prints dice roll to the page

function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function () {
    var result = dice.roll();
    printNumber(result);
};

document.getElementById("dicechoice").addEventListener('change', function () {
    dice.sides = this.value;
});