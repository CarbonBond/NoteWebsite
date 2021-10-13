

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
        const noteClass = newNote.replaceAll(" ", '');
        noteList[noteClass] = `${newNote}`;
        updateDirectoryDOM();
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