function isValidWord(word,positionOfFirstLetter,direction){
	validWord = false;
	if(word in wordDictionary){
		var copyOfCurrentModel = copyModel(this);
		var positionOfLetter = 0;
		validWord = true;
		while(positionOfLetter < word.length || validWord ===true){
			if(isValidTilePlacement(word,positionOfFirstLetter,positionOfLetter,direction,this.board){
				if(direction === horizontal){
					copyOfCurrentModel[positionOfFirstLetter.row][positionOfFirstLetter.col + positionOfLetter] = word[positionOfLetter];
				}else{
					copyOfCurrentModel[positionOfFirstLetter.row + positionOfLetter][positionOfFirstLetter.col] = word[positionOfLetter];
				}
			}else{
				validWord = false;
			}
			positionOfLetter++;
		}
	}else{
		validWord = false;
	}	
	return validWord;
}

function copyModel(currentModel){
	copyOfCurrentModel = new Model();
	copyOfCurrentModel.gameBoardSize = currentModel.gameBoardSize;
	copyOfCurrentModel.createBoard(currentModel.gameBoardSize[0],currentModel.gameBoardSize[1]);
	for(var rowOfCopy = 0; rowOfCopy < currentModel.gameBoardSize[0]; rowOfCopy++){
		for(var colOfCopy = 0; colOfCopy < currentModel.gameBoardSize[1]; colOfCopy++){
			copyOfCurrentModel.gameBoard[rowOfCopy][colOfCopy] = currentModel.gameBoard[rowOfCopy][colOfCopy];
		}
	}
	copyOfCurrentModel.players = currentModel.players;
	copyOfCurrentModel.movesPlayed = currentModel.movesPlayed;
	copyOfCurrentModel.numOfPlayers = currentModel.numOfPlayers;
	copyOfCurrentModel.winner = currentModel.winner;
	copyOfCurrentModel.lastMove.playerNum = currentModel.lastMove.playerNum;
	copyOfCurrentModel.lastMove.symbol = currentModel.lastMove.symbol;
	copyOfCurrentModel.lastMove.row = currentModel.lastMove.row;
	copyOfCurrentModel.lastMove.col = currentModel.lastMove.col;
	return copyOfCurrentModel;
}