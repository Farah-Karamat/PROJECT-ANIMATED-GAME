//PLAYER-KING
var kingPosition = 20;

//KING-FORWARD AND BACKWARD ACTIONS

function moveKing(type){
var king = document.getElementById('king');
if (type === 'forward'){
kingPosition += 10;
king.style.left = kingPosition + 'px'
king.src = "images/king-farward.gif";
setTimeout(function(){
king.src = "images/king.gif";
}, 1000)
}
if (type === 'backward'){
kingPosition -= 10;
king.style.left = kingPosition + 'px'
king.src = "images/king-backward.gif";
setTimeout(function(){
king.src = "images/king.gif";
}, 1000)
}
}

//SELECTION OF KEYS

function action(event){
//console.log("test", event.key)
if(event.key === 'd'){
moveKing("forward")
}
else if(event.key === 'a'){
moveKing("backward");
}
}
window.addEventListener('keydown', action)

//==============================================================================

//PLAYER-CHAINSAW
var chainsawPosition = 20;


//CHAINSAW-FORWARD AND BACKWARD ACTIONS

function moveChainsaw(type){
var chainsaw = document.getElementById('chainsaw');
if (type === 'forward'){
chainsawPosition += 10;
chainsaw.style.right = chainsawPosition + 'px'
chainsaw.src = "images/chainsaw-farward.gif";
setTimeout(function(){
chainsaw.src = "images/chainsaw.gif";
}, 1000)
}
if (type === 'backward'){
chainsawPosition -= 10;
chainsaw.style.right = chainsawPosition + 'px'
chainsaw.src = "images/chainsaw-backward.gif";
setTimeout(function(){
chainsaw.src = "images/chainsaw.gif";
}, 1000)
}
}

//SELECTION OF KEYS

function play(event){
//console.log("test", event.key)
if(event.key === 'f'){
moveChainsaw("forward")
}
else if(event.key === 'v'){
moveChainsaw("backward");
}
}


window.addEventListener('keydown', play)


//==============================================================================
