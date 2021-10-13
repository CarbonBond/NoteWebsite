

const noteManager = (()=> {
    let noteList = {default: ''}
    const updateDirectoryDOM = () => {
        const noteDirectory = document.querySelector('.noteDirectory');
        for (let note in noteList) {
            const noteDOM = document.createElement('div');
            noteDOM.textContent = noteList[note];
            console.log( noteList[note])
            noteDirectory.appendChild(noteDOM);
        }
    }
    const addNote = () => {
        console.log("Implement addNote")
    }
    return {
        updateDirectoryDOM
    }
})();

export default noteManager;