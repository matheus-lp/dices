var title = document.querySelector("h1");
title.addEventListener("click", updateDices)

function updateDices() {
    function randomNumber() {
        return Math.ceil(Math.random()*6);
    }
    var numberContainer = [randomNumber(), randomNumber()]

    if (numberContainer[0] > numberContainer[1]) {
        title.innerHTML = "🚩Player 1 won";
    } else if (numberContainer[0] < numberContainer[1]) {
        title.innerHTML = "Player 2 won🚩";
    } else {
        title.innerHTML = "🚩It is a tie🚩";
    }

    var imageSource1 = "images/dice" + numberContainer[0] + ".png";
    var imageSource2 = "images/dice" + numberContainer[1] + ".png";

    var getImage = [document.querySelectorAll("img")[0], document.querySelectorAll("img")[1]];

    getImage[0].setAttribute("src", imageSource1);
    getImage[1].setAttribute("src", imageSource2);

}