  var btn = document.createElement("Button")
  
  btn.innerHTML = "0"
  btn.id = "btn"
  btn.className = "myButton"

  document.body.appendChild(btn)
  btn.onclick = function(){
      btn.innerHTML++
  }