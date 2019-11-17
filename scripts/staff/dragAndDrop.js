// import GetTvShow from './staff';
// import draggedHtml from "./staff";
// import '../../styles/index.scss';



class DragAndDrop {
    constructor() {
        this.fill = document.querySelectorAll('.fill');
        this.empties = document.querySelectorAll('.empty');
        this.temp = this.innerHtml;
    }
    startLoop() {
        for (const empty of this.empties) {
            empty.addEventListener('dragover', this.dragOver);
            empty.addEventListener('dragenter', this.dragEnter);
            empty.addEventListener('dragleave', this.dragLeave);
            empty.addEventListener('drop', this.dragDrop);
        }
    }
    addEL() {
        this.fill.addEventListener("dragstart", this.dragStart())
        this.fill.addEventListener("dragend", this.dragEnd())
    }
    dragStart() {
        this.className += ' hold';
        setTimeout(() => (this.className = 'invisible'), 0);

        console.log('börjar dra');
    }

    dragOver(e) {
        e.preventDefault();
        // console.log('over');
    }

    dragEnter(e) {
        e.preventDefault();
        // console.log('enter');
        if (!this.classList.contains("notEmpty")) {
            this.className += ' hovered';
        };
    }

    dragLeave() {
        // console.log('leave');
        if (!this.classList.contains("notEmpty")) {
            this.className = 'empty';
        };
    }

    dragDrop() {
        // console.log('drop');
        this.className = 'empty';
        this.append(this.fill);
        this.innerHTML = '';
        this.classList.add("notEmpty");
        this.classList.add("characterCard");
        // this.classList.add("characterCard");

        this.classList.remove("empty");
        const staffId = this.id;
        this.setAttribute('draggable', 'false');

        // return staffId;
        renderStaff(draggedHtml, staffId);

    }

    dragEnd() {
        this.className = 'fill';
        console.log('slutar dra');
    }

}

function renderStaff(draggedItem, staffId) {
    console.log(draggedItem);
    // const blaha = document.querySelector("img");
    // const getInfoOnDraggedItem = blaha.getAttribute("actorid");
    // console.log(getInfoOnDraggedItem);

    const staffPlace = document.querySelector('#' + staffId);
    const staffInfo = document.createElement('div');
    staffInfo.innerHTML = draggedItem;


    // staffInfo.actorId.add("id")
    staffPlace.appendChild(staffInfo);
    const actorIdElement = staffPlace.querySelector(".innerImg");



    const actorId = actorIdElement.getAttribute("actorid");
    const actor = allActorObject[actorId];
    // console.log(b);
    staffPlace.innerHTML = `<div class="paragraph" actorId="${actor[5]}"><img src="${actor[4]}" class="innerImg" actorid="${actor[5]}">${actor[0]} or ${actor[1]}</div>`
    // const getInfoOnDraggedItem2 = staffPlace.getAttribute("actorid");

    // <div class="paragraph" actorid="8507"><img src="http://static.tvmaze.com/uploads/images/medium_portrait/0/2406.jpg" class="innerImg" actorid="8507">Betsy Brandt or Marie Schrader</div>
    // <img src="http://static.tvmaze.com/uploads/images/medium_portrait/0/2411.jpg" class="innerImg" actorid="8813"></img>

    console.log(getInfoOnDraggedItem);

    console.log("dragitem");

    console.log(draggedItem);
}

// function renderStaff(draggedItem, staffId) {
//     console.log("hej");
//     const staffPlace = document.querySelector('#' + staffId);
//     const staffInfo = document.createElement('div');
//     staffInfo.innerHTML = draggedItem;
//     staffPlace.appendChild(staffInfo);
//     console.log(draggedItem);
// }



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