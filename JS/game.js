class Game {
    constructor () {


    }
    getState () {
        var stateRef =  database.ref("gameState");
        stateRef.on("value",function(data){
            gameState = data.val();
        });
    }

    update(state) {
        database.ref("/").update({
            gameState:state
        })
    }

    start() {
        if (gameState == 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }

    play () {
        form.hide();
        textSize(30);
        text("Let's go!", 120, 100);
        Player.getPlayerInfo();

        if (allPlayers != undefined) {
            var displayPosition = 130;
            for (var plr in allPlayers) {
                if (plr == "Player"+player.index) {
                    fill("red");
                }
                else {
                    fill("yellow");
                }

                displayPosition = displayPosition+30;
                textSize(20);
                text(allPlayers[plr].name+":"+allPlayers[plr].distance, 120, displayPosition);
            }
        }

        if (keyIsDown(UP_ARROW) && player.index != null) {
            player.distance = player.distance+30;
            player.update();
        }
    }
}