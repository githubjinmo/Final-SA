var correct_answer = 0;

function check(){
	answer_1 = document.querySelector('input[name="option_1"]:checked')?.value;
	if(answer_1 == 1){
		document.getElementById('result').innerHTML = "correct";
	}
}