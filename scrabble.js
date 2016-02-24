

var createGameBoard = function(rows,cols){
	//create
	var t = document.createElement("TABLE");
	t.setAttribute("id","gameBoard");
	
	
	
	for(var i=0;i<rows;i++){

		//create row and append to table
		var r = document.createElement("TR");
		var rowId = i.toString();
		r.setAttribute("id",rowId);
		t.appendChild(r);

		for(var j=0;j<cols;j++){

			var c = document.createElement("TD");
			var cellId = rowId + j.toString();
			c.setAttribute("id",cellId);
			c.setAttribute("class","game-grid-cell");
			t.appendChild(c);
		}
	}
	document.getElementById("boardWrap").appendChild(t);
}


createGameBoard(10,10);