$(document).ready(function() {
var gameInfo = {

    wins: 0,
    losses: 0,
    //0 = purple, 1 = green, 2 = red, 3 = yellow
    pointValue: [],
    currentPoints: 0,
    targetValue: 0,
    winText: 'Click the gems to see what they\'re worth!',
}

var gemInfo = {
    
    purplePoints: 0,
    greenPoints: 0,
    redPoints: 0,
    yellowPoints: 0,

}

var gameLogic = {

    generatePointValue: function(){
        for(i=0; i < 4; i++){
            var x = Math.floor((Math.random() * 12) + 1 );
            gameInfo.pointValue.push(x);
        }
        gemInfo.purplePoints = gameInfo.pointValue[0];
        gemInfo.greenPoints = gameInfo.pointValue[1];
        gemInfo.redPoints = gameInfo.pointValue[2];
        gemInfo.yellowPoints = gameInfo.pointValue[3];
    },

    generateTarget: function(){
        var y = Math.floor((Math.random() * 101) + 19);
        gameInfo.targetValue = y;
    },

    print: function(){
        $('#current-points').text(gameInfo.currentPoints);
        $('#target-score').text(gameInfo.targetValue);
        $('#wins').text(gameInfo.wins);
        $('#losses').text(gameInfo.losses);
        $('#result-text').text(gameInfo.winText);
    },

    gameStart: function(){
        this.generatePointValue();
        this.generateTarget();
        this.print();
    },

    resetGame: function(){
        gemInfo.pointValue = [];
        gemInfo.purplePoints = 0;
        gemInfo.greenPoints = 0;
        gemInfo.redPoints = 0;
        gemInfo.yellowPoints = 0;
        gameInfo.currentPoints = 0;
        gameLogic.generatePointValue();
        gameLogic.generateTarget();
        gameLogic.gameStart();
    },

    gameWin: function() {
        gameInfo.wins++;
        gameInfo.winText = 'You Won!';
        this.print();
        gameLogic.resetGame();
    },

    gameLoss: function(){
        gameInfo.losses++;
        gameInfo.winText = 'You lost!';
        this.print();
        gameLogic.resetGame();
    }
    
}

gameLogic.gameStart();

console.log('target point ', gameInfo.targetValue);
console.log('purple value ', gemInfo.purplePoints);
console.log('green value ', gemInfo.greenPoints);
console.log('red value', gemInfo.redPoints);
console.log('yellow value ', gemInfo.yellowPoints);

$('.gembutton').on('click', function(){
    var color = this.value;

    switch(color) {
        case 'purple':
            gameInfo.currentPoints = gameInfo.currentPoints + gemInfo.purplePoints;
            break;
        case 'green':
            gameInfo.currentPoints = gameInfo.currentPoints + gemInfo.greenPoints;
            break;
        case 'red':
            gameInfo.currentPoints = gameInfo.currentPoints + gemInfo.redPoints;
            break;
        case 'yellow':
            gameInfo.currentPoints = gameInfo.currentPoints + gemInfo.yellowPoints;
            break;
    }

    gameLogic.print();

    if(gameInfo.currentPoints > gameInfo.targetValue) {
        gameLogic.gameLoss();
    }else if(gameInfo.currentPoints === gameInfo.targetValue) {
        gameLogic.gameWin();
    }
})

})