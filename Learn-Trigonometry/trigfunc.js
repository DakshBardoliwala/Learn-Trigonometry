var questions = [
  [
  "Find the value of o?, round off to 1 decimal place", // question
  "4.2", // answer
  "ques/trigfunc1.png", // image
  ],
  [
  "Find the height of the tree?, round off to 1 decimal place", // question
  "52.0", // answer
  "ques/trigfunc2.png", // image
  ],
  [
  "Find how far away is the drone from the top of the tower?, round off to 1 decimal place", // question
  "4.5", // answer
  "ques/trigfunc3.png", // image
  ],
  [
  "Find Length AB", // question
  "10", // answer
  "ques/trigfunc4.png", // image
  ],
  [
  "Find 'H', round off to 1 decimal place", // question
  "17.3", // answer
  "ques/trigfunc5.png", // image
  ],
]
var x;
var count = 0;
var qcount = 0;

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