var questions = [
  [
  "Find the value of AD, round off to 1 decimal place.", // question
  "11.7", // answer
  "ques/triginfun1.png", // image
  "Hint: Use Inverse functions to find missing angles!"  
  ],
  [
  "Find the Value of Theta, round off to 1 decimal place", // question
  "53.1", // answer
  "ques/triginfun2.jpg", // image
  "Hint: Use sin inverse"  
  ],
  [
  "Find the value of 'α' in the attached diagram, round off till 1 decimal places", // question
  "67.4", // answer
  "ques/triginfun3.PNG", // image
  "Hint: Use Sin Inverse"  
  ],
  [
  "Find the value of 'X' in the attached diagram, round off till 1 decimal places", // question
  "13.07", // answer
  "ques/triginfun4.PNG", // image
  "Hint: Find the Base length"  
  ],
  [
  "Find the value of 'θ' in the attached diagram, round off till whole number", // question
  "39", // answer
  "ques/triginfun5.PNG", // image
  "Hint: Find other angles"  
  ],
]
var x;
var count = 0;
var qcount = 0;

function checkHint(){
  console.log(x)
  var hint = x[3]
  const question_header = document.getElementById("question_header")
  question_header.innerHTML = `${x[0]} <br> <p style='font-size: 20px;'>${x[3]}</p>`

  const hint_button = document.getElementById("hint")
  hint_button.disabled = true
  hint_button.style.backgroundColor = "grey"

}

function pickRandom(){
	x = questions[Math.floor(Math.random() * questions.length)]
	const index = x
  const image = document.getElementById("image")
  const question_header = document.getElementById("question_header")
  image.src = index[2]
  question_header.innerHTML = `${index[0]}`
}

function check(){
	var an = document.getElementById("ans")
	var ans = document.getElementById("ans").value
	var answer = document.getElementById("ans1")
	const index = x
	if (ans == index[1]){
		qcount = qcount + 1
		count = count + 1
		questions.splice(questions.indexOf(index), 1)
		an.value = ""
		alert("Correct!")
		c_check()
		pickRandom()
	}
	else if (ans !== index[1]){
		qcount = qcount + 1
		questions.splice(questions.indexOf(index), 1)
		an.value = ""
		alert("Wrong")
		c_check()
		pickRandom()
	}	
}

function c_check(){
	if (qcount === 5){
		var div = document.getElementById("divi")
		var score = count/5 * 100
		div.innerHTML = `<h2 style="font-size:40px;">Your Score : </h2><h1 style="color:#1aff1a;font-size:60px;">${score}%</h1>`
		var a = document.getElementById("a")
		a.href = "https://docs.google.com/document/d/12BkDnXOAm7EBMrhOHiy90g_A9MyYpBKCthy8qN1wvOk/edit?usp=sharing"
		a.innerHTML = "Answer Key"
		}
}

window.onload = function(){
  pickRandom()
}

function change(){
	var enter = document.getElementById("ck")
	var ans = document.getElementById("ans").value
	if (ans !== ""){
		enter.disabled = false
		enter.style.backgroundColor = "#338bff"
	}
	else{
		enter.disabled = true
		enter.style.backgroundColor = "grey"
	}
}