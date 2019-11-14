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
        return data._embedded.cast;
    }

    clearTvCastObject() {
        for (var key in tvCastObject) {
            delete tvCastObject[key];
        }
    }
    clearList() {
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

        tvCast.forEach((actor) => {
            let genderWords = {};
            try {
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
            charDiv.classList.add("characterCard");
            charDiv.innerHTML = `<div class="paragraph" actorId="${actor[5]}"><img src="${actor[4]}">${actor[0]} or ${actor[1]}</div>`;

            this.container.appendChild(charLiElement);
            charLiElement.appendChild(charDiv);
            charDiv.addEventListener('mousedown', (e) => {

                draggedHtml = e.target.outerHTML;
            });
        }

    }

    createOptions(characterName, actorId) {
        const actorOptionPlace = document.querySelector(".actors");
        const actorOption = document.createElement("option");
        actorOption.setAttribute("actorid", actorId);
        actorOption.textContent = characterName;
        actorOptionPlace.appendChild(actorOption);
    }
}

// export {
//     GetTvShow,
//     draggedHtml as
//     default
// }