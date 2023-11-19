document.addEventListener('DOMContentLoaded', function () {
    const diceImages = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];

    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function updateDice(player, value) {
        const diceImg = document.querySelector(`.img${player}`);
        diceImg.src = `images/dice${value}.png`;
    }

    function updateWinner(winner) {
        const h1 = document.querySelector('h1');
        h1.textContent = winner;
    }

    function playGame() {
        const player1Value = rollDice();
        const player2Value = rollDice();

        updateDice(1, player1Value);
        updateDice(2, player2Value);

        if (player1Value > player2Value) {
            updateWinner('Player 1 Wins!');
        } else if (player1Value < player2Value) {
            updateWinner('Player 2 Wins!');
        } else {
            updateWinner('It\'s a Draw!');
        }
    }

    playGame();

    const h1 = document.querySelector('h1');
    h1.addEventListener('click', playGame);
});

