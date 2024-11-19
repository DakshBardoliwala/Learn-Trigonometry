var CANVAS 
var CTX

function setup(){

  CTX.beginPath();
  CTX.lineCap = "round";
  CTX.moveTo(CANVAS.width - (CANVAS.width / 3) * 2.75, CANVAS.height / (3 * 2.75)); 
  CTX.lineTo(CANVAS.height - (CANVAS.height / 3) * 2.75, CANVAS.height / 3 * 2.75);

  CTX.lineTo(CANVAS.height - (CANVAS.height / (3 * 2.75)), CANVAS.height / 3 * 2.75);
  CTX.closePath();
  CTX.lineWidth = 10;
  CTX.lineCap = "round";
  CTX.strokeStyle = "#000";
  CTX.stroke();
  CTX.fillStyle = "#a1e4ff";
  CTX.fill();

  CTX.beginPath();
  CTX.rect(CANVAS.width - (CANVAS.width / 3) * 2.75 - 2,CANVAS.height / 3 * 2.75 - 48, 50, 50)
  CTX.strokeStyle = "#000";
  CTX.lineWidth = 10 / 2;
  CTX.stroke()
  CTX.closePath()

  CTX.beginPath()
  CTX.arc(CANVAS.width / 3 * 2.75 - 10, CANVAS.height / 3 * 2.75, 50, 1.225 * Math.PI, 1 * Math.PI, true);
  CTX.fillStyle = "#FF0000";
  CTX.strokeStyle = "#000";

  CTX.font = "30px Arial";
  CTX.fillText("θ", CANVAS.width / 3 * 2.75 - 80, CANVAS.height / 3 * 2.75 - 10)
  CTX.stroke();

}

function makeTri(){

  CTX.beginPath();
  CTX.lineCap = "round";
  CTX.moveTo(CANVAS.width - (CANVAS.width / 3) * 2.75, CANVAS.height / (3 * 2.75)); 
  CTX.lineTo(CANVAS.height - (CANVAS.height / 3) * 2.75, CANVAS.height / 3 * 2.75);

  CTX.lineTo(CANVAS.height - (CANVAS.height / (3 * 2.75)), CANVAS.height / 3 * 2.75);
  CTX.closePath();
  CTX.lineWidth = 10;
  CTX.lineCap = "round";
  CTX.strokeStyle = "#000";
  CTX.stroke();
  CTX.fillStyle = "#a1e4ff";
  CTX.fill();

  CTX.beginPath();
  CTX.rect(CANVAS.width - (CANVAS.width / 3) * 2.75 - 2,CANVAS.height / 3 * 2.75 - 48, 50, 50)
  CTX.strokeStyle = "#000";
  CTX.lineWidth = 10 / 2;
  CTX.stroke()
  CTX.closePath()

  CTX.beginPath()
  CTX.arc(CANVAS.width / 3 * 2.75 - 10, CANVAS.height / 3 * 2.75, 50, 1.225 * Math.PI, 1 * Math.PI, true);
  CTX.fillStyle = "#FF0000";
  CTX.strokeStyle = "#000";

}

function labelLenghts(opp, adj, hyp){
  var theta = document.getElementById("theta").value
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height)
  makeTri()
  calcTrigFuncs(opp, adj, hyp)
  
  CTX.fillStyle = "#FF0000";
  CTX.font = "30px Arial";
  CTX.fillText(opp, 45, (CANVAS.height / 2)); 
  CTX.font = "30px Arial";
  CTX.fillText(adj, CANVAS.width / 2 - 30, CANVAS.height - 12); 
  CTX.font = "30px Arial";
  CTX.fillText(hyp, CANVAS.height / 2, CANVAS.width / 2); 
  CTX.font = "30px Arial";
  CTX.fillText(`${theta}°`, CANVAS.width / 3 * 2.75 - 120, CANVAS.height / 3 * 2.75 - 10)
  CTX.stroke();

}

function startLabel(){
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height)
  try {
    var adj = document.getElementById("adj").value
    var opp = document.getElementById("opp").value
    var hyp = document.getElementById("hyp").value
    var theta = document.getElementById("theta").value


    
    makeTri()
    labelLenghts(opp, adj, hyp)

  } catch (err){
    console.error(err)
  }

}

async function save(){
  
  var link = document.getElementById('link');
  link.setAttribute('download', 'MyDrawing.png');
  link.setAttribute('href', CANVAS.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  link.click();

}


function calcTrigFuncs(opp, adj, hyp){
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height)
  makeTri()

  var theta = document.getElementById("theta").value
  var sin = Math.sin(theta * Math.PI / 180).toFixed(7)
  var cos =  Math.cos(theta * Math.PI / 180).toFixed(7)
  var tan = (sin / cos).toFixed(7)
  // var sinIN = (Math.asin(opp / hyp) * Math.PI / 180).toFixed(7)
  // var cosIN = (Math.acos(adj / hyp) * Math.PI / 180).toFixed(7)
  // var tanIN = (Math.atan(opp / adj) * Math.PI / 180).toFixed(7)
  if(tan == Infinity){
    tan = "Undefined"
  } 
  
  // if (isNaN(sinIN)){
  //   sinIN = "Error"
  // } 
  
  // if (isNaN(cosIN)){
  //   cosIN = "Error"
  // } 
  
  // if (isNaN(tanIN)){
  //   tanIN = "Error"
  // }

  CTX.font = "20px Arial";
  CTX.fillText(`Sin θ = ${sin}`, CANVAS.width / 3 * 2 - 40, 30);
  CTX.fillText(`Cos θ = ${cos}`, CANVAS.width / 3 * 2 - 40, 60);
  CTX.fillText(`Tan θ = ${tan}`, CANVAS.width / 3 * 2 - 40, 90);
  CTX.moveTo(CANVAS.width / 3 * 2 - 40, 100);
  CTX.lineTo(CANVAS.width - 15, 100);
  // CTX.fillText(`Arc Sin = ${sinIN * Math.PI  / 180}°`, CANVAS.width / 3 * 2 - 40, 130)
  // CTX.fillText(`Arc Cos = ${cosIN}°`, CANVAS.width / 3 * 2 - 40, 160)
  // CTX.fillText(`Arc Tan = ${tanIN}°`, CANVAS.width / 3 * 2 - 40, 190)
  CTX.lineWidth = 3;
  CTX.stroke()



}

window.onload = function () {
  CANVAS = document.getElementById("mainCanvas")
  CTX = CANVAS.getContext("2d")
  var adja = document.getElementById("adj").value
  var oppo = document.getElementById("opp").value
  var hypo = document.getElementById("hyp").value


  setup()
  calcTrigFuncs(oppo, adja, hypo)


}