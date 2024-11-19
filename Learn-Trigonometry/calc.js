function calcu(){
	var a = document.getElementById("adj")
	var b = document.getElementById("opp")
	var c = document.getElementById("hyp")
	var ang = document.getElementById("theta")
	var x;
	var ans;
  if (a.value === "" && ang.value === ""){
		x = Math.sqrt(Math.pow(c.value, 2) - Math.pow(b.value, 2))
		y = Math.asin(b.value/c.value)
		ang.value = (y*180/Math.PI).toFixed(1)
    a.value = x.toFixed(2)
  }
	else if (a.value !== "" && b.value !== "" && c.value !== ""){
		y = Math.asin(b.value/c.value)
		ang.value = (y*180/Math.PI).toFixed(1)
	}
  else if (b.value === "" && ang.value === ""){
    x = Math.sqrt(Math.pow(c.value, 2) - Math.pow(a.value, 2))
		y = Math.acos(a.value/c.value)
		ang.value = (y*180/Math.PI).toFixed(1)
    b.value = x.toFixed(2)
  }
  else if (c.value === "" && ang.value === ""){
    x = Math.sqrt(Math.pow(a.value, 2) + Math.pow(b.value, 2))
		y = Math.atan(b.value/a.value)
		ang.value = (y*180/Math.PI).toFixed(1)
    c.value = x.toFixed(2)
	}
	else if (b.value !== "" && ang.value !== ""){
		x = b.value / Math.sin(ang.value * Math.PI/180)
		ans = x * Math.cos(ang.value * Math.PI/180)
		a.value = ans.toFixed(2)
		c.value = x.toFixed(2)
	}
	else if (a.value !== "" && ang.value !== ""){
		x = a.value / Math.cos(ang.value * Math.PI/180)
		ans = x * Math.sin(ang.value * Math.PI/180)
		b.value = ans.toFixed(2)
		c.value = x.toFixed(2)
	}
	else if (c.value !== "" && ang.value !== ""){
		x = c.value * Math.sin(ang.value * Math.PI/180)
		ans = c.value * Math.cos(ang.value * Math.PI/180)
		b.value = x.toFixed(2)
		a.value = ans.toFixed(2)
	}
}

function change(){
	var enter =  document.getElementById("enter")
	var save = document.getElementById("save")
	var a = document.getElementById("adj")
	var b = document.getElementById("opp")
	var c = document.getElementById("hyp")
	var ang = document.getElementById("theta")
	if (a.value !== "" && b.value === "" && c.value === "" && ang.value !== ""){
		enter.disabled = false
		enter.style.backgroundColor = "#338bff"
		save.disabled = false
		save.style.backgroundColor = "#338bff"
	}
	else if (a.value === "" && b.value !== "" && c.value === "" && ang.value !== ""){
		enter.disabled = false
		enter.style.backgroundColor = "#338bff"
		save.disabled = false
		save.style.backgroundColor = "#338bff"
	}
	else if (a.value === "" && b.value === "" && c.value !== "" && ang.value !== ""){
		enter.disabled = false
		enter.style.backgroundColor = "#338bff"
		save.disabled = false
		save.style.backgroundColor = "#338bff"
	}
	else if (a.value !== "" && b.value !== "" && c.value === "" && ang.value === ""){
		enter.disabled = false
		enter.style.backgroundColor = "#338bff"
		save.disabled = false
		save.style.backgroundColor = "#338bff"
	}
	else if (a.value === "" && b.value !== "" && c.value !== "" && ang.value === ""){
		enter.disabled = false
		enter.style.backgroundColor = "#338bff"
		save.disabled = false
		save.style.backgroundColor = "#338bff"
	}
	else if (a.value !== "" && b.value === "" && c.value !== "" && ang.value === ""){
		enter.disabled = false
		enter.style.backgroundColor = "#338bff"
		save.disabled = false
		save.style.backgroundColor = "#338bff"
	}
	else if (a.value !== "" && b.value !== "" && c.value !== "" && ang.value === ""){
		enter.disabled = false
		enter.style.backgroundColor = "#338bff"
		save.disabled = false
		save.style.backgroundColor = "#338bff"
	}
	else if (a.value !== "" && b.value !== "" && c.value !== "" && ang.value !== ""){
		enter.disabled = false
		enter.style.backgroundColor = "#338bff"
		save.disabled = false
		save.style.backgroundColor = "#338bff"
	}
	else if (a.value === "" && b.value !== "" && c.value !== "" && ang.value !== ""){
		enter.disabled = false
		enter.style.backgroundColor = "#338bff"
		save.disabled = false
		save.style.backgroundColor = "#338bff"
	}
	else if (a.value !== "" && b.value !== "" && c.value === "" && ang.value !== ""){
		enter.disabled = false
		enter.style.backgroundColor = "#338bff"
		save.disabled = false
		save.style.backgroundColor = "#338bff"
	}
	else if (a.value !== "" && b.value === "" && c.value !== "" && ang.value !== ""){
		enter.disabled = false
		enter.style.backgroundColor = "#338bff"
		save.disabled = false
		save.style.backgroundColor = "#338bff"
	}
	else{
		enter.disabled = true
		enter.style.backgroundColor = "grey"
		save.disabled = true
		save.style.backgroundColor = "grey"
	}
}