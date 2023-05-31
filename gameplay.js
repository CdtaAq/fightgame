<!DOCTYPE html>
<html>
<head>
    <title>Fighting Game</title>
    <style>
        #arena {
            width: 600px;
            height: 400px;
            border: 1px solid black;
            position: relative;
        }
        .player {
            width: 100px;
            height: 150px;
            position: absolute;
            bottom: 0;
        }
        #player1 {
            left: 0;
            background-color: red;
        }
        #player2 {
            right: 0;
            background-color: blue;
        }
        .health-bar {
            width: 100%;
            height: 10px;
            background-color: green;
        }
        #player2 .health-bar {
            background-color: yellow;
        }
        .controls {
            margin-top: 20px;
        }
        button {
            margin-right: 10px;
        }
    </style>
</head>
<body>
    <div id="arena">
        <div id="player1" class="player">
            <div class="health-bar" id="player1Health"></div>
        </div>
        <div id="player2" class="player">
            <div class="health-bar" id="player2Health"></div>
        </div>
    </div>
    <div class="controls">
        <button onclick="movePlayer('player1', -10)">Player 1 Move Left</button>
        <button onclick="movePlayer('player1', 10)">Player 1 Move Right</button>
        <button onclick="attack('player1')">Player 1 Attack</button>
        <button onclick="movePlayer('player2', -10)">Player 2 Move Left</button>
        <button onclick="movePlayer('player2', 10)">Player 2 Move Right</button>
        <button onclick="attack('player2')">Player 2 Attack</button>
    </div>

    <script>
        const player1 = document.getElementById('player1');
        const player2 = document.getElementById('player2');
        const player1HealthBar = document.getElementById('player1Health');
        const player2HealthBar = document.getElementById('player2Health');

        let player1Health = 100;
        let player2Health = 100;
        const attackDamage = 10;
        const playerMoveDistance = 10;

        function movePlayer(playerId, distance) {
            const player = document.getElementById(playerId);
            const currentPosition = parseInt(player.style.left) || 0;
            const newPosition = currentPosition + distance;
            
            // Ensure player stays within the arena bounds
            const minPosition = 0;
            const maxPosition = document.getElementById('arena').offsetWidth - player.offsetWidth;
            const boundedPosition = Math.max(minPosition, Math.min(maxPosition, newPosition));

            player.style.left = boundedPosition + 'px';
        }

        function attack(attacker) {
            const target = (attacker === 'player1') ? 'player2' : 'player1';

            // Decrease target's health
            if (target === 'player1') {
                player1Health -= attackDamage;
                player1HealthBar.style.width = player1Health + '%';
            } else {
                player2Health -= attackDamage;
                player2HealthBar.style.width = player2Health + '%';
            }

            // Check for game over condition
            if
