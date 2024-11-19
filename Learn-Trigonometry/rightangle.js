var questions = [
  [
  "How long is the ski lift? round off to 1 decimal place", // question
  "446.5", // answer
  "ques/rt1.png", // image
  ],
  [
  "Find the opposite side", // question
  "BC", // answer
  "ques/rt2.png", // image
  ],
  [
  "Find the adjacent side", // question
  "AB", // answer
  "ques/rt3.png", // image
  ],
  [
  "Find the hypotenuse", // question
  "AC", // answer
  "ques/rt4.png", // image
  ],
  [
  "Find the adjacent side", // question
  "PR", // answer
  "ques/rt5.png", // image
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
		var a = document.getElementById("a")
		div.innerHTML = `<h2 style="font-size:40px;">Your Score : </h2><h1 style="color:#1aff1a;font-size:60px;">${score}%</h1>`
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