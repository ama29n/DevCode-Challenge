function main() {
    let stars = [];
    for(let i = 0; i < 5; i++) {
        let star = document.getElementById(i);
        stars.push(star);

        star.addEventListener("click", function() {
            fillStar(star);
        });
        
        star.addEventListener("mouseover", function() {
            hoverStar(star);
        });

        star.addEventListener("mouseout", function() {
            hoverOutStar(star);
        });
    }

    function fillStar(star) {
        let id = parseInt(star.id);

        if(stars[id].classList.contains("coloredStar") && (id == 4 || !stars[id + 1].classList.contains("coloredStar")))
        emptyStar(star);
        else {
            for(let i = 0; i <= id; i++) {
                stars[i].classList.add("coloredStar");
            }
            let rating = document.querySelector(".rating");
            rating.innerHTML = id + 1;
    
            for(let i = id + 1; i < 5; i++) {
                stars[i].classList.remove("coloredStar");
            }
        }
    }

    function emptyStar(star) {
        let id = parseInt(star.id);
        for(let i = 0; i <= id; i++) {
            stars[i].classList.remove("coloredStar");
        }
        let rating = document.querySelector(".rating");
        rating.innerHTML = 0;
    }

    function hoverStar(star) {
        let id = parseInt(star.id);
        for(let i = 0; i <= id; i++) {
            stars[i].classList.add("hoveredStar");
        }
    }

    function hoverOutStar(star) {
        let id = parseInt(star.id);
        for(let i = 0; i <= id; i++) {
            stars[i].classList.remove("hoveredStar");
        }
    }

}

main();