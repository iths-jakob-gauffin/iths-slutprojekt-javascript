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
    console.log("hej");
    const staffPlace = document.querySelector('#' + staffId);
    const staffInfo = document.createElement('div');
    staffInfo.innerHTML = draggedItem;

    // staffInfo.actorId.add("id")
    staffPlace.appendChild(staffInfo);
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