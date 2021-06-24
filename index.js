let username = prompt("enter your name");
while (!username) {
    alert("please enter valid username");
    username = prompt("enter your name");
}

let userClass = document.querySelector(".name");
userClass.innerHTML = username;



function roll() {
    const player1 = Math.floor(Math.random() * 6) + 1;
    const player2 = Math.floor(Math.random() * 6) + 1;
    const result = document.querySelector('.showResult');

    if (player1 > player2) {
        let img1 = document.querySelector('.img1');
        let path = "images/dice" + player1 + ".png";
        img1.src = path;

        let img2 = document.querySelector('.img2');
        let path2 = "images/dice" + player2 + ".png";
        img2.src = path2;

        result.innerHTML = username + " wins";


    }
    else if (player2 > player1) {


        let img1 = document.querySelector('.img1');
        let path1 = "images/dice" + player1 + ".png";
        img1.src = path1;

        let img2 = document.querySelector('.img2');
        let path2 = "images/dice" + player2 + ".png";
        img2.src = path2;


        result.innerHTML = "pratik  wins";


    }
    else {
        let img1 = document.querySelector('.img1');
        let path1 = "images/dice" + player1 + ".png";
        img1.src = path1;

        let img2 = document.querySelector('.img2');
        let path2 = "images/dice" + player2 + ".png";
        img2.src = path2;

        result.innerHTML = "its Draw";
    }












}