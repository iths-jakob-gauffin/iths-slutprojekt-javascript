const userNamePlace = document.querySelector("#name");
// const userNamePlace = document.querySelector(".form");
const emailPlace = document.querySelector("#email");

const oneWeek = document.querySelector("#one");
const oneMonth = document.querySelector("#month");
const forever = document.querySelector("#forever");
const musicPlace = document.querySelector("#music");
const foodPlace = document.querySelector("#food");

const button = document.querySelector("body > div > div > section > div > div > div > form > button");
var formInfoArray = [];

// button.addEventListener("click", e => {
//     e.preventDefault();
//     getFormInfo();
// });

function passValues() {
    const userName = userNamePlace.value.trim();
    const email = emailPlace.value.trim();
    const music = musicPlace.value.trim();
    const food = foodPlace.value.trim();
    let stay = "";

    if (oneWeek.checked) {
        stay = "one amazing week";
    } else if (oneMonth.checked) {
        stay = "an entire month";
    } else if (forever.checked) {
        stay = "the rest of eternity";
    }
    localStorage.setItem("userName", userName);
    localStorage.setItem("email", email);
    localStorage.setItem("stay", stay);
    localStorage.setItem("music", music);
    localStorage.setItem("food", food);
}

function getFormInfo() {

    console.log("form has been received");

    const userName = userNamePlace.value.trim();
    const email = emailPlace.value.trim();
    const music = musicPlace.value.trim();
    const food = foodPlace.value.trim();
    let stay = "";

    if (oneWeek.checked) {
        stay = "one amazing week";
    } else if (oneMonth.checked) {
        stay = "an entire month";
    } else if (forever.checked) {
        stay = "the rest of eternity";
    }

    formInfoArray = [userName, email, stay, music, food];
    console.log(formInfoArray);

    link(formInfoArray);

}

function getUserInfo() {
    return getFormInfoArray;
}

// function link(formInfoArray) {
//     window.location.replace("./staff2.html");
//     return formInfoArray;
// }

userNamePlace.addEventListener("keyup", e => {
    e.preventDefault();
    const userName = userNamePlace.value.trim();
    console.log(userName);
});

emailPlace.addEventListener("keyup", e => {
    e.preventDefault();
    const email = emailPlace.value.trim();
    console.log(email);
});


if (oneWeek.checked) {
    stay = "1 week";
} else if (oneMonth.checked) {
    stay = "1 month";
} else if (forever.checked) {
    stay = "forever";
}

// else {
//     stay = 
// }