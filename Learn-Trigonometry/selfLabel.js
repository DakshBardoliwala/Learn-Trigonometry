var CANVAS 
var CTX
var DOING = "pencil"


function clearCANVAS(){
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height)
}

async function save(){
  
  var link = document.getElementById('link');
  link.setAttribute('download', 'MyDrawing.png');
  link.setAttribute('href', CANVAS.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  link.click();
  alert("Your drawing has been downloaded!")

}

function fill(){
  var colorChosen = document.getElementById("color").value
  CTX.strokeStyle = colorChosen
  CTX.fillStyle = colorChosen
  CTX.rect(0, 0, CANVAS.width, CANVAS.height)
  CTX.fill()
  CTX.stroke()
  CTX.closePath()

}

function erase(e){
  DOING = "eraser"

}

function pencil(){
  DOING = "pencil"
}

window.addEventListener("load", () => {

  CANVAS = document.getElementById("gameCanvas");
  CTX = CANVAS.getContext("2d");
  
  const div = document.getElementById("overlay")
  div.style.height = `${window.innerHeight}px - 114px`

  CANVAS.height = window.innerHeight - 114;
  CANVAS.width = window.innerWidth - 24;

  let painting = false;

  function startPosition(e){
    painting = true;
    draw(e);
  }

  function finishedPosition(e){
    painting = false;
    CTX.closePath()
    CTX.beginPath();
  }

  function draw(e) {
    var colorChosen = document.getElementById("color").value
    var strokeChosen = document.getElementById("strokeSize").value

    if(strokeChosen > 100){
      strokeChosen = 100
    } else if (strokeChosen < 1) {
      strokeChosen = 1
    }
    
    if (!painting) return;
    if (DOING == "pencil"){
      CTX.lineWidth = strokeChosen;
      CTX.lineCap = "round"

      CTX.lineTo(e.clientX - 10, e.clientY - 84);
      CTX.stroke();
      CTX.strokeStyle = colorChosen
      CTX.beginPath();
      CTX.moveTo(e.clientX - 10, e.clientY - 84);
    }

    if (DOING == "eraser"){
      CTX.lineWidth = strokeChosen;
      CTX.lineCap = "round"

      CTX.lineTo(e.clientX - 10, e.clientY - 84);
      CTX.stroke();
      CTX.strokeStyle = "#f5f5f5"
      CTX.beginPath();
      CTX.moveTo(e.clientX - 10, e.clientY - 84);
    }
  }
  

  CANVAS.addEventListener("mousedown", startPosition);
  CANVAS.addEventListener("mouseup", finishedPosition);
  CANVAS.addEventListener("mousemove", draw);

  CANVAS.addEventListener("touchstart", startPosition);
  CANVAS.addEventListener("touchend", finishedPosition);
  CANVAS.addEventListener("touchmove", draw);


})