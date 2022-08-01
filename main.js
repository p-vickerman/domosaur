let span1 = document.querySelector(".mess-with-me");
span1.style.fontSize = "40px"

//to get a tag with a specific class do 'tagname.classname'
let paraMess = document.querySelector('p.mess-with-me')

paraMess.style.backgroundColor = 'green'

let hideMe = document.querySelector("#hide-me-area")

hideMe.style.display = "none"

let firstDino =  document.querySelector("#triceratops")

firstDino.style.width = '324px'

span1.addEventListener('click', function(){
    span1.style.color = 'orange'
})

firstDino.addEventListener('click', function(){
   firstDino.style.border = '2px solid red'
})

let featherDino = document.querySelector("#feathers")

featherDino.addEventListener('click', function(){
    featherDino.style.opacity = '0.5'
})

let toggleButton = document.querySelector("#toggle")
let row = document.querySelector("#row")

//you can also set a boolean for the below problem
let backgroundToggle = false

toggleButton.addEventListener('click', function(){
    // row.style.backgroundColor = 'red'
    //or
    // if (row.style.backgroundColor === ''){
    //     row.style.backgroundColor = "black"
    // } else {
    //     row.style.backgroundColor = ""
    // }

    if(backgroundToggle === false){
        backgroundToggle = true;
        row.style.backgroundColor = "black"
    } else if(backgroundToggle === true){
        backgroundToggle = false;
        row.style.backgroundColor = ""
    }
    })


let biggy = document.querySelector("#biggify")

biggy.addEventListener('mouseenter', function(){
    biggy.style.width = '200px'
})

biggy.addEventListener('mouseleave', function(){
    biggy.style.width = '162px'
})