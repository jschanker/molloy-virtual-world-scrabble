var objectList = ["computer", "clock", "chair", "shoe", "tire"];

window.addEventListener('DOMContentLoaded', function() {
	var canvas = document.getElementById('renderCanvas'); 
	var engine = new BABYLON.Engine(canvas, true); 
	var createScene = function() { 
		var scene = new BABYLON.Scene(engine);

		function createObjects(array){
			for(var index = 0; index < array.length; index++){
				var value = Math.round(Math.random()) * 2 - 1;
				var objectXPosition = (Math.random() * (30 - 1) + 1) * value;
				//var objectYPosition = Math.random() * (3 - 1) + 1;
				var objectZPosition = (Math.random() * (30 - 1) + 1) * value;
				array[index] = BABYLON.Mesh.CreateBox(array[index] + "1", 1, scene); // creates object
				array[index].position = new BABYLON.Vector3(objectXPosition, 0, objectZPosition); // places object

				var materialList = array.slice(); //copies array
				materialList[index] = new BABYLON.StandardMaterial(materialList[index] + "material", scene); //makes new material
				var Color1random = Math.round(Math.random());
				var Color2random = Math.round(Math.random());
				var Color3random = Math.round(Math.random());
				materialList[index].diffuseColor = new BABYLON.Color3(Color1random, Color2random, Color3random); //sets color of new material
				array[index].material = materialList[index]; // assigns material to object
				console.log(array[index] + " X: " + objectXPosition + " Y: 0" + " Z: " + objectZPosition + " Color: " + materialList[index].diffuseColor);

			}
		};
		function moveObjects(array){
			/*
			for(var index = 0; index < array.length; index++){
				var value = Math.round(Math.random()) * 2 - 1;
				var objectXPosition = (Math.random() * (30 - 1) + 1) * value;
				//var objectYPosition = Math.random() * (3 - 1) + 1;
				var objectZPosition = (Math.random() * (30 - 1) + 1) * value;
				array[index].position = new BABYLON.Vector3(objectXPosition, 0, objectZPosition); // places object

			}
			*/
		}



		var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0,5,-10), scene);
		camera.setTarget(BABYLON.Vector3.Zero());
		camera.attachControl(canvas, false);
		var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);

		//***//KELLENBERG//***//
		var kellenbergScaleLength = 7; //x
		var kellenbergScaleWidth = 3; //z
		var kellenbergScaleHeight = 5; //y
		var kellenbergDimensions = new BABYLON.Vector3(kellenbergScaleLength, kellenbergScaleHeight, kellenbergScaleWidth);

		var kellenbergCenter = BABYLON.Mesh.CreateBox('kbergCenter', 4, scene);
		kellenbergCenter.position = new BABYLON.Vector3(0, 1, 36);
		kellenbergCenter.scaling = kellenbergDimensions;
		
		//---
		var kellenbergWingPositionOffset = 25;
		var kellenbergWingRotation = 0.436332; //25 degrees

		var kellenbergWingLeft = BABYLON.Mesh.CreateBox('kbergLeft', 4, scene);
		//kellenbergWingLeft.parent = kellenbergCenter; 
		kellenbergWingLeft.scaling = kellenbergDimensions;
		kellenbergWingLeft.rotation.y = -kellenbergWingRotation; 
		kellenbergWingLeft.position = new BABYLON.Vector3(-kellenbergWingPositionOffset, 1, 30); //position WITHOUT parenting
		//kellenbergWingLeft.position = new BABYLON.Vector3(-5,0,0); //position WITH parenting


		var kellenbergWingRight = BABYLON.Mesh.CreateBox('kbergRight', 4, scene);
		//kellenbergWingRight.parent = kellenbergCenter; 
		kellenbergWingRight.scaling = kellenbergDimensions;
		kellenbergWingRight.rotation.y = kellenbergWingRotation 
		kellenbergWingRight.position = new BABYLON.Vector3(kellenbergWingPositionOffset, 1, 30); //position WITHOUT parenting
		//kellenbergWingRight.position = new BABYLON.Vector3(5,0,0); //postion WITH paretnting

		//***//KELLENBERG//***//

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		var skyBridge = BABYLON.Mesh.CreateBox('skybridge', 3, scene);
		skyBridge.position = new BABYLON.Vector3(-46,3,17);
		skyBridge.rotation.y = -0.750492; //-43 degrees
		skyBridge.scaling.x = 9;


		var casey = BABYLON.Mesh.CreateBox('casey', 4, scene);
		casey.scaling = new BABYLON.Vector3(4, 4, 6);
		casey.position = new BABYLON.Vector3(-61,3,-11);
		
		//casey.rotation.y = -1.13446; //-65

		var caseySkyBrigde = BABYLON.Mesh.CreateBox("caseyBridge", 4, scene);
		caseySkyBrigde.scaling = new BABYLON.Vector3(4,4,4)
		caseySkyBrigde.position = new BABYLON.Vector3(-58,3,5);
		caseySkyBrigde.rotation.y = -0.750492; //-43 degrees

		//***//PUBLIC SQUARE//***//
		var publicSquareMain = BABYLON.Mesh.CreateBox("psMain", 4, scene);
		publicSquareMain.position = new BABYLON.Vector3(-10,2,-34);
		publicSquareMain.scaling = new BABYLON.Vector3(6, 4,3);


		var publicSquareMadison = BABYLON.Mesh.CreateBox('psMadison', 4, scene);
		publicSquareMadison.position = new BABYLON.Vector3(10,0,-34);
		publicSquareMadison.scaling = new BABYLON.Vector3(4,3,3);

		//***//PUBLIC SQUARE//***//


		var hagan = BABYLON.Mesh.CreateBox('hagan', 4, scene);
		hagan.position = new BABYLON.Vector3(40.1,2,-29);
		hagan.scaling = new BABYLON.Vector3(3,4,7.5);


		var other = new BABYLON.Mesh.CreateBox("o", 4, scene);
		other.position = new BABYLON.Vector3(-55, -4, -43);
		other.scaling = new BABYLON.Vector3(6,1.5,5);


		createObjects(objectList);


	


		


		var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);
		//ground.position = new BABYLON.Vector3(0,-5,0);

			return scene;
		} 
	var scene = createScene(); 

	engine.runRenderLoop(function() {
		scene.render(); 
	});

	window.addEventListener('resize', function() {
		engine.resize();
	});
});