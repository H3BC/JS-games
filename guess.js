
var tries = 0;
  begins = function(){
    document.getElementById('typing').style.display = "inline";
     var range = document.getElementById('range_list').value;
      number = Math.floor((Math.random() * range));
    }

  type = function(){
    var choosed = document.getElementById('number').value;
    if (choosed == ''){
      alert('type a number!');
    }
    else if (choosed > number){
    document.getElementById('tip').innerHTML = 'too big';
      tries++;
      document.getElementById('tries').innerHTML = tries;

    }
    else if (choosed < number){
       document.getElementById('tip').innerHTML = 'too small';
      tries++;
      document.getElementById('tries').innerHTML = tries;
    }
    else{
      tries++;
      final();
    }

  }
  
  final = function(){
    alert('Congratulations! Correct number is: ' + number + ' You have tried: ' + tries + ' times');
    tries = 0;
    document.getElementById('tries').innerHTML = tries;
    document.getElementById('tip').innerHTML = null;
    document.getElementById('typing').style.display = "none";
    document.getElementById('number').value = null;
  }
 
  button_range.addEventListener('click', begins);
  check_num.addEventListener('click', type);