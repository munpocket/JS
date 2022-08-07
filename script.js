
const pullDownButton = document.getElementById('lists');
console.log(pullDownButton);

pullDownButton.addEventListener("mouseover",function(){
    console.log("乗る");
})

pullDownButton.addEventListener("mouseout",function(){
    console.log("外れる");
})

pullDownButton.addEventListener("click",function(){
    console.log("クリック");
})

pullDownButton.addEventListener("mouseover",function(){
    pullDownButton.setAttribute("style","background-color:blue;")
})

pullDownButton.addEventListener("mouseout",function(){
    pullDownButton.removeAttribute("style","background-color:blue;")
})

pullDownButton.addEventListener("click",function(){
    pullDownButton.setAttribute("style","background-color:green;")
})
