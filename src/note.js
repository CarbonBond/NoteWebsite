import "./note.css";
import domManager from "./domManager.js"

const noteManager = (()=> {
    let noteList = {default: 'default'}
    
    const addNote = () => {
        let newNote = prompt('Add a note', '');
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
            noteList[noteClass] = `${newNote}`;
            for(let note in noteList){
                domManager.updateDOM(note, 'noteDirectory', noteList[note], 'directoryNote');
            }
        }
    }
    return {
        addNote,
        
    }
})();

export default noteManager;