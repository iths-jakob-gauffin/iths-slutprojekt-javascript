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
let firstSearch = true;

// function clearList() {
//     const containerPlace = document.querySelector('.castMembers');
//     while (containerPlace.firstChild) {
//         containerPlace.firstChild.remove();
//     }
// }


function clear() {
    for (var key in tvCastObject) {
        // this check can be safely omitted in modern JS engines
        // if (obj.hasOwnProperty(key))
        delete tvCastObject[key];
    }
}

input.addEventListener('submit', (e) => {
    e.preventDefault();
    // clear();

    // const clearObjectValues = (tvCastObject) => {
    //     Object.keys(tvCastObject).forEach((param) => {
    //         if ((tvCastObject[param]).toString() === "[object Object]") {
    //             clearObjectValues(tvCastObject[param]);
    //         } else {
    //             tvCastObject[param] = undefined;
    //         }
    //     })
    //     // return tvCastObject;
    // };

    const userInput = input.tvshow.value.trim();
    const TvShow = new GetTvShow(castMemberPlace);
    const dragAndDrop = new DragAndDrop();
    if (!checkTvShow.checked) {

        TvShow
            // .clearObjectValues(tvCastObject)
            .getTvShow(userInput)
            .then(TvShow.clearTvCastObject())
            .then(TvShow.clearList())
            .then((data) => TvShow.getCast(data.show.id))
            .then((data) => TvShow.createActorObject(data))
            .then((data) => TvShow.renderAndAddDragEvent(data))
            .then(dragAndDrop.startLoop())
            .then(dragAndDrop.fill.addEventListener('dragstart', dragAndDrop.dragStart())
                .then(dragAndDrop.fill.addEventListener('dragend', dragAndDrop.dragEnd())));
    }
});
// input.addEventListener('submit', (e) => {
//     e.preventDefault();
//     clearList();
//     const userInput = input.tvshow.value.trim();
//     const nowClass = new GetTvShow(containerPlace);
//     if (!checkTvShow.checked) {
//         nowClass
//             .getTvShow(userInput)
//             .then((data) => nowClass.getCast(data.show.id))
//             .then((data) => nowClass.renderData(data, checkTvShow.checked))

//             .then(startLoop())
//             .then(fill.addEventListener('dragstart', dragStart()).then(fill.addEventListener('dragend', dragEnd())));
//     }
// });