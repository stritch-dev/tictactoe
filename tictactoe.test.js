const tictactoe =  require('./tictactoe')
const board =  require('./tictactoe')


 //tictactoe.turn('X',1)

 //test('It can correctly place a player in a space.', () => {
     //expect(tictactoe.board[1]).toBe('X')
 //})

 test('Correctly reports top row win', () => {
   tictactoe.board[1] = 'X'
   tictactoe.board[2] = 'X'
   tictactoe.board[3] = 'X'
	 expect(tictactoe.top('X')).toBe(true)
 })
