var wordDictionary = ["bench","car","bus","chair"]; // Will require a list of valid words that will be accepted by the game board 

function getTileAt(row,col){
	return this.board[row][col];
}// Gets the char tile at on the board at a given position and returns it 

function copyBoard(){}; //returns a copy of the game board 

function wordInDictionary(word{
	if(wordDictionary.includes(word)){
	 return true;    
	}
	else {
	    return false;    
	}
}

var board = [];
var dir = "vertical";
var dirh = "horizontal";

for(var i =0; i<=10;i++){
    board.push([]);
    for (var j = 0; j<10;j++){
        board[i].push(' ');
    }
}



var apple = "apple";

for(k = 0; k<apple.length;k++){
    board[3][k+1] = apple[k]; 
}

console.log(board);


function validTilePlacement(word,positionOfFirstLetter,positionOfLetter,direction,boardCopy){
    var flRow = positionOfFirstLetter.row;
	var flCol = positionOfFirstLetter.col;
	var letterToCheck = board[flRow][flCol];

	
if(direction === "vertical"){
			
			
			//while(board[flRow + i][flCol] === ''){
				
				//if(wordInDictionary(word[positionOfLetter] + board[flRow][flCol]) || ){

				//}
				console.log(board[flRow][flCol]);
                if(board[flRow][flCol] === word[positionOfLetter]){
                var i = 1;
                var validAtPosition = false;
                
                for(i; i < word.length; i++){
                  
				if(board[flRow+i][flCol] === ' ' && board[flRow+i][flCol-1]=== ' ' &&board[flRow+i][flCol+1]===' '){
				    board[flRow+i][flCol] = word[positionOfLetter+i];
					validAtPosition = true;
					
				}
				
				else {
				    return false;
				}
                    //i++;
                    console.log(word[i]);
                    
                }
                return validAtPosition;
			


				//i++;
			//}
		}
		else {return false;}
}//Checks to see if a word is being played vertically then checks to see if the letters in that word can be played returning true or false;

if (direction === 'horizontal'){
    console.log(board[flRow][flCol]);
    if(board[flRow][flCol] === word[positionOfLetter]){
        var k = 1;
       var validAtPositionn = false;
       
        for(k; k< word.length; k++){
            
            if(board[flRow][flCol+k] === ' ' && board[flRow-1][flCol+k] === ' ' && board[flRow+1][flCol+k] === ' '){
                board[flRow][flCol+k] = word[positionOfLetter+k];
                validAtPositionn = true;
            }
            
            else{ 
                return false; 
                
            }
            
            console.log(word[k]);
            
    
        }
        return validAtPositionn;
        
        
    }
    else {return false;}
}//Checks to see if a word is being played horizontally then checks to see if all tiles in the word can be played returning true or false;
    
}

var fstPos = {
    row:3,
    col:4
};

var sndPos = {
    row:3,
    col:2
};

var thrdPos = {
    row:6,
    col:4
};

var letPos = 0;

console.log(validTilePlacement("lens",fstPos,letPos,dir,board));
console.log(board);

console.log(validTilePlacement("plan",sndPos,letPos,dir,board));

console.log(board);

console.log(validTilePlacement("star",thrdPos,letPos,dirh,board));
console.log(board);

console.log(validTilePlacement("star",fstPos,letPos,dirh,board));
console.log(board);