
const X = 'X' 
const O= 'O'


let board = [ 0, 1, 2,
                3, 4, 5, 
                6, 7, 8 ]

function isOccupied(space){
  console.log("- - - - - - - - isOccupied  - - - - - - ")
  console.log("space ", space)
  if (board.space == X) { return X }
  else if (board.space == O) { return O }
  else return false
}

function placePlayer (player, space){
  console.log("- - - - - - - - placePlayer  - - - - - - ")
  console.log("player -", player)
  console.log("space -", space)
pb()
  if (isOccupied) { return false }
  else { 
pb()
    board[space] = player 
pb()
    return true
  }
}

function isWinner(player) {
  console.log("- - - - - - - - isWinner  - - - - - - ")
  const top = [0,1,2]
  const horizontalMiddle = [3,4,5]
  const bottom = [6,7,8]
  const left = [0,4,8]
  const verticalCenter = [1,4,7]
  const right = [2,5,8]
  const topLeftToBottomRight = [0,4,8]
  const topRightToBottomLeft = [2,4,6]

  if (top.every( value => value === X || value === O))  return top[0] 
  if (horizontalMiddle.every( value => value === X || value === O)) return top[0] 
  if (bottom.every( value => value === X || value === O)) return top[O]
  if (left.every( value => value === X || value === O)) return top[0] 
  if (verticalCenter.every( value => value === X || value === O)) return top[0] 
  if (right.every( value => value === X || value === O)) return top[0] 
  if (topLeftToBottomRight.every( value => value === X || value === O)) return top[0] 
  if (topRightToBottomLeft.every( value => value === X || value === O)) return top[0] 
}

function nextPlayer(player){
  console.log("- - - - - - - - nextPlayer  - - - - - - ")
  const next = player === X ? O : X  
  return next
}

function pb() {
	console.log(board)
}

function game(){
  console.log("- - - - - - - - game  - - - - - - ")
  //pb() 
  placePlayer(X, 0)
  placePlayer(O, 1)

  //pb()
  placePlayer(X, 2)
  placePlayer(O, 3)

//
  //pb()
  placePlayer(X, 4)
  placePlayer(O, 5)


  //pb()
  placePlayer(X, 6)
  placePlayer(O, 7)

  //pb()
}

game()
