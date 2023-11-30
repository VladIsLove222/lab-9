const deck = ['6.png', '7.png', '8.png', '9.png', 'J.png', 'Q.png', 'K.png', 'T.png', 'JOKER.png'];
let playerScore = 0;
let computerScore = 0;
let round = 0;
let playerName = '';
let playerCards = [];
let computerCards = [];
function getRandomCard() {
  return deck[Math.floor(Math.random() * deck.length)];
}
function getCardValue(card) {
  switch (card) {
	case 'JOKER.png':
      return 10;
    case 'J.png':
      return 2;
    case 'Q.png':
      return 3;
    case 'K.png':
      return 4;
    case 'T.png':
      return 11;
    default:
      return +card.slice(0, -4); 
  }
}
function showResult() {
  alert(`Рахунок гравця: ${playerScore}\nРахунок комп'ютера: ${computerScore}`);
  let win;
  if (playerScore > computerScore) {
    win = 'Гравець';
  } else if (computerScore > playerScore) {
    win = 'Комп`ютер';
  }  else {
    win = 'Нічия';
  }
  alert(`Переміг: ${win}`);
}
startGame();
function startGame() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  playerCards = [];
  computerCards = [];
  document.getElementById('drawBtn').removeAttribute('disabled');
  playerName = prompt('Введіть ваше ім\'я');
  document.getElementById('playerName').textContent = playerName;
  document.getElementById('drawBtn').addEventListener('click', function () {
    if (round == 0) {
      round = 1;
      document.getElementById('roundCounter').textContent = round + ' з 3 раундів';
    }
    const playerCard = getRandomCard();
    const computerCard = getRandomCard();
    playerCards.push(playerCard);
    computerCards.push(computerCard);
    playerScore += getCardValue(playerCard);
    computerScore += getCardValue(computerCard);
    document.getElementById('playerCardImg').src = 'img/' + playerCard;
    document.getElementById('playerScore').textContent = playerScore.toString();
    document.getElementById('computerCardImg').src = 'img/' + computerCard;
    document.getElementById('computerScore').textContent = computerScore.toString();
    document.getElementById('roundCounter').textContent = round + ' з 3 раундів';
    if (round == 3) {
      showResult();
      document.getElementById('drawBtn').setAttribute('disabled', 'true');
    } else {
      round++;
    }
  });
}