function scissors() {
    document.getElementById('paper').style.display = 'none';
    document.getElementById('scissors').style.display = 'block';
}

function paper() {
    document.getElementById('rock').style.display = 'none';
    document.getElementById('paper').style.display = 'block';
    setTimeout(scissors, 2000);
}

function startGame() {
    //document.body.removeChild(document.getElementById('play_button'));
    document.getElementById('play_button').style.display = 'none';
    document.getElementById('rock').style.display = 'block';
    setTimeout(paper, 2000);
}
