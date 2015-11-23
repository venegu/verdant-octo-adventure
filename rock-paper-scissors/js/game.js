function form(){
    document.getElementById('scissors').style.display = 'none';
    document.getElementById('game_form').style.display = 'block';
}
function scissors() {
    document.getElementById('paper').style.display = 'none';
    document.getElementById('scissors').style.display = 'block';
    setTimeout(form, 1000);
}

function paper() {
    document.getElementById('rock').style.display = 'none';
    document.getElementById('paper').style.display = 'block';
    setTimeout(scissors, 1000);
}

/***
 * Starts game, removes button and replaces it with rock for 1 second
***/
function startGame() {
    //document.body.removeChild(document.getElementById('play_button'));
    document.getElementById('play_button').style.display = 'none';
    document.getElementById('rock').style.display = 'block';
    setTimeout(paper, 1000);
}

/* Please make me nicer Lisa */

function choice() {
    var compChoice = {1: 'Rock', 2: 'Paper', 3: 'Scissors'}
    var random = Math.floor(Math.random() * 3) + 1;

    var choice = document.getElementsByName('rps');

    console.log(choice);

    document.getElementById('game_form').style.display = 'none';

    for (var i = 0, length = choice.length; i < length; i++) {
        if (choice[i].checked) {
            if(choice[i].value === "Rock") {
                if(compChoice[random] === "Rock") {
                    alert(choice[i].value + ", " + compChoice[random] + ", tie!");
                } else if(compChoice[random] === "Paper") {
                    alert(choice[i].value + ", " + compChoice[random] + ", You lose!");
                } else {
                    alert(choice[i].value + ", " + compChoice[random] + ", You win!");
                }
            } else if (choice[i].value === "Paper") {
                if(compChoice[random] === "Rock") {
                    alert(choice[i].value + ", " + compChoice[random] + ", You win!");
                } else if(compChoice[random] === "Paper") {
                    alert(choice[i].value + ", " + compChoice[random] +  ", tie!");
                } else {
                    alert(choice[i].value + ", " + compChoice[random] +  ", You lose!");
                }
            } else if (choice[i].value === "Scissors") {
                if(compChoice[random] === "Rock") {
                    alert(choice[i].value + ", " + compChoice[random] +  ", You lose!");
                } else if(compChoice[random] === "Paper") {
                    alert(choice[i].value + ", " + compChoice[random] +  ", You win!");
                } else {
                    alert(choice[i].value + ", " + compChoice[random] +  ", tie!");
                }
            }
        }
    }


}