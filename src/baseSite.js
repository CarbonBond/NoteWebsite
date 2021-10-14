import "./baseSite.css"

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
    const noteContainter = document.createElement('div');
    noteContainter.classList.add('noteContainer')
    noteDirectory.appendChild(noteContainter);

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

    const noteAdd = document.createElement('div');

})

export default main;