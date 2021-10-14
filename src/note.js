import "./note.css";
import domManager from "./domManager.js"

const noteManager = (()=> {
    let noteList = {}
    
    const addNote = (newNote) => {
        if(typeof(newNote) != 'string'){
            console.error(`noteManager.addNote: ${newNote} is not a valid string`)
            return 'error'
        }
        if(newNote != ''){
            let noteClass = newNote.replaceAll(" ", '');
            let noteCount = 0;
            let countStart = 0;
            let checkNoMatch = 0;
            while(!checkNoMatch){
                for (let note in noteList){
                    if(note == noteClass){
                        noteCount++;
                        if(!countStart){
                            noteClass += '0';
                            noteClass += noteCount
                            console.log(noteClass);
                            countStart = 1;
                        }else{
                            noteClass = noteClass.substring(0, noteClass.lastIndexOf('0')+1);
                            noteClass += noteCount;
                        }
                    }
                }
                checkNoMatch = 1;
                for (let note in noteList){
                    if(note == noteClass){
                        checkNoMatch = 0;
                    }
                }
            }
            noteList[noteClass] = {name: `${newNote}`, id: noteClass, cardList: {}};
            noteDom.addDirectory(noteList[noteClass]);
        }
    }
    const removeNote = (note) => {
        delete noteList[note.id];

    }
    
    return {
        addNote,
        removeNote,
    }
})();


const noteDom = (() => {
    
    function createToolMenu(location, note){
        const noteToolBox = document.createElement('div');
        noteToolBox.classList.add('noteToolBox');
        
        const noteToolMenu = domManager.createElementDOM('div', "noteToolMenu", 'noteTool');
        noteToolMenu.textContent = "M";
        noteToolMenu.addEventListener('click', () => {
            const noteToolHide = noteToolBox.querySelectorAll('.noteToolHide');
            noteToolHide.forEach(item => {
                item.classList.toggle('hide');
            })
        })
        
        const noteToolDelete = domManager.createElementDOM('div', 'noteToolDelete', 'noteToolHide', 'noteTool', 'hide');
        noteToolDelete.textContent = 'D';
        noteToolDelete.addEventListener('click', ()=> {
            noteManager.removeNote(note)
            domManager.deleteElement(note.id, true);
            domManager.deleteElement('noteContent', true);
        })

        const noteToolAddCard = domManager.createElementDOM('div', 'noteToolAddCard', 'noteTool', 'noteToolHide', 'hide');
        noteToolAddCard.textContent = "A"
        noteToolAddCard.addEventListener('click', ()=> {})

        noteToolBox.appendChild(noteToolMenu);
        noteToolBox.appendChild(noteToolDelete);
        noteToolBox.appendChild(noteToolAddCard);
        location.appendChild(noteToolBox);
    }

    const addDirectory = (note) => {

        const noteContainer = document.querySelector('.noteContainer');
        console.log(note);
        const noteFolder = domManager.createElementDOM('div', note.id, 'directoryNote');
        noteFolder.textContent = note.id;
        noteContainer.appendChild(noteFolder);

        noteFolder.addEventListener('click', (item) => {
            updateNoteContent(note, noteFolder);
        })

        /*
        if(directoryNote){
            directoryNote.addEventListener('click', () => {

            })
        }*/
    }

    function updateNoteContent(note, noteFolder){
        //TEST
        domManager.deleteElement('noteContent', true);
        const noteBody = document.querySelector('.noteBody');
        const noteContent = domManager.createElementDOM('div', 'noteContent')
        noteBody.appendChild(noteContent);
        document.querySelectorAll('.directoryNote').forEach((item) => {
            item.classList.remove('underlined');
        })
        noteFolder.classList.add('underlined');
        createToolMenu(noteContent, note)
    }    
    return {
        addDirectory,
    }
})();

export default noteManager;