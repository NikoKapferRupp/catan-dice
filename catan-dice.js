function getRandomInt(max, plusOne) {
  return plusOne ? Math.floor(Math.random() * max) + 1 : Math.floor(Math.random() * max);
}

let getDiceCards = () => {
  let diceArray = [];
  for (let firstDice = 1; firstDice <= 6; firstDice++) {
    for (let secondDice = 1; secondDice <= 6; secondDice++) {
      diceArray.push(firstDice + secondDice);
    }
  }
  return diceArray;
}

function drawRandomCard(diceCards) {
  let randomNum = getRandomInt(diceCards.length, false)
  let cardDrawn = diceCards[randomNum];
  diceCards.splice(randomNum, 1);
  return cardDrawn;
}

function rollDoubleDice() {
  return getRandomInt(6, true) + getRandomInt(6, true);
}

let testRand = (testRuns) => {
  let countObj = {};
  for (let count = 0; count < testRuns; count++) {
    let value = rollDoubleDice();    
    Object.hasOwn(countObj, value) ? countObj[value] += 1 : countObj[value] = 1;   
  }
  return countObj;
}

let diceCards = getDiceCards();