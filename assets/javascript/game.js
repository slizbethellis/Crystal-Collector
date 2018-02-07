var wins = 0;
var losses = 0;
var sameGame = false;

window.onload = function() {
	var buttonNum;
  //  Click events
  $(".crystalButton").on("click", function() {
  	buttonNum = this.value;
  	console.log(this.value);
  	game.convertButton(buttonNum);
  });
};

var game = {
	randNum: 0,
	crystal1: 0,
	crystal2: 0,
	crystal3: 0,
	crystal4: 0,
	score: 0,
	crystalValue: 0,

	// starts or resets game
  reset: function(){
  	game.randNum = Math.floor(Math.random() * 120) + 19;
  	$("#randNum").html(game.randNum);
  	game.crystal1 = Math.floor(Math.random() * 12) + 1;
  	game.crystal2 = Math.floor(Math.random() * 12) + 1;
  	game.crystal3 = Math.floor(Math.random() * 12) + 1;
  	game.crystal4 = Math.floor(Math.random() * 12) + 1;
  	$("#score").html(game.score);
  },

  // converts button input to corresponding random number
  convertButton: function(buttonNum) {
  	if (!sameGame) {
  		game.reset();
  		sameGame = true;
  	}

  	var button = parseInt(buttonNum);

  	if (button === 1) {
  		game.crystalValue = game.crystal1;
  	}
  	else if (button === 2) {
  		game.crystalValue = game.crystal2;
  	}
  	else if (button === 3) {
  		game.crystalValue = game.crystal3;
  	}
  	else if (button === 4) {
  		game.crystalValue = game.crystal4;
  	}

  	game.addScore(game.crystalValue);
  },

  // adjusts score and determines if game is won or lost
  addScore: function(crystalValue) {
  	game.score += crystalValue;
  	$("#score").html(game.score);
  	if (game.score < game.randNum) {
  		sameGame = true;
  	}
  	else if (game.score === game.randNum) {
  		sameGame = false;
  		wins++;
  		game.score = 0;
  		$("#wins").html(wins);
  	}
  	else if (game.score > game.randNum) {
  		sameGame = false;
  		losses++;
  		game.score = 0;
  		$("#losses").html(losses);
  	}
  },
};
