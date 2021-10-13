

const noteManager = (()=> {
    let noteList = {default: 'default'}
    const updateDirectoryDOM = () => {
        const noteDirectory = document.querySelector('.noteDirectory');
        for (let note in noteList) {
            if(!checkIfDrawn('directoryNote', note)){
                const noteDOM = document.createElement('div');
                noteDOM.classList.add("directoryNote", note)
                noteDOM.textContent = noteList[note];
                noteDirectory.appendChild(noteDOM);
            }
        }
    }
    const addNote = () => {
        let newNote = prompt('Add a note', '');
        if(newNote != ''){
            let noteClass = newNote.replaceAll(" ", '');
            for (let note in noteList){
                if(note == noteClass){
                    noteClass += '.1';
                    for(let noteDup in noteList){
                        if(noteClass == noteDup){
                            let endNumber = noteClass.slice(noteClass.lastIndexOf('.')+1, noteClass.length)
                            let noteClassAmount = Number(endNumber);
                            noteClassAmount += 1;
                            noteClass = noteClass.replace(endNumber, noteClassAmount);  
                        }
                    }
                }
            }
            noteList[noteClass] = `${newNote}`;
            updateDirectoryDOM();
        }
    }
    function checkIfDrawn(baseClass, searchClass){
        const itemList = document.querySelectorAll(`.${baseClass}`)
        let isDrawn = false;
        itemList.forEach((e) => {
            if(searchClass == e.classList[1]){
                isDrawn = true;
            }
        })
        return isDrawn;
    }
    return {
        addNote,
        updateDirectoryDOM,
    }
})();

export default noteManager;