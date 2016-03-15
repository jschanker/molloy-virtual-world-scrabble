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
		if(boardModel.playerWin() == "P1")
			bestScore = boardModel.getPlayerScore("P1");
		else if(boardModel.playerWin() == "P2")
			bestScore = boardModel.getPlayerScore("P2");    
		else
			bestScore = 0;
	}
	//player 1's turn
	else if(isMaximizingPlayer)
	{
		var currentMax = -Infinity;
		for(var i = 0; i < boardModel.row; i++)
		{
			for(var j = 0; j < boardModel.col; j++)
			{
				if(boardModel.isValidMove(i, j))
				{
					var reducedBoard =  new Model(boardModel.row, boardModel.col);
					reducedBoard.players = boardModel.getCurrentPlayers();
					reducedBoard.board = boardModel.getCurrentBoard();
					reducedBoard.currentTurn = 0;
					reducedBoard.makeMove(i, j);
					recursiveScore = getBestScore(reducedBoard, false);
					currentMaxScore = Math.max(currentMax, recursiveScore);
				}
			}
		}
		bestScore = currentMax;
	}
	//player 2's turn
	else
	{
		var currentMin = Infinity;
		for(var i = 0; i < boardModel.row; i++)
		{
			for(var j = 0; j < boardModel.col; j++)
			{
				if(boardModel.isValidMove(i, j))
				{
					var reducedBoard =  new TttModel(boardModel.row, boardModel.col);
					reducedBoard.players = boardModel.getCurrentPlayers();
					reducedBoard.board = boardModel.getCurrentBoard();
					reducedBoard.currentTurn = 1;
					reducedBoard.makeMove(i, j);
					recursiveScore = getBestScore(reducedBoard, false);
					currentMinScore = Math.min(currentMin, recursiveScore);
				}
			}
		}
		bestScore = currentMin;
	}

	return bestScore;         
}