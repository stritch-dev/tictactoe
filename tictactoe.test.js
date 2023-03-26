const tictactoe =  require("./tictactoe")
const X = "X"

describe("Placement", () => {
    test("Places player in valid unclaimed spot", () => {
		tictactoe.placePlayer(X,4)
	})

  test("Does not let player take an occupied spot", () => {
		tictactoe.placePlayer(X,4)
		tictactoe.placePlayer("O",4)
		expect(tictactoe.board[4]).toBe(X)
	})

	// TODO fix this
  test("Allows input to be only 1-9",  () => {
		tictactoe.placePlayer("O",4)
		expect(tictactoe.board[0]).toBe(tictactoe.blankBoard)
	})

})

describe("Reports wins correctly", () => {

		test("Correctly reports top row win", () => {
				tictactoe.board[1] = X
				tictactoe.board[2] = X
				tictactoe.board[3] = X
				expect(tictactoe.top(X)).toBe(true)
				})
		test("Correctly reports horizontalMiddle row win", () => {
				tictactoe.board[4] = X
				tictactoe.board[5] = X
				tictactoe.board[6] = X
				expect(tictactoe.horizontalMiddle(X)).toBe(true)
				})
		test("Correctly reports bottom row win", () => {
				tictactoe.board[7] = X
				tictactoe.board[8] = X
				tictactoe.board[9] = X
				expect(tictactoe.bottom(X)).toBe(true)
				})
		test("Correctly reports left row win", () => {
				tictactoe.board[1] = X
				tictactoe.board[4] = X
				tictactoe.board[7] = X
				expect(tictactoe.left(X)).toBe(true)
				})
		test("Correctly reports verticalCenter row win", () => {
				tictactoe.board[2] = X
				tictactoe.board[5] = X
				tictactoe.board[8] = X
				expect(tictactoe.verticalCenter(X)).toBe(true)
				})
		test("Correctly reports right row win", () => {
				tictactoe.board[3] = X
				tictactoe.board[6] = X
				tictactoe.board[9] = X
				expect(tictactoe.right(X)).toBe(true)
				})
		test("Correctly reports topLeftToBottomRight row win", () => {
				tictactoe.board[1] = X
				tictactoe.board[4] = X
				tictactoe.board[9] = X
				expect(tictactoe.topLeftToBottomRight(X)).toBe(true)
				})

		test("Correctly reports right top to bottom left win", () => {
				tictactoe.board[3] = X
				tictactoe.board[4] = X
				tictactoe.board[7] = X
				expect(tictactoe.topRightToBottomLeft(X)).toBe(true)
				})

})
