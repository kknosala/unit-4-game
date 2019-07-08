
var gameInfo = {

    wins: 0,
    losses: 0,
    //0 = purple, 1 = green, 2 = red, 3 = yellow
    pointValue: [],
    currentPoints: 0,
    targetValue: 0,

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

    gameStart: function(){
        this.generatePointValue();
        this.generateTarget();
    },

    resetGame: function(){
        gemInfo.pointValue = [];
        gemInfo.purplePoints = 0;
        gemInfo.greenPoints = 0;
        gemInfo.redPoints = 0;
        gemInfo.yellowPoints = 0;
        gameLogic.generatePointValue();
        gameLogic.generateTarget();
    },

    gameWin: function() {
        gameInfo.wins++;
        gameLogic.resetGame();
    },

    gameLoss: function(){
        gameInfo.losses++;
        gameLogic.resetGame();
    }
}

gameLogic.gameStart();


console.log(gameInfo.pointValue);
console.log('---');
console.log(gameInfo.targetValue);
console.log('---');
console.log(gemInfo.purplePoints);
console.log('---');
console.log(gemInfo.greenPoints);
console.log('---');
console.log(gemInfo.redPoints);
console.log('---');
console.log(gemInfo.yellowPoints);