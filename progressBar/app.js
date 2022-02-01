function main() {

    let btn = document.querySelector(".content a");
    btn.addEventListener("click", function() {
        let seconds = document.querySelector(".seconds");
        if(seconds.innerText == "")
        seconds.innerText = 1;
        else {
            let num = parseInt(seconds.innerText);
            num++;
            seconds.innerText = num;
        }

        if(!document.querySelector(".bar").classList.contains("underProgress")) {
            document.querySelector(".bar").classList.add("underProgress");
            progressBar();
        }
    });

    function progressBar() {
        let progress = document.querySelector(".progress");
        for(let i = 0; i <= 100; i++) {
            setTimeout(() => {
                progress.style.width = i + "%";
            }, i * 40);

            if(i == 100) {
                setTimeout(unProgress, i * 40);
            }
        }
    }

    function unProgress() {
        let progress = document.querySelector(".progress");
        progress.style.width = "0px";
        let seconds = document.querySelector(".seconds");
        let num = seconds.innerText;
        if(num == 1) {
            num = "";
            seconds.innerText = num;
            document.querySelector(".bar").classList.remove("underProgress");
        }
        else {
            num--;
            seconds.innerText = num;
            progressBar();
        }
    }
        
}

main();

