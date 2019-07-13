$(document).ready(function() {
  //Game Variables
  var gameInfo = {
    wins: 0,
    losses: 0,
    //0 = purple, 1 = green, 2 = red, 3 = yellow
    pointValue: [],
    currentPoints: 0,
    targetValue: 0,
    winText: "Click the gems to see what they're worth!"
  };
  //Gem Values
  var gemInfo = {
    purplePoints: 0,
    greenPoints: 0,
    redPoints: 0,
    yellowPoints: 0
  };
  //Logic to run game
  var gameLogic = {
    //Generates points in an Array
    generatePointValue: function() {
      for (i = 0; i < 4; i++) {
        var x = Math.floor(Math.random() * 12 + 1);
        gameInfo.pointValue.push(x);
      }
      //Assigns point values to the gems
      gemInfo.purplePoints = gameInfo.pointValue[0];
      gemInfo.greenPoints = gameInfo.pointValue[1];
      gemInfo.redPoints = gameInfo.pointValue[2];
      gemInfo.yellowPoints = gameInfo.pointValue[3];
    },
    //Generates the target value
    generateTarget: function() {
      var y = Math.floor(Math.random() * 101 + 19);
      gameInfo.targetValue = y;
    },
    //prints the values to the screen
    print: function() {
      $("#current-points").text(gameInfo.currentPoints);
      $("#target-score").text(gameInfo.targetValue);
      $("#wins").text(gameInfo.wins);
      $("#losses").text(gameInfo.losses);
      $("#result-text").text(gameInfo.winText);
    },
    //Function used to begin the game
    gameStart: function() {
      this.generatePointValue();
      this.generateTarget();
      this.print();
    },
    //Resets all values
    resetGame: function() {
      gameInfo.pointValue = [];
      gemInfo.purplePoints = 0;
      gemInfo.greenPoints = 0;
      gemInfo.redPoints = 0;
      gemInfo.yellowPoints = 0;
      gameInfo.currentPoints = 0;
      gameLogic.gameStart();
    },
    //Function for a game win
    gameWin: function() {
      gameInfo.wins++;
      gameInfo.winText = "You Won!";
      this.print();
      gameLogic.resetGame();
    },
    //Function for a game loss
    gameLoss: function() {
      gameInfo.losses++;
      gameInfo.winText = "You lost!";
      this.print();
      gameLogic.resetGame();
    }
  };
  //Starts game on page load
  gameLogic.gameStart();
  //When clicking on a gem button
  $(".gembutton").on("click", function() {
    //grabs gem value
    var color = this.value;
    //adds gem points depending on which value is stored in color
    switch (color) {
      case "purple":
        gameInfo.currentPoints = gameInfo.currentPoints + gemInfo.purplePoints;
        break;
      case "green":
        gameInfo.currentPoints = gameInfo.currentPoints + gemInfo.greenPoints;
        break;
      case "red":
        gameInfo.currentPoints = gameInfo.currentPoints + gemInfo.redPoints;
        break;
      case "yellow":
        gameInfo.currentPoints = gameInfo.currentPoints + gemInfo.yellowPoints;
        break;
    }
    //updates points
    gameLogic.print();
    //win and loss conditions
    if (gameInfo.currentPoints > gameInfo.targetValue) {
      gameLogic.gameLoss();
    } else if (gameInfo.currentPoints === gameInfo.targetValue) {
      gameLogic.gameWin();
    }
  });
});
