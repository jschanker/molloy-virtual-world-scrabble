//Heather C. Starkie
//Virtual World Scrabble
//Object Placement Function



function objPlacement(objArr,neededAmount,minLat,maxLat,minLong,maxLong){
	//function to copy array
	function copyArr(){
		var copy = [];
		objArr.forEach(function(ele){
			copy.push(ele);
		})
		return copy;
	}
	//function to generate random latitude and longitude position
	function generateRandomNum(min,max,precision){
		var rand = Math.random()*(max-min)+min;
		return rand.toPrecision(precision);
	}	 

	var subObjArr = [];
	var copyOfArr = copyArr();
	//console.log(copyOfArr);
	//get random objects for subArr --> reach neededAmount
	while(neededAmount > 0){
		var rand = Math.floor(Math.random()*copyOfArr.length);
		subObjArr.push(copyOfArr[rand]);
		//console.log(subObjArr);
		copyOfArr.splice(rand,1);
		neededAmount -= 1;
	}
	
	//add positions to each object
	subObjArr.forEach(function(ele){
		ele.longitude = generateRandomNum(minLong,maxLong,5);
		ele.latitude = generateRandomNum(minLat,maxLat,5);
	});
	return subObjArr;
}

var myArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var objectArr = [{name:"computer"},{name:"clock"},{name:"book"}];

var c = objPlacement(objectArr,2,0.0200,0.120,0.0200,0.120);
console.log(c);

