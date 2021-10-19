import "./baseSite.css"
import noteManager from "./note.js";
import noteDom from './note.js';

const main = (() => {
    const container = document.querySelector("#container");
    const siteBody = document.createElement('div');
    siteBody.classList.add('siteBody');
    container.appendChild(siteBody);

    //Note directory.
    const noteDirectory = document.createElement('div');
    noteDirectory.classList.add('noteDirectory');
    siteBody.appendChild(noteDirectory);

    //Note Container
    const noteContainer = document.createElement('div');
    noteContainer.classList.add('noteContainer')
    noteDirectory.appendChild(noteContainer);

    //noteBody
    const noteBody = document.createElement('div');
    noteBody.classList.add('noteBody');
    siteBody.appendChild(noteBody);

    //hamburger button for Note Directory
    const noteDirectoryButton = document.createElement('div');
    noteDirectoryButton.classList.add('noteDirectoryButton');
    siteBody.appendChild(noteDirectoryButton);

    noteDirectoryButton.addEventListener('click',() => {
        noteDirectory.classList.toggle('hidden');
    })

    const noteAddContainer = document.createElement('div');
    noteDirectory.appendChild(noteAddContainer);
    noteAddContainer.classList.add('noteAddContainer');

    const addDir = document.createElement('div');
    noteAddContainer.appendChild(addDir);
    addDir.textContent = "Add";
    addDir.classList.add('add');
    addDir.setAttribute('note', `root`)
    addDir.addEventListener('click', (e)=> {
        noteManager.addNote('test', e.target.getAttribute('note'));
    })

})

export default main;