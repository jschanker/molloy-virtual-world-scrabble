"use strict";
/**
 * scrabbleTiles - This function will load up a tile with its given letter and value
 * @constructor
*/
function ScrabbleTileModel(){
	//Instance Variables
	//Store the letter and value
	this.tileObj = {letter: "", val: -1};
}

/**
 * tileValDatabase - This method will search a database to get the correct value of a tile based on its letter
 * @param {char} - The letter value of the tile
 * @return {number} - The value of that tile with respect to its letter
*/
ScrabbleTileModel.prototype.tileValDatabase = function(letter){
	//Create a database for the tiles and their appropriate value
	var letterChar = JSON.stringify({
		A: 1,
		B: 3,
		C: 3,
		D: 2,
		E: 1,
		F: 4,
		G: 2,
		H: 4,
		I: 1,
		J: 8,
		K: 5,
		L: 1,
		M: 3,
		N: 1,
		O: 1,
		P: 3,
		Q: 10,
		R: 1,
		S: 1,
		T: 1,
		U: 1,
		V: 4,
		W: 4,
		X: 8,
		Y: 4,
		Z: 10
	});

	return JSON.parse(letterChar)[letter];
};

/**
 * setValue - This method will store the information of a tile (Its letter and point value)
 * @param {char} - The letter value of the tile
*/
ScrabbleTileModel.prototype.setValue = function(letter){
	//Set the appropriate letter
	this.tileObj.letter = letter;
	this.tileObj.val = this.tileValDatabase(letter);
};

/**
 * getChar - This method will return the letter of a tile
 * @param {object} - A tile object to extract the letter
 * @return {char} - The letter that corresponds to the tile
*/
ScrabbleTileModel.prototype.getLetter = function(tile){
	return tile.letter;
};

/**
 * getPointVal - This method will return the value of a tile
 * @param {object} - A tile object to extract the value
 * @return {number} - The value that corresponds to the tile
*/
ScrabbleTileModel.prototype.getPointVal = function(tile){
	return tile.val;
};

/**
 * scrabbleBoardModel - This function will load up a grid-like board game given its dimensions
 * @constructor
 * @param {number} numRows - The number of rows to add to the grid
 * @param {number} numCols - The number of columns to add to the grid
 * @param {array} boardArray - The array to save the memory of the grid to
*/
function ScrabbleBoardModel(numRows, numCols, boardArray){
	//Instance Variables
	//Dimensions of the board (Default: 10 x 10)
	this.numRows = numRows;
	this.numCols = numCols;
	this.boardArray = boardArray;

	//Keep track of empty spaces
	this.numOfFreeCells = numRows * numCols;

	//Keep track of players
	this.players = [];
	this.numOfPlayers = 0;

	//Keep track of scores
	this.playerScore = [];

	//Keep track of current tiles
	this.playersTiles = [];
	this.MAX_NUM_OF_TILES = 7;

	//Current player turn
	this.currentPlayerTurn = 0;

	//Create the board
	for(var k = 0; k < numRows; k++){
		this.boardArray[k] = [];
		for(var l = 0; l < numCols; l++){
			this.boardArray[k][l] = "";
		}
	}
}

//Assign the methods to the prototype
/**
 * addPlayer - This function will determine if a given move is possible
 * @param {number} row - The location of the row to test
 * @param {number} col - The location of the column to test
 * @return {boolean} - Whether the move is possible or impossible
*/
ScrabbleBoardModel.prototype.addPlayer = function(playerName){
	//Add the player name
	this.players[this.numOfPlayers] = playerName;

	//Set the score default to 0
	this.playerScore[this.numOfPlayers] = 0;

	//Load up their tiles
	for(var i = 0; i < this.MAX_NUM_OF_TILES; i++){
		this.playerTiles[this.numOfPlayers][i] = new ScrabbleTileModel();
	}

	//Increment by 1
	this.numOfPlayers++;

	alert(playerName + " was added to the game!");
};

ScrabbleBoardModel.prototype.getTileAtPosition = function(row, col){
	return this.boardArray[row][col];
};

/**
 * makeMove - This function will determine if the proper move can be made
 * @param {number} row - The location of the row for the first letter in the word (The beginning placement of a tile)
 * @param {number} col - The location of the column for the first letter in the word (The beginning placement of a tile)
 * @param {string} word - The word that is trying to be created (The newly created word)
 * @param {boolean} direction - The direction of the word that is being created. True for Vertical, False for Horizontal
 * @return {boolean} - Whether the move was made or not
*/
ScrabbleBoardModel.prototype.makeMove = function(row, col, word, direction){
	//Determine if the move is valid by getting the boolean value
	//isValidMove needs to give an object containing the following:
	//{validMove: boolean, arrayWords: array of words created (Empty array if none are made)}

	//False - Horizontal
	//True- Vertical
	if(this.isValidMove(row, col)){

	}
};

/**
 * determineWinner - This function will determine the winner of the game
 * @return {string} - The name of the player who has the highest score
 * Needs to edit just in case if its a tie between players
*/
ScrabbleBoardModel.prototype.determineWinner = function(){
	//Figure out who score is the largest
	var maxScore = this.playerScore[0];
	var indexOfWinner = 0;

	for(var i = 0; i < this.numOfPlayers; i++){
		if(maxScore < this.playerScore[i]){
			maxScore = this.playerScore[i];
			indexOfWinner = i;
		}
	}

	//Return the name of the winner
	return this.players[indexOfWinner];
};

/**
 * specialPosDatabase - This function will search the database to determine if a position is a special space
 * @param {row} - The row to check for the special position
 * @param {col} - The column to check for the special position
 * @return {number} - A numerical value to denote if the position is either 0: None, 1: Double Letter, 2: Triple Letter, 3: Double Word, 4: Triple Word
*/
ScrabbleBoardModel.prototype.specialPosDatabase = function(){

};