// GLOBAL STATE 
// const allstarObject = {};
const selectedAllstars = {};
let mobileAllstarImagesArray = [];
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
    // const allstarInfo = tvCastObject[actorId];
    let selectedActorId = actor.getAttribute("actorid");
    console.log("selectedactor");

    // console.log(selectedActor);
    // optionAllstar(selectedActorId);

    // optionAllstar(actorId) {
    const optionAllstar = tvCastObject[selectedActorId];
    //     console.log(optionAllstar);

    // }
    // let selectedActor = actor.innerHTML;
    staffArray.push(job.innerHTML);
    console.log(optionAllstar);
    removeJob(job.innerHTML);
    writeOutSubmittedStaff(staffArray, optionAllstar);
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
        const confirmButton = document.createElement("a");
        confirmButton.classList.add("btn-text");
        confirmButton.setAttribute("href", "#popup");
        confirmButton.innerText = "CONFIRM";
        confirmButton.addEventListener("click", () => {
            const newPopup = new Print();
            console.log(selectedAllstars);


            // newPopup.printMobile(selectedAllstars);
            newPopup.message(selectedAllstars);

        });
        saveButtonPlace.appendChild(confirmButton);
        confirmButtonPlace.appendChild(confirmButton);
        // console.log(allstarObject);
        console.log(imagesArray);
    }
}

function writeOutSubmittedStaff(staffArray, optionAllstar) {
    console.log("optionAllstar");
    console.log(optionAllstar);

    const writePlace = document.querySelector(".selected-staff");
    const staffWorker = document.createElement("p");

    // allstarInfoObject["images"] = allstarImagesArray;
    staffWorker.innerText = `${staffArray[i]} : ${optionAllstar[0]}`;
    staffWorker.classList.add("paragraph");
    allstarImagesArray.push([optionAllstar[3]]);
    if (allstarImagesArray.length == 5) {
        selectedAllstars["images"] = allstarImagesArray;
    }
    selectedAllstars[staffArray[i].toLowerCase()] =
        optionAllstar
    // staffArray[i]

    ;
    // mobileAllstarImagesArray.push([optionAllstar[3]])

    // selectedAllstars[staffArray[i]] = [optionAllstar], ["jobs", [staffArray[i]]];
    // selectedAllstars[staffArray[i]]["job"] = [staffArray[i]];
    // selectedAllstars[staffArray[i]] = [staffArray[i]];
    i++;
    writePlace.appendChild(staffWorker);
    // console.log("selectedAllstars");
    // console.log(selectedAllstars);
    // genderWords["genderWords"] = this.giveGenderWords(actor.person.gender);

    // tvCastObject[`${actor.person.id}`] = [actor.person.name,
    //     actor.character.name,
    //     genderWords,
    //     actor.person.image.medium,
    //     actor.character.image.medium,
    //     actor.person.id,
    // ];

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

// function mobileAllStar(string, keyId) {
//     const keyIdLowerCase = keyId.toLowerCase();
//     const male = false;
//     const mobileObject = {};
//     const cardPlace = document.querySelector("#main-staff > div.charactercards-container > ul");
//     for (card of cardPlace.childNodes) {
//         const paragraph = card.querySelectorAll(".paragraph")
//         if (card.textContent.includes(string)) {
//             let test = getAllstarWords(card, keyIdLowerCase);
//             console.log(test);
//         }

//         console.log(card.innerHTML);
//     }
// }

//DETTA NEDAN HAR JAG AVMARKERAT


// removeJob(job.innerHTML);


// writeOutSubmittedStaff(staffArray);
// allstarObject[staffArray[y]] = mobileAllStar(staffArray[y + 1], staffArray[y]);
// console.log("staffarray här nere");
// console.log(staffArray);

// let optionPath = document.querySelector("#job");
// let path = document.querySelector("#main-staff > div.allstarPhone > form.select-job");
// let actorPath = document.querySelector("#main-staff > div.allstarPhone > form.select-actor")
// let saveButtonPlace = document.querySelector("#main-staff > div.allstarPhone > section.submit-staff > button");
// let confirmButtonPlace = document.querySelector("#main-staff > div.allstarPhone > section.submit-staff");
// if (optionPath.length == 0) {
//     clearOptionList(optionPath);
//     path.innerHTML = "Done!";
//     actorPath.remove();
//     saveButtonPlace.remove();
//     const confirmButton = document.createElement("button");
//     confirmButton.innerText = "CONFIRM";
//     saveButtonPlace.appendChild(confirmButton);
//     confirmButtonPlace.appendChild(confirmButton);
//     console.log(allstarObject);
//     console.log(imagesArray);

// }
// }

//DETTA NEDAN HAR JAG OCKSÅ AVMARKERAT
// function writeOutSubmittedStaff(staffArray) {
//     if (i == 0) {
//         i = 0;
//     } else {
//         i++;
//     }

//     const writePlace = document.querySelector(".selected-staff");
//     const staffWorker = document.createElement("p");
//     staffWorker.innerText = `${staffArray[i]} : ${staffArray[i+1]}`;
//     staffWorker.classList.add("paragraph");
//     i++;
//     y++;
//     writePlace.appendChild(staffWorker);
// }

// function removeJob(jobToBeRemoved) {
//     const jobList = document.querySelector(".jobs");
//     console.log(jobList.length);
//     let newJobList = [];
//     for (let job of jobList) {

//         if (!job.classList.contains(jobToBeRemoved.toLowerCase())) {
//             console.log("här");

//             console.log(job.innerHTML);
//             console.log(job.innerText);
//             console.log(job);

//             let jobSelectElement = job.innerText;
//             newJobList.push(job);
//         };
//     };
//     clearOptionList(jobList);
//     console.log(newJobList);
//     for (let newJob of newJobList) {
//         let updatedJobOption = document.createElement("option");
//         updatedJobOption.innerText = newJob.innerText;
//         updatedJobOption.classList.add(newJob.className);
//         jobList.appendChild(updatedJobOption);
//     }
//     console.log(jobList);
// }

// function clearOptionList(list) {
//     while (list.firstChild) {
//         list.firstChild.remove();
//     }
// }

// function mobileAllStar(string, keyId) {
//     const keyIdLowerCase = keyId.toLowerCase();
//     const male = false;
//     const mobileObject = {};
//     const cardPlace = document.querySelector("#main-staff > div.charactercards-container > ul");
//     for (card of cardPlace.childNodes) {
//         const paragraph = card.querySelectorAll(".paragraph")
//         if (card.textContent.includes(string)) {
//             let test = getAllstarWords(card, keyIdLowerCase);
//             console.log(test);
//         }

//         console.log(card.innerHTML);
//     }
// }