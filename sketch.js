var database;
var gameState = 0;
var playerCount = 0;
var form, player, game;
var allPlayers;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
    background("grey");
    
    if (playerCount == 4) {
        game.update(1);
    }

    if (gameState == 1) {
        game.play();
    }
}