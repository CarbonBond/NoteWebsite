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
            noteClass = addDuplicateNumber(newNote, noteList)
            noteList[noteClass] = {name: `${newNote}`, id: noteClass, cardList: {}};
            noteDom.addDirectory(noteList[noteClass]);
        }
    }
    const removeNote = (note) => {
        delete noteList[note.id];
    }

    const addCard = (note, cardName) => {
        note.cardList[cardName] = {name: cardName};
        noteDom.addCard(note.cardList[cardName]);
    }

    
    return {
        addNote,
        removeNote,
        addCard,
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
        noteToolAddCard.addEventListener('click', ()=> {
            const cardPrompt = prompt('Add card', '');
            if(cardPrompt != '' || cardPrompt != null) {
                noteManager.addCard(note, cardPrompt);
            }
        })

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
    const addCard = (card) => {
        const noteContent = document.querySelector('.noteContent');
        console.log(card.name);
    }
    return {
        addDirectory,
        addCard,
    }
})();

function addDuplicateNumber(stringItem, itemList){
    let count = 0;
    let countStart = 0;
    let checkNoMatch = 0;
    while(!checkNoMatch){
        for (let item in itemList){
            if(item == stringItem){
                count++;
                if(!countStart){
                    stringItem += '0';
                    stringItem += count
                    console.log(stringItem);
                    countStart = 1;
                }else{
                    stringItem = stringItem.substring(0, stringItem.lastIndexOf('0')+1);
                    stringItem += count;
                }
            }
        }
        checkNoMatch = 1;
        for (let item in itemList){
            if(item == stringItem){
                checkNoMatch = 0;
            }
        }
    }
    return stringItem;
}

export default noteManager;