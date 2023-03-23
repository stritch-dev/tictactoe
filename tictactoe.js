const prompt = require('prompt-sync')({sigint: true})

const X = 'X' 
const Oh = 'O'

/*
	board layout
	1, 2, 3,
	4, 5, 6, 
	7, 8, 9 
*/

const  board = ["not used", " ", " ", " ", " ", " ", " ", " ", " ", " " ]
const isOccupied = space => board[space] === X || board[space] === Oh
const isOpen = space => !isOccupied(space)

const displayBoard = function (){
  const horizontal = "--|---|--"
	const verticalBar = " | "
  const top = board[1] + verticalBar + board[2] + verticalBar + board[3] 
  const middle = board[4] + verticalBar + board[5] + verticalBar + board[6] 
  const bottom  = board[7] + verticalBar + board[8] + verticalBar + board[9]

	log( " " )
	log( top )
	log( horizontal )
	log( middle )
	log( horizontal )
	log( bottom )
}

const placePlayer = function (player, space){
	isOpen(space) && (board[space] = player)
}

const top =                  player => board[1] === player && board[2] === player && board[3] === player
const horizontalMiddle =     player => board[4] === player && board[5] === player && board[6] === player 
const bottom =               player  =>  board[7] === player && board[8] === player && board[9] === player 
const left =                 player  => board[1] === player && board[4] === player && board[7] === player 
const verticalCenter =       player  => board[2] === player && board[5] === player && board[8] === player
const right =                player  => board[3] === player && board[6] === player && board[9] === player
const topLeftToBottomRight = player  => board[1] === player && board[5] === player && board[9] === player
const topRightToBottomLeft = player  => board[3] === player && board[5] === player && board[7] === player

const isWinner  = function (player) {
	log("+- isWinner")
	log(board)
		return 
		top(player) ||
		horizontalMiddle (player) ||
		bottom (player) ||
		left (player) ||
		verticalCenter (player) ||
		right (player) ||
		topLeftToBottomRight (player) ||
		topRightToBottomLeft (player)
}

const turn = function(player, chosenSpace){
	let space = chosenSpace;
	displayBoard()
		log(`${player}, it's your turn. `)
		if (space == null){
			space = prompt()
				log(`two space = ${space} `)
		}
	if(isOccupied(space)){
		log("** That space has already been taken. **")
			log(`three space = ${space} `)
			turn(player)
	}
	if(space.length > 1){
		log(`force space = ${space} `)
			log("\n \n ** Please enter a a single digit from 1-9 for a space that is not occupied.  Here is the current board **")
			turn(player)
	}
	if(! [1,2,3,4,5,6,7,8,9].includes(Number(space))){
		log("\n \n ** You may only enter a number 1-8 **") 
			turn(player)
	}

	placePlayer(player, Number(space))
		if(isWinner(player)) { 
			log( `\n! ! !         ! ! !` ) 
				log( `! ! !  ${player} won  ! ! !` ) 
				log( `! ! !         ! ! !` ) 
				displayBoard()
				process.exit(0) 
		}
}

const round = function(){
	turn(X)
		turn(Oh)
}

const log = function (value){ console.log(value) }
const pb = function () { log(board) }

const game = function (){
	round()
		round()
		round()
		round()
		turn(X)
		console.log("There are no winners.")
}


module.exports = {
	game, 
	turn,
	displayBoard,
	board,
	isWinner,
	top, 
	horizontalMiddle,
	bottom,
	left,
	verticalCenter,
	right,
	topLeftToBottomRight,
	topRightToBottomLeft
}
