function main() {
    let board = document.querySelector(".board");
    let colorPanel = document.querySelector(".colorPanel");
    let colorArray = ["blueviolet", "lawngreen", "crimson", "darkturquoise", "deeppink", "aquamarine", "springgreen", "darkorchid", "lightseagreen"];
    let boardSquares = [];

    let selectedColor;
    let selectedColorId = "100";

    // Creating squares in the board
    for(let i = 0; i < 100; i++) {
        let square = document.createElement("div");
        square.classList.add("squareOfBoard");
        square.setAttribute("id", i);
        boardSquares.push(square);
        board.appendChild(square);

        square.addEventListener("click", function() {
            addColor(square);
        });
    }

    //Creating color panel
    for(let i = 0; i < 10; i++) {
        let square = document.createElement("div");
        square.classList.add("squareOfColorPanel");
        square.setAttribute("id", i + 100);
        if(i < 9) {
            square.addEventListener("click", function() {
                selectColor(square);
            });

            square.style.backgroundColor = colorArray[i];
        }
        
        else square.classList.add("refresh");

        colorPanel.appendChild(square);

    }

    // Default Board and selected color
    function DefaultBoard() {

        document.getElementById(selectedColorId).classList.remove("colorPanelSelected");

        for(let i = 0; i < 100; i++) {
            boardSquares[i].style.backgroundColor = "white";
        }

        selectedColor = colorArray[0];
        selectedColorId = "100";

        // Selecting the default color
        document.getElementById(selectedColorId).classList.add("colorPanelSelected");

    }

    DefaultBoard();

    // Setting The Refresh Button 
    document.getElementById(109).addEventListener("click", function() {
        DefaultBoard();
    });

    // function to select the color
    function selectColor(square) {
        document.getElementById(selectedColorId).classList.remove("colorPanelSelected");
        selectedColorId = square.id;
        selectedColor = square.style.backgroundColor;
        console.log(selectedColor);
        square.classList.add("colorPanelSelected");
    }

    // Function to add color the board
    function addColor(square) {
        if(selectedColor == square.style.backgroundColor) {
            square.style.backgroundColor = "White";
        }
        else {
            square.style.backgroundColor = selectedColor;
        }
    }

}

main();