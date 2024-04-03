//generate a random color

const randomColor = function(){    
    const hex = "0123456789ABCDEF"//hex code value
    let color = '#'
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]//to generate position randomly
    }
    return color;
};
let intervalId;
const startChangingColor = function(){
    //document.body.style.backgroundColor = randomColor();//it wont change cont.

    intervalId = setInterval(changeBgColor, 1000);

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function(){
    clearInterval(intervalId);//to stop we use clearInterval()
    intervalId = null;//good practice
};

document.querySelector("#start").addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)


// console.log(randomColor()); 