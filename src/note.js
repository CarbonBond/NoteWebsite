import "./note.css";
import domManager from "./domManager.js"

const noteManager = (()=> {
    let noteList = {}
    
    const addNote = (noteName, note) => {
        let noteClass = noteName.replaceAll(" ", '');
        noteClass = addDuplicateNumber(noteName, noteList)
        if(noteName != '' && typeof(noteName) == 'string'){
            let newNote = {name: `${noteName}`, id: noteClass, cardList: {}, noteFolder: {}};
            if(typeof(note) == 'object'){
                note.noteFolder[noteClass] = newNote;
                noteDom.addDirectory(note.noteFolder[noteClass], note.id);
            }else{
                noteList[noteClass] = newNote;
                noteDom.addDirectory(noteList[noteClass], 'root');
            }
        } else {
            console.error('noteManager.addNote: Incorrect type')
        }
    }
    const removeNote = (note) => {
        delete noteList[note.id];
    }

    const addCard = (note, cardName, cardType) => {
        let cardID = cardName.replaceAll(" ", "");
        cardID = addDuplicateNumber(cardID, note.cardList);
        note.cardList[cardID] = {name: cardName, id: cardID, type: cardType, content: '',}; 
        noteDom.addCardDOM(note.cardList[cardID]);
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
            const cardPrompt = prompt('Add card', '');//TODO Add a custom prompt
            if(cardPrompt != '' && cardPrompt != null && cardPrompt != undefined) {
                noteManager.addCard(note, cardPrompt, 'textBox'); 
            }
        })

        noteToolBox.appendChild(noteToolMenu);
        noteToolBox.appendChild(noteToolDelete);
        noteToolBox.appendChild(noteToolAddCard);
        location.appendChild(noteToolBox);
    }

    const addDirectory = (note, location) => {
        const noteContainer = document.querySelector('.noteContainer');
        console.log(note);
        const noteMain = domManager.createElementDOM('div', note.id, 'directoryNote');
        const noteHead = domManager.createElementDOM('div', 'noteHead');
        const noteFoot = domManager.createElementDOM('div', 'noteFoot');
        const noteName = domManager.createElementDOM('div', 'noteName');
        const noteAdd = domManager.createElementDOM('div', 'noteAdd');

        noteHead.appendChild(noteName);
        noteHead.appendChild(noteAdd);
        noteMain.appendChild(noteHead);
        noteMain.appendChild(noteFoot);
        noteName.textContent = note.id;
        noteAdd.textContent = '+';
        noteMain.setAttribute('note', note.id)
        if(location == 'root'){
            noteContainer.appendChild(noteMain);
        }else if (location != null && location != undefined && location != ''){
            const noteLocation = noteContainer.querySelector(`.${location}`);
            const footer = noteLocation.querySelector('.noteFoot');
            footer.appendChild(noteMain);
        }

        noteAdd.addEventListener('click', () => {
            noteManager.addNote('test', note); //TODO ADD A POPUP FOR ADDING NOTES
        })

        noteName.addEventListener('click', (item) => {
            updateNoteContent(note, noteName);
        })
    }

    function updateNoteContent(note, noteName){
        //TEST
        domManager.deleteElement('noteContent', true);
        const noteBody = document.querySelector('.noteBody');
        const noteContent = domManager.createElementDOM('div', 'noteContent')
        noteBody.appendChild(noteContent);
        document.querySelectorAll('.noteName').forEach((item) => {
            item.classList.remove('underlined');
        })
        noteName.classList.add('underlined');
        createToolMenu(noteContent, note)
        for(let card in note.cardList){
            addCardDOM(note.cardList[card]);
        }
    }
    const addCardDOM = (card) => {
        const noteContent = document.querySelector('.noteContent');
        const cardDOM = domManager.createElementDOM('div', 'card', card.id);
        noteContent.appendChild(cardDOM);
        if(card.type === 'textBox'){
            addCardTextbox(card, cardDOM);
        }
    }
    const addCardTextbox = (card, location) => {
 
            const textBox = domManager.createElementDOM('textarea', 'textBox');
            location.appendChild(textBox);
            textBox.innerHTML = card.content;
            textBox.style.height = `${textBox.scrollHeight}px`;

            textBox.addEventListener('keyup', e => {
                card.content = textBox.value;
                textBox.style.height = `${textBox.scrollHeight}px`;
            })
    }
    
    return {
        addDirectory,
        addCardDOM,
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