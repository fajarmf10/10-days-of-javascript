var container = document.createElement('div')
container.className = 'buttonContainer'
container.id = 'btns'

var buttons = [9]
for(var i=0; i<9; i++){
    buttons[i] = document.createElement('button')
    buttons[i].id = 'btn' + (i+1)
    buttons[i].innerHTML = (i+1)
    buttons[i].className = 'buttonClass'
    container.appendChild(buttons[i])
}

document.body.appendChild(container);

var initial = [1, 4, 7, 8, 9, 6, 3, 2]
var a = [1, 4, 7, 8, 9, 6, 3, 2]

btn5.onclick = function(){
    for(var i=7; i>0; i--){
        lastEl = a.pop()
        a.unshift(lastEl)
    }
    for(var i=0; i<8; i++){
        document.getElementById("btn"+initial[i]).innerHTML = a[i]
    }
}