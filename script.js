let rules = document.getElementById("rules");
let close = document.getElementById("close");
let body = document.getElementById("body");
let computer_id = "";
let user_id = "";
let user_win = "";
let computer_choose = 0;

score_num.innerText = "0"


rules.addEventListener("click", () => {
    rules_img.style.display = "flex";
    body.style.opacity = "0.5"
    body.style.overflow = "hidden"
});
close.addEventListener("click", () => {
    rules_img.style.display = "none";
    body.style.opacity = "1"
    body.style.overflow = "visible"
});



function check_computer_value() {
    switch (computer_choose) {
        case 0:
            computer_id = "icon-paper";
            break;
        case 1:
                computer_id = "icon-scissors";
                break;
        case 2:
            computer_id = "icon-rock";
            break;
    }
}

function check_user_value(user_choose) {
    switch (user_choose) {
        case 0:
            user_id = "icon-paper";
            break;
        case 1:
            user_id = "icon-scissors";
            break;
        case 2:
            user_id = "icon-rock";
            break;
    }
}

function who_win(user_choose)
{
    if (computer_choose==user_choose) {
        user_win="No One Win";
    } 
    else if (user_choose==0 && computer_choose==1) {
        user_win="YOU LOSE";
        score_num.innerText = score_num.innerText-1;
    }
    else if (user_choose==0 && computer_choose==2) {
        user_win="YOU WIN";
        score_num.innerText = parseInt(score_num.innerText)+1;
    }
    else if (user_choose==1 && computer_choose==0) {
        user_win="YOU WIN";
        score_num.innerText = parseInt(score_num.innerText)+1;
    }
    else if (user_choose==1 && computer_choose==2) {
        user_win="YOU LOSE";
        score_num.innerText = score_num.innerText-1;
    }
    else if (user_choose==2 && computer_choose==0) {
        user_win="YOU LOSE";
        score_num.innerText = score_num.innerText-1;
    }
    else if (user_choose==2 && computer_choose==1) {
        user_win="YOU Win";
        score_num.innerText = parseInt(score_num.innerText)+1;
    }
}



function show_user_picked() {
    search_winner.innerHTML =
        `<div class="you">
            <div class="you_title">
                YOU PICKED
            </div>
            <div class="you_button">
                <div class="button2" id="${user_id}">
                    <div class="button_back"><img src="Images/${user_id}.svg" alt="paper"></div>
                </div>
            </div>
        </div>
        <div class="computer">
            <div class="computer_title">
                THE HOUSE PICKED
            </div>
            <div class="computer_button">
                <div class="button2" style="background:transparent; box-shadow:none">
                    <div class="button_back" style="box-shadow:none; background:black"></div>
                </div>
            </div>
        </div>
    `
}

function show_computer_picked() {
    search_winner.innerHTML =
        `<div class="you">
            <div class="you_title">
                  YOU PICKED
            </div>
            <div class="you_button">
                  <div class="button2" id="${user_id}">
                    <div class="button_back"><img src="Images/${user_id}.svg" alt="paper"></div>
                  </div>
            </div>
        </div>
                
        <div class="computer" >
            <div class="computer_title">
                THE HOUSE PICKED
            </div>
            <div class="computer_button">
                <div class="button2" id="${computer_id}">
                    <div class="button_back"><img src="Images/${computer_id}.svg" alt="rock"></div>
                </div>
            </div>
        </div>
    `
}

function show_result(user_choose) {
    who_win(user_choose);
    search_winner.innerHTML =
        `<div class="you">
            <div class="you_title">
                YOU PICKED
            </div>
            <div class="you_button">
                <div class="button2" id="${user_id}">
                    <div class="button_back"><img src="Images/${user_id}.svg" alt="paper"></div>
                </div>
            </div>
        </div>
        <div class="win_play">
            <div class="win_or_lose">
                ${user_win}
            </div>
            <div class="play_again" onclick="play_again()">
                PLAY AGAIN
            </div>
        </div>
        <div class="computer" >
            <div class="computer_title">
                THE HOUSE PICKED
            </div>
            <div class="computer_button">
                <div class="button2" id="${computer_id}">
                    <div class="button_back"><img src="Images/${computer_id}.svg" alt="rock"></div>
                </div>
            </div>
        </div>
    `
}



function clicked(user_choose) {
    buttons.style.display = "none";
    search_winner.style.display = "flex";

    computer_choose = Math.floor(Math.random() * 3)
    check_user_value(user_choose);
    check_computer_value();
    show_user_picked();

    setTimeout(() => {
        show_computer_picked();
    }, 500);
    setTimeout(() => {
        show_result(user_choose);
    }, 1000);
}

function play_again()
{
    buttons.style.display = "flex";
    search_winner.style.display = "none";
}