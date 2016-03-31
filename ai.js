var wordList = ["desk", "chair", "book", "computer", "tree"];
	/**
	* Calculates best possible score for a player given that the other player
	* always makes the best possible move.
	* @function
	*
	* @param {Object} boardModel - A model of a Scrabble game.
	* @param {boolean} isMaximizingPlayer - Player to make move. 
	True for maximizing player(Player 1), false for minimizing player(Player 2).
	*/
function getBestScore(boardModel, isMaximizingPlayer) 
{ 	
	var bestScore = 0;
	boardModel.board = boardModel.getCurrentBoard();
	//base case
	if(boardModel.isGameOver())
	{
		if(boardModel.playerWin() == boardModel.players[0])
			bestScore = boardModel.playerScore[0];
		else
			bestScore = boardModel.playerScore[1];    
	}
	//player 1's turn
	else if(isMaximizingPlayer)
	{
		var currentMax = -Infinity;
		var isVerticalMove = true;
		//make a move for each board cell
		for(var i = 0; i < boardModel.row; i++)
		{
			for(var j = 0; j < boardModel.col; j++)
			{
				//make a move using an array of all possible words
				for(var k = 0; k < wordList.length(); k++)
				{
					//make a move horizontally and vertically
					for(var l = 0; l < 2; l++)
					{
						if(boardModel.isValidMove(i, j))
						{
							var reducedBoard =  new Model(boardModel.row, boardModel.col);
							reducedBoard.players = boardModel.getCurrentPlayers();
							reducedBoard.board = boardModel.getCurrentBoard();
							reducedBoard.currentTurn = 0;
							reducedBoard.makeMove(i, j, wordList[k], isVerticalMove);
							recursiveScore = getBestScore(reducedBoard, false);
							currentMaxScore = Math.max(currentMax, recursiveScore);
						}
						isVerticalMove = !isVerticalMove;
					}
				}
			}
		}
		bestScore = currentMax;
	}
	//player 2's turn
	else
	{
		var currentMin = Infinity;
		var isVerticalMove = true;
		//make a move for each board cell
		for(var i = 0; i < boardModel.row; i++)
		{
			for(var j = 0; j < boardModel.col; j++)
			{
				//make a move using an array of all possible words
				for(var k = 0; k < wordList.length(); k++)
				{
					//make a move horizontally and vertically
					for(var l = 0; l < 2; l++)
					{
						if(boardModel.isValidMove(i, j))
						{
							var reducedBoard =  new TttModel(boardModel.row, boardModel.col);
							reducedBoard.players = boardModel.getCurrentPlayers();
							reducedBoard.board = boardModel.getCurrentBoard();
							reducedBoard.currentTurn = 1;
							reducedBoard.makeMove(i, j, wordList[k], isVerticalMove);
							recursiveScore = getBestScore(reducedBoard, false);
							currentMinScore = Math.min(currentMin, recursiveScore);
						}
						isVerticalMove = !isVerticalMove;
					}
				}
			}
		}
		bestScore = currentMin;
	}

	return bestScore;         
}

