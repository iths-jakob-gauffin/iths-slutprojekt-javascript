// import '../../styles/index.scss';

let draggedHtml = '';
const tvCastObject = {};

class GetTvShow {
    constructor(container) {
        this.container = container;
        this.castMemberPlace = document.querySelector('.castMembers');
        this.tvTitleURL = `http://api.tvmaze.com/search/shows?q=`;
        this.tvCastURL = `http://api.tvmaze.com/shows/`;
        this.actorURL = `http://api.tvmaze.com/search/people?q=`;
        this.optionsList = document.querySelector("#actor");
    }
    async getTvShow(tvTitle) {
        const getTvShow = await fetch(this.tvTitleURL + tvTitle);
        console.log('makin req');
        const data = await getTvShow.json();
        console.log('req finished');

        return data[0];
    }
    async getCast(id) {
        const castQuery = `${id}?embed=cast`;
        const getCast = await fetch(this.tvCastURL + castQuery);
        const data = await getCast.json();
        // console.log(data._embedded.cast);
        // this.fix(data._embedded.cast);
        return data._embedded.cast;
    }

    // let bla = "";
    // if (bla in tvCastObject) {
    //     for (bla in tvCastObject) {
    //         delete tvCastObject[bla];
    //     }
    // } else {
    //     return;
    // }
    clearTvCastObject() {
        for (var key in tvCastObject) {
            delete tvCastObject[key];
        }
    }
    clearList() {
        // const containerPlace = document.querySelector('.castMembers');
        while (this.castMemberPlace.firstChild) {
            this.castMemberPlace.firstChild.remove();
        }
    }
    clear(place) {
        while (place.firstChild) {
            place.firstChild.remove();
        }
    }
    createActorObject(tvCast) {
        // let gender = "gender";

        tvCast.forEach((actor) => {
            // console.log(actor);

            let genderWords = {};
            try {
                // genderWords[actor.person.gender] = this.giveGenderWords(actor.person.gender);
                genderWords["genderWords"] = this.giveGenderWords(actor.person.gender);

                tvCastObject[`${actor.person.id}`] = [actor.person.name,
                    actor.character.name,
                    genderWords,
                    actor.person.image.medium,
                    actor.character.image.medium,
                    actor.person.id,
                ];
            } catch (err) {
                console.log("Something went wrong.")
                console.log(err);
            }
            console.log(tvCastObject);

        })

        // const keys = Object.keys(tvCastObject);
        // console.log(keys);
        // const values = Object.values(tvCastObject);
        // for (const key of values) {
        //     console.log(key[0])
        // }
        return tvCastObject;
    }
    giveGenderWords(actorGender) {
        let genderWords = [];
        if (actorGender == "Male") {
            genderWords = ["He", "he", "His", "his", "Him", "him"];
        } else {
            genderWords = ["She", "she", "Her", "her", "Her", "her"];
        }
        return genderWords;
    }
    renderAndAddDragEvent(tvCastObject) {
        this.clear(this.optionsList);
        const values = Object.values(tvCastObject);
        for (const actor of values) {
            const charLiElement = document.createElement('li');
            const charDiv = document.createElement('div');
            this.createOptions(actor[0], actor[5]);
            charDiv.setAttribute('draggable', true);
            charDiv.classList.add('fill');
            // let actorId = `id${actor[5]}`;

            // charDiv.setAttribute("actorId", actorId);
            // charDiv.classList.add(gender);
            charDiv.classList.add("characterCard");
            charDiv.innerHTML = `<div class="paragraph" actorId="${actor[5]}"><img src="${actor[4]}">${actor[0]} or ${actor[1]}</div>`;
            // const innerText = this.formatInfoText(realName, charName);
            // charDiv.innerHTML = `<div class="paragraph ${gender}"><img src=${charImg}>${innerText}</div>`;

            this.container.appendChild(charLiElement);
            charLiElement.appendChild(charDiv);
            charDiv.addEventListener('mousedown', (e) => {

                // console.log(e.target.outerHTML);
                draggedHtml = e.target.outerHTML;
            });
        }
        // });
    }

    // async getActorInfo(name) {
    //     const getActorInfo = await fetch(this.actorURL + name);
    //     const data = await getActorInfo.json();
    //     console.log(data);
    //     return data;
    // }
    // renderData(data, checkedTvShow) {

    //     data.forEach((person) => {
    //         const charName = person.character.name;
    //         const realName = person.person.name;
    //         const gender = person.person.gender;
    //         const birthday = person.person.birthday;
    //         const charImg = person.person.image.medium;
    //         this.createOptions(charName);

    //         charDiv.setAttribute('draggable', true);
    //         charDiv.classList.add('fill');
    //         charDiv.classList.add('filledDiv');
    //         charDiv.classList.add(gender);
    //         charDiv.classList.add("characterCard");
    //         const innerText = this.formatInfoText(realName, charName);
    //         charDiv.innerHTML = `<div class="paragraph ${gender}"><img src=${charImg}>${innerText}</div>`;

    //         this.container.appendChild(charLiElement);
    //         charLiElement.appendChild(charDiv);
    //         charDiv.addEventListener('mousedown', (e) => {

    //             // console.log(e.target.outerHTML);
    //             draggedHtml = e.target.outerHTML;
    //         });
    //     });
    // }

    // formatInfoText(realName, charName) {
    //     const charText = `${realName} or "${charName}".`;

    //     return charText;
    // }
    createOptions(characterName, actorId) {
        const actorOptionPlace = document.querySelector(".actors");
        const actorOption = document.createElement("option");
        actorOption.setAttribute("actorid", actorId);
        // actorOption.value = characterName;
        actorOption.textContent = characterName;
        actorOptionPlace.appendChild(actorOption);
    }
}

// export {
//     GetTvShow,
//     draggedHtml as
//     default
// }