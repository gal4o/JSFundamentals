const gameStart = document.querySelector('.game-start');
const gameArea = document.querySelector('.game-area');
const gameOver = document.querySelector('.game-over');
const gameScore = document.querySelector('.game-score');
const gamePoints = gameScore.querySelector('.points');

gameStart.addEventListener('click', onGameStart);
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

let keys = {};
let player = {
    x: 100,
    y: 300,
    lastTimeFiredFireBall: 0
};
let game = {
    speed: 2,
    movingPlayer: 4,
    fireBallPlayer: 5,
    fireInterval: 1000, //ili1000 ??? for expert
    cloudSpawnInterval: 4000,
    bugSpawnInterval: 1000,
    bugKillBonus: 1000
};
let scene = {
    isActiveGame: true,
    score: 0,
    lastCloudSpawn: 0,
    lastBugSpawn: 0
};

function onGameStart() {
    gameStart.classList.add('hide');

    const wizard = document.createElement('div');
    wizard.classList.add('wizard');
    wizard.style.top = player.y + 'px';
    wizard.style.left = player.x + 'px';
    gameArea.appendChild(wizard);
    player.width = wizard.offsetWidth;
    player.height = wizard.offsetHeight;
    window.requestAnimationFrame(gameAction);
}

function gameAction(timestamp) {
    const wizard = document.querySelector('.wizard');

    //Add pts for time
    scene.score++;

    //Add bugs
    if (timestamp - scene.lastBugSpawn > game.bugSpawnInterval + 5000 * Math.random()) {
        let bug = document.createElement('div');
        bug.classList.add('bug')
        bug.x = gameArea.offsetWidth - 60;
        bug.style.left = bug.x + 'px';
        bug.style.top = (gameArea.offsetHeight - 60) * Math.random() + 'px';
        gameArea.appendChild(bug);
        scene.lastBugSpawn = timestamp;
    }


    //Modify bug positions
    let bugs = document.querySelectorAll('.bug');
    bugs.forEach(bug => {
        bug.x -= game.speed * 2;
        bug.style.left = bug.x + 'px';

        if (bug.x + bug.offsetWidth <= 0) {
            bug.parentElement.removeChild(bug)
        }
    })



    //Add decoration
    if (timestamp - scene.lastCloudSpawn > game.cloudSpawnInterval + 20000 * Math.random()) {
        let cloud = document.createElement('div');
        cloud.classList.add('cloud')
        cloud.x = gameArea.offsetWidth - 200;
        cloud.style.left = cloud.x + 'px';
        cloud.style.top = (gameArea.offsetHeight - 200) * Math.random() + 'px';
        gameArea.appendChild(cloud);
        scene.lastCloudSpawn = timestamp;
    }


    //Modify cloud positions
    let clouds = document.querySelectorAll('.cloud');
    clouds.forEach(cloud => {
        cloud.x -= game.speed;
        cloud.style.left = cloud.x + 'px';

        if (cloud.x + cloud.offsetWidth <= 0) {
            cloud.parentElement.removeChild(cloud)
        }
    })

    //Apply gravitation
    let isAsBottom = player.y + player.height > gameArea.offsetHeight;
    if (!isAsBottom) {
        player.y += game.speed;
    }

    //Modify fireballs positions
    let fireballs = document.querySelectorAll('.fire-ball');
    fireballs.forEach(fireBall => {
        fireBall.x += game.speed * game.fireBallPlayer;
        fireBall.style.left = fireBall.x + 'px';
        if (fireBall.x + fireBall.offsetWidth > gameArea.offsetWidth) {
            fireBall.parentElement.removeChild(fireBall);
        }
    })

    //Register user input
    if (keys.ArrowUp && player.y > 0) {
        player.y -= game.speed * game.movingPlayer;
    }
    if (keys.ArrowDown && !isAsBottom) {
        player.y += game.speed * game.movingPlayer;
    }

    if (keys.ArrowLeft && player.x > 0) {
        player.x -= game.speed * game.movingPlayer;
    }

    if (keys.ArrowRight && player.x + player.width < gameArea.offsetWidth) {
        player.x += game.speed * game.movingPlayer;
    }

    if (keys.Space && player.y > 0) {
        player.y -= game.speed * game.movingPlayer * 3;
    }

    if (keys.KeyS && (timestamp - player.lastTimeFiredFireBall) > game.fireInterval) {
        wizard.classList.add('wizard-fire');

        //Add fireBall
        addFireBall(player);
        player.lastTimeFiredFireBall = timestamp;

    } else {
        wizard.classList.remove('wizard-fire');

    }

    //Colligion detection
    bugs.forEach(bug => {
        if (isCollision(wizard, bug)) {
            gameOverAction();
        }

        fireballs.forEach(fireBall => {
            if (isCollision(fireBall, bug)) {
                scene.score += game.bugKillBonus;
                bug.parentElement.removeChild(bug);
                fireBall.parentElement.removeChild(fireBall);
            }
        })
    });



    //Applys
    wizard.style.top = player.y + 'px';
    wizard.style.left = player.x + 'px';
    gamePoints.textContent = scene.score;

    if (scene.isActiveGame) {
        window.requestAnimationFrame(gameAction);
    }
}

function gameOverAction() {
    scene.isActiveGame = false;
    gameOver.classList.remove('hide');
    // gameStart.classList.remove('hide');
}

function isCollision(firstObj, secondObj) {
    let firstRect = firstObj.getBoundingClientRect();
    let secondRect = secondObj.getBoundingClientRect();

    return !(firstRect.top > secondRect.bottom ||
        firstRect.bottom < secondRect.top ||
        firstRect.right < secondRect.left ||
        firstRect.left > secondRect.right);

}

function addFireBall(player) {
    let fireBall = document.createElement('div');


    fireBall.classList.add('fire-ball');
    fireBall.style.top = (player.y + player.height / 3 - 6) + 'px';
    fireBall.x = player.x + player.width + 4;
    fireBall.style.left = fireBall.x + 'px';

    gameArea.appendChild(fireBall);
}

function onKeyDown(e) {
    // e.preventDefault();  if is nesessery
    keys[e.code] = true;

}

function onKeyUp(e) {
    keys[e.code] = false;

}

