var words_list = ['opacity', 'batterfly', 'South America', 'redemption', 'overhelming', 'manifesto', 'emphesize', 'innersection'];
var lives = 8;
var stage = 1;

function start(){
	var random = Math.floor(Math.random() * words_list.length);
	choosed_word = words_list[random];
	choosed_word = choosed_word.toUpperCase();
	console.log(choosed_word);
	// choosed_word = choosed_word.split();
	
	hidden_word = '';
	for (var n = 0; n <choosed_word.length; n++){
		if(choosed_word[n] == " "){
			hidden_word = hidden_word + "-";
		}
		else{
			hidden_word = hidden_word + "_";
		}
	}
	console.log(hidden_word);
	document.getElementById('word').innerHTML = hidden_word;
	document.getElementById('panel').style.display = "block";
	document.getElementById('image').style.display = "block";


}

function ifContains(){
	var letter = document.getElementById('typing').value;
	letter = letter.toUpperCase();
	

	if (choosed_word.includes(letter)){
		hidden_word = hidden_word.split('');
		choosed_word = choosed_word.split('');
		for(var n = 0; n < choosed_word.length; n++){
			if(letter == choosed_word[n]){
				hidden_word[n] = choosed_word[n];
			}
		}
		hidden_word = hidden_word.join('');
		choosed_word = choosed_word.join('');
		// console.log(hidden_word);
		document.getElementById('word').innerHTML = hidden_word;

	}

	else if(!isNaN(letter)){
		alert('please type a letter');
	}

	else{
		lives--;
		stage++;
		document.getElementById('image').src = "images/stage" + stage + ".png";
 
	}

	document.getElementById('typing').value = null;
}

function checking(){
		if (lives > 0){
		ifContains();
		}

		else{
		loose();
		}
}

function loose(){
	// RESET ALL SETTINGS AND PREPARE FOR NEW GAME
	alert("You have been hanged! Your word was: " + choosed_word);
	document.getElementById('panel').style.display = "none";
	document.getElementById('image').style.display = "none";
	document.getElementById('image').src = "images/stage1.png";
	hidden_word = '';
	document.getElementById('word').innerHTML = hidden_word;

}



check.addEventListener('click', checking);
start_button.addEventListener('click', start);