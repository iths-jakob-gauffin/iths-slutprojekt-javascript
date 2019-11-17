const allstarInfoObject = {};
let allstarImagesArray = [];

function link(formInfoArray) {
	window.location.replace("./staff2.html");
	return formInfoArray;
}

function getUserInfoFromLocalStorage() {
	let userName = localStorage.getItem("userName");
	let email = localStorage.getItem("email");
	let stay = localStorage.getItem("stay");
	let music = localStorage.getItem("music");
	let food = localStorage.getItem("food");

	formInfoArray = [userName, email, stay, music, food];
	return formInfoArray;

}

class Print {
	constructor() {
		this.allstarImagesPlace = document.querySelector('.allstarImages');
		this.resetPlace = document
			.querySelector('#popup > div > div.popup__right > a.btn-text')
			.addEventListener('click', () => {
				allstarImagesArray = [];
			});
	}
	calling(input) {
		const driverObject = this.getAllstar(document.querySelector('#driver'), 'driver');
		this.chefObject = this.getAllstar(document.querySelector('#chef'), 'chef');
		this.guideObject = this.getAllstar(document.querySelector('#guide'), 'guide');
		this.cleanerObject = this.getAllstar(document.querySelector('#cleaner'), 'cleaner');

		const allstarObject = this.getAllstar(document.querySelector('#boss'), 'boss');

		this.message(allstarObject);
	}
	message(allstarObject) {
		// const userInfo = getUserInfo();
		// console.log(userInfo);
		const formInfoArray = getUserInfoFromLocalStorage();
		console.log(formInfoArray);


		const popup__message = `${formInfoArray[0]}, you have now confirmed your all-star staff! 
        
        ${allstarObject.driver[0]}, also known as "${allstarObject.driver[1]}", will be your driver. 
		${allstarObject.driver[2].genderWords[0]} has just started adding ${formInfoArray[3]} tracks to 
		the travel playlist. 
        
		Your chef will be "${allstarObject.chef[1]}". ${allstarObject.chef[2].genderWords[0]}'s browsing 
		the internet for ${formInfoArray[4]} recipes.  

        "${allstarObject.cleaner[0]}", or ${allstarObject.cleaner[1]} will keep the hotel spotless, 
        while you and your guide, "${allstarObject.guide[0]}", are out on various adventurous excursions. 

        We are truly looking forward to host you for ${formInfoArray[2]}! 
        / Chief of staff - "${allstarObject.boss[0]}".`;

		const popupMessagePlace = document.querySelector('.popup__message');
		popupMessagePlace.innerText = popup__message;
		popupMessagePlace.classList.add('paragraph');
		this.writeOutAllstarImage(allstarObject);
	}
	writeOutAllstarImage(allstarObject) {
		this.clearAllstarImages(this.allstarImagesPlace);
		allstarObject.images.forEach((imgUrl) => {
			const allstarImage = document.createElement('img');
			allstarImage.setAttribute('src', imgUrl);
			allstarImage.classList.add('width');
			this.allstarImagesPlace.appendChild(allstarImage);
		});
	}
	clearAllstarImages(place) {
		while (place.firstChild) {
			place.firstChild.remove();
		}
	}
	getAllstar(allstarQs, keyId) {
		const allstarId = document.querySelector('#' + keyId);
		const paragraph = allstarId.querySelector('.paragraph');
		const actorId = paragraph.getAttribute('actorid');
		const allstarInfo = allActorObject[actorId];
		// const allstarInfo = tvCastObject[actorId];

		allstarInfoObject[keyId] = allstarInfo;

		allstarImagesArray.push([allstarInfo[3]]);
		allstarInfoObject['images'] = allstarImagesArray;
		return allstarInfoObject;
	}
}