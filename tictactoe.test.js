const tictactoe =  require('./tictactoe')


 //tictactoe.turn('X',1)

 //test('It can correctly place a player in a space.', () => {
     //expect(tictactoe.board[1]).toBe('X')
 //})

 test('Correctly reports top row win', () => {
	 tictactoe.turn('X',1)
	 tictactoe.turn('X',2)
	 tictactoe.turn('X',3)
	 expect(tictactoe.isWinner('X')).toBe(true)
 })
