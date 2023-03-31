const prompt = require('prompt-sync')({sigint: true})

const X = 'X' 
const Oh = 'O'
let message = "" // not sure how else to test the error message with jest

/*
	 board layout
	 1, 2, 3,
	 4, 5, 6, 
	 7, 8, 9 
 */

const board = ["not used", " ", " ", " ", " ", " ", " ", " ", " ", " " ]
const isOpen = space => board[space] === " "
const isOccupied = space => !isOpen(space)


const explainatoryBoard = () => displayBoard(["not used","1","2","3","4","5","6","7","8","9"])
const explain = () => {
	log("\n Choose the space you want by pressing the corresponding number and then <Enter>\n")
	explainatoryBoard() 
	log("\n Let's begin.\n\n")
}


const displayBoard = function (customBoard){
	const horizontal = "--|---|--\n"
	const vertical = " | "
  const _board = customBoard === undefined ? board : customBoard

		log( 
		 " " + _board[1] + vertical + _board[2] + vertical + _board[3]  + "\n" +
		 " " + horizontal +
		 " " + _board[4] + vertical + _board[5] + vertical + _board[6] + "\n" +
		 " " + horizontal +
		 " " + _board[7] + vertical + _board[8] + vertical + _board[9]
		)
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
	const win = 
		top(player) ||
		horizontalMiddle (player) ||
		bottom (player) ||
		left (player) ||
		verticalCenter (player) ||
		right (player) ||
		topLeftToBottomRight (player) ||
		topRightToBottomLeft (player)
		return win
}

const turn = function(player){
	displayBoard()
	itsYourTurn(player)

	const space = getValidSpace(player);
	placePlayer(player, Number(space))
		if(isWinner(player)) { 
			log( `\n ! ! !         ! ! !` ) 
			log( ` ! ! !  ${player} won  ! ! !` ) 
			log( ` ! ! !         ! ! !\n` ) 
			displayBoard()
			thanks()
			process.exit(0) 
		}
}

const round = function(){
	turn(X)
	turn(Oh)
}


const getValidSpace = player => {
	const space = Number(prompt(" "))

	if([1,2,3,4,5,6,7,8,9].includes(Number(space)) && isOpen(space)){
				return space
	} else {
		log( "** Please enter a single digit from 1-9 for a space that is not occupied. **")
		return getValidSpace (player)
	}
}

const log = function (value){ console.log(value) }
const itsYourTurn = (player) =>	log(`\n ${player}, it's your turn. `)
const thanks =  () => log("\n Thanks for playing.\n See you next time.\n")

const game = function (){
	round()
	round()
	round()
	round()
	turn(X)
	console.log("\n\n There are no winners.") 
}

console.clear()
explain()

	module.exports = {
		game, 
		turn,
		placePlayer,
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
		topRightToBottomLeft,
		isOccupied,
		isOpen,
		getValidSpace
	}
