const tictactoe =  require("./tictactoe")
const X = "X"


describe("Reports whether space is taken or not.", () => {
    it("Knows a blank when it sees it.", () => {
			const open = tictactoe.isOpen(1)
		  const occupied = tictactoe.isOccupied(1)
			expect(open).toBe(true)
		  expect(occupied).toBe(false)

		})

    test("Reports that a space is occupied when it is.", () => {
			tictactoe.board[1] = X
			expect(tictactoe.isOccupied(1)).toBe(true)
		})

    test("Reports that a space is open when it is.", () => {
			expect(tictactoe.isOpen(9)).toBe(true)
		})

    test("Reports that a space is not open when it is occupied.", () => {
			tictactoe.board[1]
			expect(tictactoe.isOpen(1)).toBe(false)
		})

	})

describe("Placement", () => {
    test("Places player in valid unclaimed spot", () => {
		tictactoe.placePlayer(X,4)
	})

  test("Does not let player take an occupied spot", () => {
		tictactoe.placePlayer(X,4)
		tictactoe.placePlayer("O",4)
		expect(tictactoe.board[4]).toBe(X)
	})

	// TODO find a way to test this so that it does not actually wait for user input.
  test.skip("Allows input to be only 1-9",  () => {
		const mockPrompt = jest.fn(() => 1)
		global.prompt = mockPrompt()
		const isOpen = jest.fn(()=>true)
		const spy = jest.spyOn(console, "log")
		const expected = "** Please enter a single digit from 1-9 for a space that is not occupied. **"

		tictactoe.getValidSpace(10,isOpen, mockPrompt)

		expect(spy).toHaveBeenCalledWith(expected)
	})



// TODO fix this so that it works. Right now it waits for user input from the keyboard.
test.skip('produces correct log message when input is invalid', () => {
  // Mock the prompt function to return an invalid input
  const mockPrompt = jest.fn(() => '0');
  global.prompt = mockPrompt;

  // Mock the isOpen function to always return false
  const mockIsOpen = jest.fn(() => false);
  global.isOpen = mockIsOpen

  // Spy on the console.log method
  const spy = jest.spyOn(console, 'log');

  // Call the function and check that it produces the expected log message
  expect(tictactoe.getValidSpace('X')).toBe(1);
  expect(consoleSpy).toHaveBeenCalledWith('** Please enter a single digit from 1-9 for a space that is not occupied. **');

  // Check that the prompt and isOpen functions were called twice with the correct arguments
  expect(mockPrompt.mock.calls.length).toBe(2);
  expect(isOpen.mock.calls.length).toBe(2);
  expect(isOpen.mock.calls[0][0]).toBe(1);
  expect(isOpen.mock.calls[1][0]).toBe(0);
});





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
