function main() {
    let btn = document.querySelector(".main a");

    btn.addEventListener("click", function() {
        if(!btn.classList.contains("disableButton")) {
            btn.classList.add("disableButton");
            startGame();
        }
    });

    let cellsArray = [];
    let checkArray = [];
    let blinkArray = [];

    for(let i = 0; i < 5; i++) {
        let cell = document.getElementById(i);
        cellsArray.push(cell);
        cell.classList.add("disableCells");
        cell.addEventListener("click", function() {
            cellClick(cell);
        });
    }

    function cellClick(cell) {
        checkArray.push(parseInt(cell.id)); 

        if(checkArray.length == blinkArray.length) 
            check();
    }

    let level = 1;

    function startGame() {
        blinkArray = [];
        for(let i = 1; i <= level; i++) {
            let idx = Math.floor(Math.random() * cellsArray.length);
            blinkArray.push(idx);
        }
        for(let i = 0; i < blinkArray.length; i++) {
            setTimeout(() => {
                cellsArray[blinkArray[i]].classList.add("blink");
            }, (i + 1) * 900);

            setTimeout(() => {
                cellsArray[blinkArray[i]].classList.remove("blink");
            }, (i + 1) * 900 + 200);

            if(i == blinkArray.length - 1) setTimeout(enableCells, (i + 1) * 900 + 800);
        }

        
        level++;
    }

    function enableCells() {
        checkArray = [];
        for(let i = 0; i < 5; i++) {
            cellsArray[i].classList.remove("disableCells");
        }
    }

    function printColor(guess) {
        for(let i = 0; i < 5; i++)
                cellsArray[i].classList.add("disableCells");

        for(let i = 0; i < 5; i++) {
            setTimeout(() => {
                cellsArray[i].classList.add(guess);
            }, (i + 1) * 200);

            setTimeout(() => {
                cellsArray[i].classList.remove(guess);
            }, (i + 5) * 200);

            if(guess == "correctGuess" && i == 4) setTimeout(startGame, (i + 1) * 500);
            if(guess == "wrongGuess" && i == 4) {
                let score = document.querySelector(".score");
                let highScore = document.querySelector(".highScore");
                if(score.innerHTML > highScore.innerHTML) {
                    highScore.innerHTML = score.innerHTML;
                }
                score.innerHTML = 0;

                btn.classList.remove("disableButton");
                level = 1;
            }
        }
    }

    function check() {
        if(JSON.stringify(checkArray) == JSON.stringify(blinkArray)) {
            let score = document.querySelector(".score");
            let num = parseInt(score.innerHTML);
            num += 1;
            score.innerHTML = num;
            printColor("correctGuess");
        } 
        else printColor("wrongGuess");
    }
}

main();
