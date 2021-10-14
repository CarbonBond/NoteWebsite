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
            for (let note in noteList){
                if(note == noteClass){
                    noteClass += '01';
                    for(let noteDup in noteList){
                        if(noteClass == noteDup){
                            let endNumber = noteClass.slice(noteClass.lastIndexOf('0')+1, noteClass.length)
                            let noteClassAmount = Number(endNumber);
                            noteClassAmount += 1;
                            noteClass = noteClass.replace(endNumber, noteClassAmount);  
                        }
                    }
                }
            }
            noteList[noteClass] = {name: `${newNote}`};
            console.log(noteList);
            for(let note in noteList){
                const domNote = domManager.drawNewDOM(note, 'noteContainer', note, 'directoryNote');
                if(domNote){
                    domNote.addEventListener('click', () => {
                        updateNoteBody(domNote);
                    })
                }
            }
        }
    }
    const removeNote = (note) => {
        console.log(note);
        domManager.deleteElement(note, true);
        delete noteList[note];
    }
    
    function updateNoteBody(domNote){
        //TEST
        domManager.deleteElement('noteContent', true);
        const noteContent = domManager.drawNewDOM(domNote.classList[0], 'noteBody', domNote.classList[0], 'noteContent');
        document.querySelectorAll('.directoryNote').forEach((item) => {
            item.classList.remove('underlined');
        })
        domNote.classList.add('underlined');

        //toolbox MOVE
        const noteToolBox = document.createElement('div');
        noteToolBox.classList.add('noteToolBox');
        const noteToolMenu = document.createElement('div');
        noteToolMenu.classList.add('noteToolMenu', 'noteTool');
        noteToolMenu.addEventListener('click', () => {
            const noteToolHide = noteToolBox.querySelectorAll('.noteToolHide');
            noteToolHide.forEach(item => {
                item.classList.toggle('hide');
            })
        })
        const noteToolDelete = document.createElement('div');
        noteToolDelete.classList.add('noteToolDelete', 'noteToolHide', 'noteTool', 'hide');
        noteToolDelete.addEventListener('click', ()=> {
            removeNote(domNote.classList[0])
        })
        noteToolBox.appendChild(noteToolMenu);
        noteToolBox.appendChild(noteToolDelete);
        noteContent.appendChild(noteToolBox);
        
    }
    return {
        addNote,
        
    }
})();

export default noteManager;