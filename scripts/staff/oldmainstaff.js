// import GetTvShow from './staff';
// import draggedHtml from "./staff";
// import '../../styles/index.scss';


const fill = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');
const temp = this.innerHtml;

let driver = true;
let chef = true;
let guide = true;
let cleaner = true;
let chief = true;

function startLoop() {
    for (const empty of empties) {
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('dragenter', dragEnter);
        empty.addEventListener('dragleave', dragLeave);
        empty.addEventListener('drop', dragDrop);
    }
}

function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

    // console.log('börjar dra');

}

function dragOver(e) {
    e.preventDefault();
    console.log('over');
}

function dragEnter(e) {
    e.preventDefault();
    console.log('enter');
    if (!this.classList.contains("notEmpty")) {
        this.className += ' hovered';
    };
}

function dragLeave() {
    console.log('leave');
    if (!this.classList.contains("notEmpty")) {
        this.className = 'empty';
    };
}

function dragDrop() {
    console.log('drop');
    this.className = 'empty';
    this.append(fill);
    this.innerHTML = '';
    this.classList.add("notEmpty");
    this.classList.remove("empty");
    const staffId = this.id;

    renderStaff(draggedHtml, staffId);

    this.setAttribute('draggable', 'false');
}

function dragEnd() {
    this.className = 'fill';
    console.log('slutar dra');
}

function renderStaff(draggedItem, staffId) {
    const staffPlace = document.querySelector('#' + staffId);
    const staffInfo = document.createElement('div');
    staffInfo.innerHTML = draggedItem;
    staffPlace.appendChild(staffInfo);
    console.log(draggedItem);
}

// function renderDriver(draggedItem) {
//     if (driver) {
//         const chefPlace = document.querySelector('#driver');
//         const chefInfo = document.createElement('div');
//         chefInfo.classList.add("paragraph");
//         chefInfo.innerHTML = draggedItem;
//         chefPlace.appendChild(chefInfo);
//         driver = false;
//     }
// }

// function renderChef(draggedItem) {
//     const chefPlace = document.querySelector('#chef');
//     const chefInfo = document.createElement('div');
//     chefInfo.classList.add("paragraph");
//     chefInfo.innerHTML = draggedItem;
//     chefPlace.appendChild(chefInfo);
// }

// function renderGuide(draggedItem) {
//     const chefPlace = document.querySelector('#guide');
//     const chefInfo = document.createElement('div');
//     chefInfo.classList.add("paragraph");
//     chefInfo.innerHTML = draggedItem;
//     chefPlace.appendChild(chefInfo);
// }

// function renderCleaner(draggedItem) {
//     const chefPlace = document.querySelector('#cleaner');
//     const chefInfo = document.createElement('div');
//     chefInfo.classList.add("paragraph");
//     chefInfo.innerHTML = draggedItem;
//     chefPlace.appendChild(chefInfo);
// }

// function renderChief(draggedItem) {
//     const chefPlace = document.querySelector('#chief');
//     const chefInfo = document.createElement('div');
//     chefInfo.classList.add("paragraph");
//     chefInfo.innerHTML = draggedItem;
//     chefPlace.appendChild(chefInfo);
// }


// GLOBAL STATE 
const allstarObject = {};
let imagesArray = [];
let staffArray = [];
let i = 0;
let y = 0;


// FOR 900px AND BELOW
function submitStaff() {
    const jobElement = document.querySelector(".jobs");
    const job = jobElement.options[jobElement.selectedIndex];
    let selectedJob = job.innerHTML;
    console.log(job.innerHTML);
    console.log(selectedJob);

    const actorElement = document.querySelector(".actors");
    const actor = actorElement.options[actorElement.selectedIndex];
    let selectedActor = actor.innerHTML;
    console.log(actor.innerHTML);
    //FUNKAR OVAN

    staffArray.push(job.innerHTML, actor.innerHTML);

    removeJob(job.innerHTML);

    // console.log(staffArray);

    writeOutSubmittedStaff(staffArray);
    allstarObject[staffArray[y]] = mobileAllStar(staffArray[y + 1], staffArray[y]);
    let optionPath = document.querySelector("#job");
    let path = document.querySelector("#main-staff > div.allstarPhone > form.select-job");
    let actorPath = document.querySelector("#main-staff > div.allstarPhone > form.select-actor")
    let saveButtonPlace = document.querySelector("#main-staff > div.allstarPhone > section.submit-staff > button");
    let confirmButtonPlace = document.querySelector("#main-staff > div.allstarPhone > section.submit-staff");
    if (optionPath.length == 0) {
        clearOptionList(optionPath);
        path.innerHTML = "Done!";
        actorPath.remove();
        saveButtonPlace.remove();
        const confirmButton = document.createElement("button");
        confirmButton.innerText = "CONFIRM";
        saveButtonPlace.appendChild(confirmButton);
        confirmButtonPlace.appendChild(confirmButton);
        console.log(allstarObject);
        console.log(imagesArray);

    }

}

function writeOutSubmittedStaff(staffArray) {
    if (i == 0) {
        i = 0;
    } else {
        i++;
    }

    const writePlace = document.querySelector(".selected-staff");
    const staffWorker = document.createElement("p");
    staffWorker.innerText = `${staffArray[i]} : ${staffArray[i+1]}`;
    staffWorker.classList.add("paragraph");
    i++;
    y++;
    writePlace.appendChild(staffWorker);
}

function removeJob(jobToBeRemoved) {
    const jobList = document.querySelector(".jobs");
    console.log(jobList.length);
    let newJobList = [];
    for (let job of jobList) {

        if (!job.classList.contains(jobToBeRemoved.toLowerCase())) {
            console.log("här");

            console.log(job.innerHTML);
            console.log(job.innerText);
            console.log(job);

            let jobSelectElement = job.innerText;
            newJobList.push(job);
        };
    };
    clearOptionList(jobList);
    console.log(newJobList);
    for (let newJob of newJobList) {
        let updatedJobOption = document.createElement("option");
        updatedJobOption.innerText = newJob.innerText;
        updatedJobOption.classList.add(newJob.className);
        jobList.appendChild(updatedJobOption);
    }
    console.log(jobList);
}

function clearOptionList(list) {
    while (list.firstChild) {
        list.firstChild.remove();
    }
}

function mobileAllStar(string, keyId) {
    const keyIdLowerCase = keyId.toLowerCase();
    const male = false;
    const mobileObject = {};
    const cardPlace = document.querySelector("#main-staff > div.charactercards-container > ul");
    for (card of cardPlace.childNodes) {
        const paragraph = card.querySelectorAll(".paragraph")
        if (card.textContent.includes(string)) {
            let test = getAllstarWords(card, keyIdLowerCase);
            console.log(test);
        }

        console.log(card.innerHTML);

    }
}

function printMobile(allstarObject) {
    const popup__message = `Congratulations, you have now confirmed your 
    all-star staff! ${allstarObject.driver[0]} is feeling extremely 
    confident about driving you around in any of the jeeps/spaceships/submarines, 
    ${allstarObject.driver[1].genderWords[1]} has just started applying for 
    driving lessons. Your chef, ${allstarObject.chef[0]}, has begun 
    freshening up on ${allstarObject.chef[1].genderWords[3]} cooking skills 
    and is looking forward to serve you your 
    favorite food. ${allstarObject.cleaner[0]} is somewhat of a "hygiene expert" and ${allstarObject.cleaner[1].genderWords[1]} will surely keep the 
    hotel spotless, while you and your guide, ${allstarObject.guide[0]}, 
    are out on various adventurous excursions. 
    We are looking forward to your stay with us! 
    \n Best regards, your chief of staff - ${allstarObject.chief[0]}`;

    const popupMessagePlace = document.querySelector(".popup__message");
    popupMessagePlace.innerText = popup__message;

    const allstarImagesPlace = document.querySelector(".allstarImages");
    imagesArray.forEach((imgUrl) => {
        const allstarImage = document.createElement("img");
        allstarImage.setAttribute("src", imgUrl);
        allstarImage.classList.add("u-15-width")
        allstarImagesPlace.appendChild(allstarImage);
    });
}

function getAllstarWords(allstarQs, keyId) {
    let genderWords = [];
    const allstarP = allstarQs.querySelector(".paragraph");
    if (allstarP.classList.contains("Male")) {
        genderWords = ["He", "he", "His", "his", "Him", "him"];
    } else {
        genderWords = ["She", "she", "Her", "her", "Her", "her"];

    }

    const allstarImg = allstarP.querySelector("img").getAttribute("src");
    allstarObject[keyId] = [
        allstarQs.textContent,
        genderWords[genderWords] = {
            genderWords
        },
        imagesArray.push(allstarImg)
    ];
    return allstarObject;
}



function print() {


    const driverObject = getAllstarWords(document.querySelector("#driver"), "driver");
    const chefObject = getAllstarWords(document.querySelector("#chef"), "chef");
    const guideObject = getAllstarWords(document.querySelector("#guide"), "guide");
    const cleanerObject = getAllstarWords(document.querySelector("#cleaner"), "cleaner");
    const allstarObject = getAllstarWords(document.querySelector("#chief"), "chief");
    console.log("allstarobject: " + allstarObject);
    console.log("imagesarray: " + imagesArray)

    const popup__message = `Congratulations, you have now confirmed your 
    all-star staff! ${allstarObject.driver[0]} is feeling extremely 
    confident about driving you around in any of the jeeps/spaceships/submarines, 
    ${allstarObject.driver[1].genderWords[1]} has just started applying for 
    driving lessons. Your chef, ${allstarObject.chef[0]}, has begun 
    freshening up on ${allstarObject.chef[1].genderWords[3]} cooking skills 
    and is looking forward to serve you your 
    favorite food. ${allstarObject.cleaner[0]} is somewhat of a "hygiene expert" and ${allstarObject.cleaner[1].genderWords[1]} will surely keep the 
    hotel spotless, while you and your guide, ${allstarObject.guide[0]}, 
    are out on various adventurous excursions. 
    We are looking forward to your stay with us! 
    \n Best regards, your chief of staff - ${allstarObject.chief[0]}`;

    const popupMessagePlace = document.querySelector(".popup__message");
    popupMessagePlace.innerText = popup__message;

    const allstarImagesPlace = document.querySelector(".allstarImages");
    nowClass.clearList(allstarImagesPlace);
    imagesArray.forEach((imgUrl) => {
        const allstarImage = document.createElement("img");

        allstarImage.setAttribute("src", imgUrl);
        allstarImage.classList.add("u-15-width")
        allstarImagesPlace.appendChild(allstarImage);
    });
}

// export {
//     fill,
//     empties,
//     temp,
//     startLoop,
//     dragStart,
//     dragOver,
//     dragEnter,
//     dragLeave,
//     dragDrop,
//     dragEnd,
//     renderChef as
//     default
// };