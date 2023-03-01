const prompt = require('prompt-sync')({sigint: true})

function getChar() {
  let buffer = Buffer.alloc(1)
  fs.readSync(0, buffer, 0, 1)
  return buffer.toString('utf8')
}

const X = 'X' 
const O= 'O'


/*
	board layout
	0, 1, 2,
	3, 4, 5, 
	6, 7, 8 
*/

const  board = [ " ", " ", " ", " ", " ", " ", " ", " ", " " ]

function isOccupied(space){
	if (board[space] === X) { return X }
	else if (board[space] === O) { return O }
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
	if ( board[0] === player && board[1] === player && board[2] === player) { return true } // top
	if ( board[3] === player && board[4] === player && board[5] === player) { return true } // horizontalMiddle
	if ( board[6] === player && board[7] === player && board[8] === player) { return true } // bottom
	if ( board[0] === player && board[3] === player && board[6] === player) { return true } // left
	if ( board[1] === player && board[4] === player && board[7] === player) { return true } // verticalCenter
	if ( board[2] === player && board[5] === player && board[8] === player) { return true } // right
	if ( board[0] === player && board[4] === player && board[8] === player) { return true } // topLeftToBottomRight
	if ( board[2] === player && board[4] === player && board[6] === player) { return true } // topRightToBottomLeft

	return false
}

function turn(player){
	displayBoard()
	log( " " )
  log(`${player}, it's your turn. \n \n`)
  const space = prompt()
	if(isOccupied(space)){
	 log("** That space has already been taken. **")
	 turn(player)
	}
	if(space.length > 1){
	log("one")
	 log("\n \n ** Please enter a a single digit from 0-8 for a space that is not occupied.  Here is the current board **")
	 turn(player)
	}
	if(! [0,1,2,3,4,5,6,7,8].includes(Number(space))){
	log("two")
	 log("\n \n ** You may only  enter a number 0-8 **") 
	 turn(player)
	}

	placePlayer(player, Number(space))
		if(isWinner(player)) { 
			log( `${player} won.` ) 
      process.exit(0) 
  }
}

function round(){
	turn(X)
	turn(O)
}

function log(value){ console.log(value) }
function pb() { log(board) }

function game(){
 	round()
 	round()
 	round()
 	round()
 	turn(X)
	console.log("There are no winners.")
}

game()
