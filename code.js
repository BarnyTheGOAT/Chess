var gameboard = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜']
]; // the gameboard data of what pieces are where

var side = [
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
]; // the gameboard data of what pieces belong to which side

var turn = "w"; // whose turn it is


//function to put all the html code together and add it to the html file.
function render_board() {

    var span1 = "<span class = 'spot_white spot";
    var sidewhite = " side_white'";
    var sideblack = " side_black'";
    var span_id_create = 'id = "'
    var onclick = '" onclick = "piece_clicked(this.id)">'
    var noside = " no_side'"
    var span2 = "<span class = 'spot_black spot"
    var span3 = '</span>';
    var br = '<br>';
    var content = '';

    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            if ((x+y)%2 == 0){
                content += span1;
            } else {
                content += span2;
            }
            if (side[x][y] == 'w'){
                content += sidewhite;
            } else if (side[x][y] == 'b') {
                content += sideblack;
            } else {
                content += noside;
            }
            content += span_id_create;
            content += String(x) + String(y);
            content += onclick;
            content += gameboard[x][y];
            content += span3;
        }
        content += br;
    }
    document.getElementById('divBoard').innerHTML = content;
    setTimeout(() => {
        render_board();
    }, 500);// calls the function every 500 milliseconds
}

window.onload = function(){
    render_board();
} // starts rendering the board from when the window loads, to prevent error( try taking the window.onload part out and see what happenes )


var click1 = 0;
var click1id = "";



// function for moving the pieces when a piece is clicked
function piece_clicked(id){
    console.log(click1, click1id, id);
    if (click1 == 0){
        click1 = 1;
        click1id = id;
    } else {
        if (turn == "w"){
            if (gameboard[click1id[0]][click1id[1]] == "♟"){// moving a white pawn // can't cut other pieces
                if (side[click1id[0]][click1id[1]] == "w"){ // if the piece clicked is white
                    if (id[1] == click1id[1] && ((0 < (click1id[0] - id[0]) < 3 &&click1id[1] == 6&&gameboard[5][id[1]] == "")||(click1id[0] - id[0] == 1))){ 
                        if (gameboard[id[0]][id[1]] == ""){ // if its empty
                            gameboard[id[0]][id[1]] = "♟";
                            side[id[0]][id[1]] = "w";
                            gameboard[click1id[0]][click1id[1]] = "";
                            side[click1id[0]][click1id[1]] = "";
                        }
                    }
                }
            }
            click1 = 0;
        } else if (turn == "b"){
            //nothing yet...
        }
    }
}