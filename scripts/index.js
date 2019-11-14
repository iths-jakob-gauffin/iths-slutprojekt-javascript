// import '../styles/index.scss';
// import "../styles/pages/_staff.scss";

// import fill from "./staff/main_staff";
// import empties from "./staff/main_staff";
// import temp from "./staff/main_staff";
// import startLoop from "./staff/main_staff";
// import dragStart from "./staff/main_staff";
// import dragEnter from "./staff/main_staff";
// import dragLeave from "./staff/main_staff";
// import dragOver from "./staff/main_staff";
// import dragDrop from "./staff/main_staff";
// import dragEnd from "./staff/main_staff";
// import renderChef from "./staff/main_staff";
// import GetTvShow from "./staff/staff";

const apikey = '_1BmfToSqcASZ-ZnKYbwioQKgbGTBChP';
const input = document.querySelector('form');
const checkPerson = document.querySelector('#byPerson');
const checkCharacter = document.querySelector('#byCharacter');
const checkTvShow = document.querySelector('#byTvShow');
const castMemberPlace = document.querySelector('.castMembers');
const selectJob = document.querySelector(".select-job");
const TvShow = new GetTvShow(castMemberPlace);
const dragAndDrop = new DragAndDrop();


const scanAllstarButton = document.querySelector("body > div.container > div > a");

scanAllstarButton.addEventListener("click", e => {

    const print = new Print();

    print.calling();

})

function clear() {
    for (var key in tvCastObject) {
        // this check can be safely omitted in modern JS engines
        // if (obj.hasOwnProperty(key))
        delete tvCastObject[key];
    }
}

input.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = input.tvshow.value.trim();
    TvShow
        .getTvShow(userInput)
        .then(TvShow.clearTvCastObject())
        .then(TvShow.clearList())

        .then((data) => TvShow.getCast(data.show.id))
        .then((data) => TvShow.createActorObject(data))
        .then((data) => TvShow.renderAndAddDragEvent(data))
        .then(dragAndDrop.startLoop())
});