	var N_of_q = 1;
	var number_of_tasks= 23; 
	
	function next_question(){
		document.getElementById('q' + N_of_q).className="class_none";
		N_of_q ++;
		if(N_of_q <= number_of_tasks){
			document.getElementById('q' + N_of_q).className="class_block";
		}
		if(N_of_q == number_of_tasks){
			document.getElementById('button_next').innerHTML = "Check";
		}else if(N_of_q >= number_of_tasks){
				document.getElementById('button_next').className = "class_none";
				check();
		}
	}
	
	function check(){
		var correct_answer=		["abcd",	//1
								"efgh",  	//2
								"ijkl"];	//3
		var score = 0;
		for(var N_of_q =1; N_of_q <= number_of_tasks; N_of_q +=1){
			var answer = document.getElementById('inputid' + N_of_q).value;
			if(answer == correct_answer[N_of_q - 1]){
					score +=1;
			}
		}
		var percent = score/number_of_tasks * 100;
		document.getElementById('result').innerHTML = "thanks for answer " +"your result: " + percent + "%.";
		/*document.getElementById('result').innerHTML = "thank you! your answer is: " + answer + correct_answer;*/
		
		if(percent == 100){
			document.getElementById('result').innerHTML += " Good job";
		}else{
			document.getElementById('result').innerHTML += " Bad.";
		}
	}