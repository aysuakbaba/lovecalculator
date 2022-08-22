let loveScore = Math.random();
loveScore = Math.floor(loveScore*100) +1;
const fonk = () => {
    document.getElementById("button").innerHTML = "Your love score is " + loveScore;
}

button.addEventListener("click",fonk);
