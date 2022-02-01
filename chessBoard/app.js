function main() {

    let squareArray = [];

    function createBoard() {

        let board = document.querySelector(".board");

        for(let i = 0; i < 8; i++) {
            let array = [];
            for(let j = 0; j < 8; j++) {

                let div = document.createElement("div");
            
                if(i % 2 == 0) {
                    if(j % 2 == 0) {
                        div.classList.add("whiteSquare");
                    } else {
                        div.classList.add("blackSquare");
                    }
                } else {
                    if(j % 2 != 0) {
                        div.classList.add("whiteSquare");
                    } else {
                        div.classList.add("blackSquare");
                    }
                }

                div.setAttribute("id", i * 8 + j);
                board.appendChild(div);

                array.push(div);

                div.addEventListener("click", function() {
                    printDiagonals(div);
                });
            }
            squareArray.push(array);
        }
        
    }
    createBoard();

    function printDiagonals(div) {
        if(!document.querySelector(".board").classList.contains("active")) {
                
                let id = parseInt(div.id);
                let row = Math.floor(id / 8);
                let column = id % 8;
    
                let board = document.querySelector(".board");
                board.classList.add("active");
    
                squareArray[row][column].classList.add("mainClickedSquare");
    
                // Upper Right Diagonal
                for(let i = row, j = column; i >= 0 && j < 8; i--, j++)
                    squareArray[i][j].classList.add("diagonalElements");
    
                // Lower Right Diagonal
                for(let i = row, j = column; i < 8 && j < 8; i++, j++) 
                    squareArray[i][j].classList.add("diagonalElements");
    
                // Upper Left Diagonal
                for(let i = row, j = column; i >= 0 && j >= 0; i--, j--)
                    squareArray[i][j].classList.add("diagonalElements");
    
                // Lower Left Diagonal
                for(let i = row, j = column; i < 8 && j >= 0; i++, j--) 
                    squareArray[i][j].classList.add("diagonalElements");
                
        } else {
            if(div.classList.contains("mainClickedSquare")) {

                div.classList.remove("mainClickedSquare");
                document.querySelector(".board").classList.remove("active");
    
                let id = parseInt(div.id);
                let row = Math.floor(id / 8);
                let column = id % 8;
    
                // Upper Right Diagonal
                for(let i = row, j = column; i >= 0 && j < 8; i--, j++)
                    squareArray[i][j].classList.remove("diagonalElements");
    
                // Lower Right Diagonal
                for(let i = row, j = column; i < 8 && j < 8; i++, j++) 
                    squareArray[i][j].classList.remove("diagonalElements");
    
                // Upper Left Diagonal
                for(let i = row, j = column; i >= 0 && j >= 0; i--, j--)
                    squareArray[i][j].classList.remove("diagonalElements");
    
                // Lower Left Diagonal
                for(let i = row, j = column; i < 8 && j >= 0; i++, j--) 
                    squareArray[i][j].classList.remove("diagonalElements");
                
    
            }
        }
    }
}



main();

















