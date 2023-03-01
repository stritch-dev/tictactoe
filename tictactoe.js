const prompt = require('prompt-sync')({sigint: true})

const X = 'X' 
const O= 'O'


/*
  board = [ 0, 1, 2,
            3, 4, 5, 
            6, 7, 8 ]
*/

  const  board = [ " ", " ", " ", " ", " ", " ", " ", " ", " " ]

		function isOccupied(space){
			if (board.space == X) { return X }
			else if (board.space == O) { return O }
			else return false
		}

function displayBoard(){
  const horizontal = "--|---|--"
	const verticalBar = " | "
  const top = board[0] + verticalBar + board[1] + verticalBar + board[2] 
  const middle = board[3] + verticalBar + board[4] + verticalBar + board[5] 
  const bottom  = board[6] + verticalBar + board[7] + verticalBar + board[8]

	log( " " )
	log( top )
	log( horizontal )
	log( middle )
	log( horizontal )
	log( bottom )
}

function placePlayer (player, space){
	if (isOccupied(space)) { return false }
	else { 
		board[space] = player 
			return true
	}
}

function everyX(row){
	let result = false;
	for(let i=0; i < row.length; i++){
		if(row[i] === X) { result = true }
		else { result = false}
	}
	return result
}


function everyO(row){
	let result = false;
	for(let i=0; i < row.length; i++){
		if(row[i] === O) { result = true }
		else { result = false}
	}
	return result
}

function isWinner(player) {
	// top
	if ( board[0] === player && board[1] === player && board[2] === player) { return true }

	// horizontalMiddle
	if ( board[3] === player && board[4] === player && board[5] === player) { return true }

	// bottom
	if ( board[6] === player && board[7] === player && board[8] === player) { return true }

	// left
	if ( board[0] === player && board[3] === player && board[6] === player) { return true }

	// verticalCenter
	if ( board[1] === player && board[4] === player && board[7] === player) { return true }

	// right
	if ( board[2] === player && board[5] === player && board[8] === player) { return true }

	// topLeftToBottomRight
	if ( board[0] === player && board[4] === player && board[8] === player) { return true }

	// topRightToBottomLeft
	if ( board[2] === player && board[4] === player && board[6] === player) { return true }

	return false
}

function xTurn(){
	displayBoard()
	log( " " )
  const space = prompt("X, Won't you please choose a space. \n \n")
	if(isOccupied(space)){
	 log("That space has already been taken.")
	 xTurn()
	}

	placePlayer(X, Number(space))
		if(isWinner(X)) { 
			log( "X won." ) 
      process.exit(0) 
  }
}

function oTurn(){
	displayBoard()
	log( " " )
  const space = prompt("O, Won't you please choose a space. \n \n")
	placePlayer(O, Number(space))
		if(isWinner(O)) { 
      log( "O won." ) 
			process.exit(0) 
	}
}


function round(){
	xTurn()
	oTurn()
}

function log(value){ console.log(value) }
function pb() { log(board) }

function game(){
 	round()
 	round()
 	round()
 	round()
 	round()
	console.log("There are no winners.")
}

game()
