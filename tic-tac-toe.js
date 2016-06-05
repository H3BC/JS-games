var player = 1;

	var btn1 = document.getElementById('btn1').innerHTML;
boxed = function(e){
	var btn = e.target;
	

	if (btn.innerHTML != ''){
		return;
	}
	else if (player == 1){
		document.getElementById(btn.id).innerHTML = 'X';
		player++;
	}
	else{
		document.getElementById(btn.id).innerHTML = 'O';
		player--;
	}
	checking();
	
}

resetFields = function(){
	for( var n = 1; n <= 9; n++){
		document.getElementById("btn" +n).innerHTML = null;
	}
}

checking = function(){
	var btn1 = document.getElementById('btn1').innerHTML;
	var btn2 = document.getElementById('btn2').innerHTML;
	var btn3 = document.getElementById('btn3').innerHTML;
	var a = ifWin(btn1,btn2,btn2);
	console.log(a);
	
}


ifWin = function(a, b, c){
 if (a === 'X' && b === "X" && c == 'X'){
 	return 1;
 }
 else  if (a === 'O' && b === "O" && c == 'O'){
 	return 2;
 }
 else{
 	return 0;
 }

 }

box.addEventListener('click', boxed);
reset.addEventListener('click', resetFields);