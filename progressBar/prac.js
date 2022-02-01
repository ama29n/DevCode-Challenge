function main() {
    
    let btn = document.querySelector(".content a");
    btn.addEventListener("click", function() {

        let seconds = document.querySelector(".seconds");

        if(seconds.innerText == "") {
            seconds.innerText = 1;
        } else {
            let num = parseInt(seconds.innerText);
            seconds.innerText = num + 1;
        }

        if(!document.querySelector(".bar").classList.contains(".underProgress")) {
            document.querySelector(".bar").classList.add(".underProgress");
            progressBar();
        }
    });

    function progressBar() {
        let progress = document.querySelector(".progress");

        for(let i = 0; i <= 100; i++) {
            setTimeout(() => {
                progress.style.width = i + "%";
            }, i * 50);

            if(i == 100) setTimeout(unProgress, i * 50);
        }
    }

    function unProgress() {
        let seconds = document.querySelector(".seconds");
        let progress = document.querySelector(".progress");
        progress.style.width = "0px";
        if(seconds.innerText == '1') {
            seconds.innerText = "";
            document.querySelector(".bar").classList.remove(".underProgress");
        } else {
            let num = parseInt(seconds.innerText);
            num--;
            seconds.innerText = num;
            progressBar();
        }

    }
}

main();