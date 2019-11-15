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
    const actorElement = document.querySelector(".actors");
    const actor = actorElement.options[actorElement.selectedIndex];
    let selectedActorId = actor.getAttribute("actorid");

    const optionAllstar = tvCastObject[selectedActorId];
    staffArray.push(job.innerHTML);
    removeJob(job.innerHTML);
    writeOutSubmittedStaff(staffArray, optionAllstar);
    let optionPath = document.querySelector("#job");
    let path = document.querySelector("#main-staff > div.allstarPhone > form.select-job");
    let actorPath = document.querySelector("#main-staff > div.allstarPhone > form.select-actor")
    let saveButtonPlace = document.querySelector("#main-staff > div.allstarPhone > section.submit-staff > a");
    let confirmButtonPlace = document.querySelector("#main-staff > div.allstarPhone > section.submit-staff");
    let shrinkAllstarPhoneGrid = document.querySelector("#main-staff > div.allstarPhone");
    if (optionPath.length == 0) {
        clearOptionList(optionPath);
        // path.innerHTML = "Done!";
        path.remove();
        actorPath.remove();
        saveButtonPlace.remove();
        shrinkAllstarPhoneGrid.classList.add("shrinkGrid");
        const confirmButton = document.createElement("a");
        confirmButton.classList.add("btn-text-gold");
        confirmButton.setAttribute("href", "#popup");
        confirmButton.innerText = "CONFIRM";
        confirmButton.addEventListener("click", () => {
            const newPopup = new Print();
            console.log(selectedAllstars);


            newPopup.message(selectedAllstars);

        });
        saveButtonPlace.appendChild(confirmButton);
        confirmButtonPlace.appendChild(confirmButton);

    }
}

function writeOutSubmittedStaff(staffArray, optionAllstar) {

    const writePlace = document.querySelector(".selected-staff");
    const staffWorker = document.createElement("p");

    staffWorker.innerText = `${staffArray[i]} : ${optionAllstar[0]}`;
    staffWorker.classList.add("paragraph");
    allstarImagesArray.push([optionAllstar[3]]);
    if (allstarImagesArray.length == 5) {
        selectedAllstars["images"] = allstarImagesArray;
    }
    selectedAllstars[staffArray[i].toLowerCase()] = optionAllstar;
    i++;
    writePlace.appendChild(staffWorker);
}

function removeJob(jobToBeRemoved) {
    const jobList = document.querySelector(".jobs");
    let newJobList = [];
    for (let job of jobList) {

        if (!job.classList.contains(jobToBeRemoved.toLowerCase())) {
            let jobSelectElement = job.innerText;
            newJobList.push(job);
        };
    };
    clearOptionList(jobList);
    for (let newJob of newJobList) {
        let updatedJobOption = document.createElement("option");
        updatedJobOption.innerText = newJob.innerText;
        updatedJobOption.classList.add(newJob.className);
        jobList.appendChild(updatedJobOption);
    }

}

function clearOptionList(list) {
    while (list.firstChild) {
        list.firstChild.remove();
    }
}