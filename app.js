// Version 2:
// create function on button to start game
// should check score and n and determine progress

// Wants:
// Betting
// Log wins and losses DONE
// 3 strikes and you lose
// Images DONE

playerObj = {
  score: 0,
  n: 0,
  wins: 0,
  losses: 0,
};

function showResButton() {
  document.getElementById("start").style.visibility = "hidden";
  document.getElementById("reset").style.visibility = "visible";
}

function resetScore() {
  playerObj.n = "";
  playerObj.score = 0;
  document.getElementById("scoreN").innerHTML = `${playerObj.score}`;
  document.getElementById("number").innerHTML = `${playerObj.n}`;
}

function game() {
  diceRoll();
  if (playerObj.n == 1) {
    loseGame();
  } else if (playerObj.n != 1 && playerObj.score >= 20) {
    winGame();
  }
}

function winGame() {
  playerObj.wins += 1;
  document.getElementById("win").innerHTML = `Wins: ${playerObj.wins}`;
  document.getElementById("lose").innerHTML = `Losses: ${playerObj.losses}`;
  document.getElementById("end").innerHTML = `You have won!`;
  showResButton();
}

function loseGame() {
  playerObj.losses += 1;
  document.getElementById("win").innerHTML = `Wins: ${playerObj.wins}`;
  document.getElementById("lose").innerHTML = `Losses: ${playerObj.losses}`;
  document.getElementById("end").innerHTML = `You have lost :(`;
  showResButton();
}

function diceRoll() {
  playerObj.n = Math.floor(Math.random() * 6 + 1);
  console.log(playerObj.n);
  const num = document.getElementById("number");
  let im = new Image(200, 200);
  switch (playerObj.n) {
    case 1:
      im.src = "Images/face1.jpg";
      num.appendChild(im);
      break;
    case 2:
      im.src = "Images/face2.jpg";
      num.appendChild(im);
      break;
    case 3:
      im.src = "Images/face3.jpg";
      num.appendChild(im);
      break;
    case 4:
      im.src = "Images/face4.jpg";
      num.appendChild(im);
      break;
    case 5:
      im.src = "Images/face5.jpg";
      num.appendChild(im);
      break;
    case 6:
      im.src = "Images/face6.jpg";
      num.appendChild(im);
      break;
  }
  playerObj.score += playerObj.n;
  document.getElementById("scoreN").innerHTML = `Score: ${playerObj.score}`;
}

function restart() {
  resetScore();
  document.getElementById("end").innerHTML = "";
  document.getElementById("start").style.visibility = "visible";
  document.getElementById("reset").style.visibility = "hidden";
  console.log("restart");
}
