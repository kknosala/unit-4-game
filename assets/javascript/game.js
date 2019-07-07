
var gameInfo = {

    wins: 0,
    losses: 0,
    //0 = purple, 1 = green, 2 = red, 3 = yellow
    pointValue: [],

}

var gemInfo = {
    
    purplePoints: gameInfo.pointValue[0],
    greenPoints: gameInfo.pointValue[1],
    redPoints: gameInfo.pointValue[2],
    yellowPoints: gameInfo.pointValue[3],

}
// var gemPurple = {
//     pointValue: 0,
//     generatePointValue()
// }

// var gemGreen = {
//     pointValue: 0,
//     generatePointValue()
// }

// var gemRed = {
//     pointValue: 0,
//     generatePointValue()
// }

// var gemYellow = {
//     pointValue: 0,
//     generatePointValue()
// }
var gameLogic = {

    generatePointValue: function(){
        for(i=0; i < 4; i++){
            var x = Math.floor((Math.random() * 12) + 1 );
            gameInfo.pointValue.push(x);
        }
    },

    resetGame: function(){
        gemInfo.pointValue = [];
        gameLogic.generatePointValue();
    }
}

gameLogic.generatePointValue();
//functions
// function generatePointValue(){
//     var x = Math.floor((Math.random() * 12) + 1 );
//     this.pointValue = x;


console.log(gameInfo.pointValue);
console.log('---');
console.log(gemInfo.purplePoints);
console.log('---');
console.log(gemInfo.greenPoints);
console.log('---');
console.log(gemInfo.redPoints);
console.log('---');
console.log(gemInfo.yellowPoints);