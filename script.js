const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const slide4 = document.getElementById("slide4");
console.log(slide1);
const sliders = []
sliders.push(slide1,slide2,slide3,slide4);


console.log(sliders);

setTimeout(timeout,7000);


let i = 0;
const lastSlide = (sliders.length-1);
function timeout(){


    if(i === lastSlide){
        sliders[i].style.display = "none";

        i = 0;
        sliders[i].style.display = "block";
        setTimeout(timeout,7000);
    }else{
        sliders[i].style.display = "none";
        i++
        sliders[i].style.display = "block";

        setTimeout(timeout,7000);

    }
}


function changeBackgroundColor(element,newBackgroundColor){
    const backgroundColor = element.style.backgroundColor;

    element.addEventListener("mouseenter",function(){
        this.style.backgroundColor = newBackgroundColor;
        this.style.color = "white";
        this.style.transition = "color 1s, background-color 1s";
    })

    element.addEventListener("mouseleave",function(){
        this.style.backgroundColor = backgroundColor;
        this.style.color = "black";
        this.style.transition = "background-color 1s 0.2s, color 1s 0.2s";

    })
    
}

changeBackgroundColor(slide1,"black");
changeBackgroundColor(slide2,"black");
changeBackgroundColor(slide3,"black");
changeBackgroundColor(slide4,"black");

// h1 animation 
const h1 = document.getElementById("title");
let authorization = true; // permet de bloquer l'event mousedown pendant que le mouse up est en marche

    h1.addEventListener("mousedown",function(){
        if(authorization){
        h1.style.letterSpacing = "100px";
        h1.style.opacity = "0";
        h1.style.transition = "letter-spacing 10s, opacity 2s 5s";
        }
    })



h1.addEventListener("mouseup",function(){
    authorization = false;
    h1.style.cursor = "default";
    h1.style.letterSpacing = "-10px";
    h1.style.opacity = "1"
    h1.style.transition = "letter-spacing 4s, opacity 1s";
    const sound = new Audio("sounds/guitar.mp3")
    sound.play();
    sound.volume = 0.1;

    theTimeout = setTimeout(function(){
        console.log("timeout")
        h1.style.letterSpacing = "7px";
        h1.style.transition = "letter-spacing 2s";
        
    },4000)
    clearTimeout(timeout);

    // animation dure 4s + 2s = 6s
    setTimeout(function(){
        console.log("ok")
        authorization = true;
        h1.style.cursor = "pointer";
    },6500)
    
    
})

// background animation

const body = document.getElementById("body");
const coords = document.getElementById("coords");

body.addEventListener("mousemove",mouseCoords);

function mouseCoords(e){
    let x = e.clientX;
    let y = e.clientY;
    // coords.innerHTML = "voici x : " + x + " et voici y : "+ y;

    // infos
    // background-size: 120% 120%;
    // width(x = e.clientX;) total = 1903px, q1 = 475.75px, mediane = 951.5px , q3 = 1127.25px 
    // width(y = e.clientY;) total = 917px, q1 = 227.5px, mediane = 455px , q3 = 682.5px 
    const xQ1 = 475.75;
    const xMediane = 951.5;
    const xQ3 = 1127.25;

    const yQ1 = 227.5;
    const yMediane = 455;
    const yQ3 = 682.5;

    if(x > xQ1 && x < xQ3 && y > yQ1 && y < yQ3){ // représente un carré centrale de la page body
        body.style.backgroundPosition = "center";
        body.style.transitionDuration = "3s";
    }else if(x < xMediane && y > yMediane){
        // en bas à gauche du body
        body.style.backgroundPosition = "0% 100%"; // premier: 0% = à gauche et deuxieme: 0% en haut
        body.style.transitionDuration = "3s";

    }else if(x > xMediane && y > yMediane){
        // en bas à droite du body
        body.style.backgroundPosition = "90% 90%";
        body.style.transitionDuration = "3s";
    }else if(x < xMediane && y < yMediane){
        // en haut à gauche du body
        body.style.backgroundPosition = "0% 0%";
        body.style.transitionDuration = "3s";
    }else if(x > xMediane && y < yMediane){
        // en haut à droite du body
        body.style.backgroundPosition = "100% 0%";
        body.style.transitionDuration = "3s";
    }
}



