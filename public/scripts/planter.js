let winImages = ["plantule.jpg", "plante.jpg", "patate.jpg", "fumier_plante.jpg"];
let failImages = ["poule_mange.png", "poule_mange.jpg", "plante_sans_patates.png", "plante_fruits.png", "patate_germee.png"];
let btnWinImages = [ "arroser.jpg", "soleil.png", "fumier.jpg", "recolter.jpeg", "recolter.png", "camion.png", "camion.png"];
let btnFailImages = ["poule.png", "limace.png", "recolter.jpg", "arracher.png",  "planter.png", "planter.png"];

//DOM selectors
// let imgCirlce = document.getElementsByClassName('img.circle');




let btnCounter = 0;
let gameOver = false;
// Change the button image on click
let changeBtn1Image = () => {
    if(!gameOver && btnCounter < btnWinImages.length){
        document.getElementById("button1").src = `./images/${btnWinImages[btnCounter]}`;
        document.getElementById("button2").src = `./images/${btnFailImages[btnCounter]}`;
        changeMainImage(winImages[btnCounter]);
        btnCounter++;
    }else{
        showRestartBtn();
    }
}

let changeBtn2Image = () =>{
    changeMainImage(failImages[btnCounter]);
    showRestartBtn();
}

let changeMainImage = mainImage => {
    document.getElementById("mainImg").src = `./images/${mainImage}`;
}

let showRestartBtn = () => {
    if(!gameOver){
        document.getElementById("restart-btn").classList.remove("d-none");
    }
    gameOver = true;
}