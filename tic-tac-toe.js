var player = 1;

	
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
	ifWin();
	
}

// CLEANING ALL MARKED FIELDS 
resetFields = function(){
	for( var n = 1; n <= 9; n++){
		document.getElementById("btn" +n).innerHTML = null;
	}
}

ifWin = function(){
	var resault = checking();
	if (resault == 1){
		alert("'X' Wins!")
		resetFields();
	}
	else if(resault == -1){
		alert("'O' Wins!");
		resetFields();
	}
	else{
		return 0;
	}
}

checking = function(){
	var btn1 = document.getElementById('btn1').innerHTML;
	var btn2 = document.getElementById('btn2').innerHTML;
	var btn3 = document.getElementById('btn3').innerHTML;
	var btn4 = document.getElementById('btn4').innerHTML;
	var btn5 = document.getElementById('btn5').innerHTML;
	var btn6 = document.getElementById('btn6').innerHTML;
	var btn7 = document.getElementById('btn7').innerHTML;
	var btn8 = document.getElementById('btn8').innerHTML;
	var btn9 = document.getElementById('btn9').innerHTML;
	
	return rowCheck(btn1,btn2,btn3) 
	+ rowCheck(btn4,btn5,btn6) 
	+ rowCheck(btn7,btn8,btn9) 
	+ rowCheck(btn1,btn4,btn7) 
	+ rowCheck(btn2,btn5,btn8) 
	+ rowCheck(btn3,btn6,btn9) 
	+ rowCheck(btn1,btn5,btn9) 
	+ rowCheck(btn3,btn5,btn7);
	
}


// CHECKING IF SOMEONE FULLFILLED CONDITIONS TO WIN
rowCheck = function(a, b, c){
 if (a === 'X' && b === "X" && c == 'X'){
 	return 1;
 }
 else  if (a === 'O' && b === "O" && c == 'O'){
 	return -1;
 }
 else{
 	return 0;
 }

 }

box.addEventListener('click', boxed);
reset.addEventListener('click', resetFields);