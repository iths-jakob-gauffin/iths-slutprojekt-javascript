const allstarInfoObject = {};
let allstarImagesArray = [];
class Print {
    constructor() {
        this.allstarImagesPlace = document.querySelector(".allstarImages");
        this.resetPlace = document.querySelector("#popup > div > div.popup__right > a.btn-text").addEventListener("click", () => {
            allstarImagesArray = []
        });
    }
    // renderStaff(draggedItem, staffId) {
    //     console.log("hej");
    //     const staffPlace = document.querySelector('#' + staffId);
    //     const staffInfo = document.createElement('div');
    //     staffInfo.innerHTML = draggedItem;
    //     staffPlace.appendChild(staffInfo);
    //     console.log(draggedItem);
    // }
    calling(input) {
        const driverObject = this.getAllstar(document.querySelector("#driver"), "driver");
        // console.log(driverObject.driver[2].genderWords[4]);
        this.chefObject = this.getAllstar(document.querySelector("#chef"), "chef");
        this.guideObject = this.getAllstar(document.querySelector("#guide"), "guide");
        this.cleanerObject = this.getAllstar(document.querySelector("#cleaner"), "cleaner");

        // const allstarObject = this.getAllstar(document.querySelector("#chief"), "chief");
        const allstarObject = this.getAllstar(document.querySelector("#boss"), "boss");

        console.log("allstarbilder här");
        console.log(allstarObject);
        // console.log(allstarObject.driver[""
        //     0 ""][2]);

        // console.log(allstarObject.driver.genderWords[0]);
        this.message(allstarObject);


    }
    message(allstarObject) {
        // const popup__message = `Congratulations, you have now confirmed your 
        // all-star staff! ${allstarObject.driver[0]}, or "${allstarObject.driver[1]}", is feeling extremely 
        // confident about driving you around in any of the jeeps/spaceships/submarines. 
        // ${allstarObject.driver[2].genderWords[0]} has just started applying for 
        // driving lessons. Your chef, "${allstarObject.chef[1]}", has begun 
        // freshening up on ${allstarObject.chef[2].genderWords[3]} cooking skills 
        // and is looking forward to serve you your 
        // favorite food. "${allstarObject.cleaner[0]}", or ${allstarObject.cleaner[1]} is somewhat of a hygiene 
        // expert and ${allstarObject.cleaner[2].genderWords[1]} will surely keep the 
        // hotel spotless, while you and your guide, "${allstarObject.guide[0]}", 
        // are out on various adventurous excursions. 
        // We are looking forward to your stay with us! 
        // /Chief of staff - "${allstarObject.chief[0]}".`;

        const popup__message = `You have now confirmed your all-star staff! 
        
        ${allstarObject.driver[0]}, also known as "${allstarObject.driver[1]}", will be your driver. 
        ${allstarObject.driver[2].genderWords[0]} has just started applying for driving lessons. 
        
        Your chef will be "${allstarObject.chef[1]}". 

        "${allstarObject.cleaner[0]}", or ${allstarObject.cleaner[1]} will keep the hotel spotless, 
        while you and your guide, "${allstarObject.guide[0]}", are out on various adventurous excursions. 

        We are looking forward to your stay with us! 
        / Chief of staff - "${allstarObject.boss[0]}".`;

        const popupMessagePlace = document.querySelector(".popup__message");
        popupMessagePlace.innerText = popup__message;
        popupMessagePlace.classList.add("paragraph");
        // if (mobile){

        // }
        this.writeOutAllstarImage(allstarObject);

        // const allstarImagesPlace = document.querySelector(".allstarImages");
        // nowClass.clearList(allstarImagesPlace);
        // imagesArray.forEach((imgUrl) => {
        //     const allstarImage = document.createElement("img");

        //     allstarImage.setAttribute("src", imgUrl);
        //     allstarImage.classList.add("u-15-width")
        //     allstarImagesPlace.appendChild(allstarImage);
        // });
    }
    writeOutAllstarImage(allstarObject) {
        this.clearAllstarImages(this.allstarImagesPlace);
        // const allstarImagesPlace = document.querySelector(".allstarImages");
        allstarObject.images.forEach((imgUrl) => {
            const allstarImage = document.createElement("img");
            allstarImage.setAttribute("src", imgUrl);
            allstarImage.classList.add("u-15-width")
            this.allstarImagesPlace.appendChild(allstarImage);
        });

    }
    clearAllstarImages(place) {
        while (place.firstChild) {
            place.firstChild.remove();
        }
    }
    getAllstar(allstarQs, keyId) {
        // allstarInfoObject["images"] = null;
        console.log(allstarImagesArray.length);


        // let genderWords = [];

        // const keyId = this.keyId;
        const allstarId = document.querySelector("#" + keyId);
        const paragraph = allstarId.querySelector(".paragraph")

        // const allstarId2 = allstarQs.querySelector("actorid");
        // const allstarId3 = allstarQs.querySelector("#actorId");


        // const getatt = allstarQs.getAttribute("actorId");
        const actorId = paragraph.getAttribute("actorid");
        const allstarInfo = tvCastObject[actorId];
        console.log("allstarinfo");

        console.log(allstarInfo);


        allstarInfoObject[keyId] = allstarInfo;

        allstarImagesArray.push([allstarInfo[3]])
        allstarInfoObject["images"] = allstarImagesArray;
        // allstarInfoObject["images"] = [allstarInfo[3]];
        // allstarInfoObject["images"] = allstarInfoObject.keyId[3];
        // const allstarImg = allstarP.querySelector("img").getAttribute("src");
        // allstarObject[keyId] = [
        //     allstarQs.textContent,
        //     genderWords[genderWords] = {
        //         genderWords
        //     },
        //     imagesArray.push(allstarImg)
        // ];

        return allstarInfoObject;
        // console.log(actorId);
        // console.log(tvCastObject);

        // this.getActorIdInfo(actorId);



        // if (allstarP.classList.contains("Male")) {
        //     genderWords = ["He", "he", "His", "his", "Him", "him"];
        // } else {
        //     genderWords = ["She", "she", "Her", "her", "Her", "her"];

        // }

        // const allstarImg = allstarP.querySelector("img").getAttribute("src");
        // allstarObject[keyId] = [
        //     allstarQs.textContent,
        //     genderWords[genderWords] = {
        //         genderWords
        //     },
        //     imagesArray.push(allstarImg)
        // ];
        // return allstarObject;
    }
    getActorIdInfo(actorId) {
        const keys = Object.keys(tvCastObject);
        console.log(keys);
        console.log(tvCastObject[actorId]);
        const ActorIdInfoList = tvCastObject[actorId];
        console.log(typeof this.getActorIdInfo);
        // message

        // const values = Object.values(tvCastObject[actorId]);
        // console.log(values);


        // const values = Object.values(tvCastObject);
        for (const key of keys) {
            // if (key == actorId) {
            console.log(key);
            // }
        }
    }


    printMobile(allstarObject) {
        console.log(allstarObject.driver[0]);

        const popup__message = `You have now confirmed your all-star staff! 
        
        
        ${allstarObject.driver[0]}, also known as "${allstarObject.driver[1]}", will be your driver. 
        ${allstarObject.driver[2].genderWords[0]} has just started applying for driving lessons. 
        
        Your chef will be "${allstarObject.chef[1]}". 

        "${allstarObject.cleaner[0]}", or ${allstarObject.cleaner[1]} will keep the hotel spotless, 
        while you and your guide, "${allstarObject.guide[0]}", are out on various adventurous excursions. 

        We are looking forward to your stay with us! 
        / Chief of staff - "${allstarObject.boss[0]}".`;

        const popupMessagePlace = document.querySelector(".popup__message");
        popupMessagePlace.innerText = popup__message;
        popupMessagePlace.classList.add("paragraph");
        // for (let image of allstarObject) {
        //     allstarImagesArray.push([image[3]])
        // }
        // allstarObject["images"] = mobileAllstarImagesArray;
        // allstarObject["images"] = allstarImagesArray;

        this.writeOutAllstarImage(allstarObject);

    }
}

//GAMMAL
// printMobile(allstarObject) {
//     console.log("printmobile är kallad!");

//     const popup__message = `Congratulations, you have now confirmed your 
//     all-star staff! ${allstarObject.driver[0]} is feeling extremely 
//     confident about driving you around in any of the jeeps/spaceships/submarines, 
//     ${allstarObject.driver[1].genderWords[1]} has just started applying for 
//     driving lessons. Your chef, ${allstarObject.chef[0]}, has begun 
//     freshening up on ${allstarObject.chef[1].genderWords[3]} cooking skills 
//     and is looking forward to serve you your 
//     favorite food. ${allstarObject.cleaner[0]} is somewhat of a "hygiene expert" and ${allstarObject.cleaner[1].genderWords[1]} will surely keep the 
//     hotel spotless, while you and your guide, ${allstarObject.guide[0]}, 
//     are out on various adventurous excursions. 
//     We are looking forward to your stay with us! 
//     \n Best regards, your chief of staff - ${allstarObject.chief[0]}`;

//     const popupMessagePlace = document.querySelector(".popup__message");
//     popupMessagePlace.innerText = popup__message;

//     const allstarImagesPlace = document.querySelector(".allstarImages");
//     allstarObject.images.forEach((imgUrl) => {
//         const allstarImage = document.createElement("img");
//         allstarImage.setAttribute("src", imgUrl);
//         allstarImage.classList.add("u-15-width")
//         allstarImagesPlace.appendChild(allstarImage);
//     });
// }