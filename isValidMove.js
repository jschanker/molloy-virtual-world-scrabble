function isValidWord(word,positionOfFirstLetter,direction){
	validWord = false;
	if(word in wordDictionary){
		var copyOfCurrentModel = copyModel(this);
		var positionOfLetter = 0;
		validWord = true;
		var wordConnected = false;
		while(positionOfLetter < word.length || validWord ===true){
			if(isValidTilePlacement(word,positionOfFirstLetter,positionOfLetter,direction,this.board){
				if(direction === "horizontal"){
					if(word[positionOfLetter] === this.board[positionOfFirstLetter.row][positionOfFirstLetter.col + positionOfLetter]){
						wordConnected = true;
					}
					copyOfCurrentModel[positionOfFirstLetter.row][positionOfFirstLetter.col + positionOfLetter] = word[positionOfLetter];
				}else{
					if(word[positionOfLetter] === this.board[positionOfFirstLetter.row + positionOfLetter][positionOfFirstLetter.col]){
						wordConnected = true;
					}
					copyOfCurrentModel[positionOfFirstLetter.row + positionOfLetter][positionOfFirstLetter.col] = word[positionOfLetter];
				}
			}else{
				validWord = false;
			}
			positionOfLetter++;
		}
		if(this.movesPlayed === 0){
			if(copyOfCurrentModel[gameBoardSize.row/2][gameBoardSize.col/2] !== ""){
				wordConnected = true;
			}
		}
		if(!(wordConnected){
			validWord =false;
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