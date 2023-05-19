	var correct_answer = 0;
	var number_of_tasks= 23; 
	var N_of_q = 1;
/*function check_1(){
	answer_1 = document.querySelector('input[name="option_1"]:checked')?.value;
	if(answer_1 == 1){
		document.getElementById('result').innerHTML = "correct";
	}
}*/
	
	function next_question(){
	

		if(N_of_q <= number_of_tasks){
			document.getElementById('q' + N_of_q).className= "class_none";
			N_of_q ++;

		}
		if(N_of_q < number_of_tasks){
			document.getElementById('q' + N_of_q).className="class_block";
		}
		if(N_of_q == number_of_tasks){
			document.getElementById('button_next').innerHTML = "Check your answer";
			document.getElementById('last_img').style.display = "block";
			document.getElementById('button_next').className = "button_change";
		}else if(N_of_q > number_of_tasks){
				document.getElementById('button_next').style.display = "none";
				document.getElementById('last_img').style.display = "none";
				check();
		}
		
	}
	
	function check(){
		var correct_answer_check = [ "Dessalination",	//1
									"Reduce the water amount"];	//2;
		var score = 0;
		for(var N_of_q =1; N_of_q <= number_of_tasks; N_of_q +=1){
			if((N_of_q == 12) || (N_of_q == 13)){
				var answer_string = document.getElementById('inputid' + N_of_q).value;
			}else{
				var answer_int = document.querySelector('input[name=' + "option_" + N_of_q +']:checked')?.value;
			}
			if((N_of_q == 12)|| (N_of_q == 13)){
				if(answer_string == correct_answer_check[N_of_q - 11]){                           // increase score when the user types the string in correct_answer_check, increase the score when the option's value  == 1;
					score +=1;
				}
			}else{
				if(answer_int == 1){                           // increase score when the user types the string in correct_answer_check, increase the score when the option's value  == 1;
					score +=1;
				}
			}
			
		}
		
		var percent = Math.round(score/number_of_tasks * 100);
		document.getElementById('result').innerHTML = "Thank you for answering the test! <br> " +"Your result is: <br> " + percent + "%.";
		/*document.getElementById('result').innerHTML = "thank you! your answer is: " + answer + correct_answer;*/
		
		if(percent == 100){
			document.getElementById('result').innerHTML += " PERFECT!";
		}else if(percent >= 50){
			document.getElementById('result').innerHTML += " Good!";
		}else{
			document.getElementById('result').innerHTML += " Try again next time!";
		}
	}