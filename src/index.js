import main from './baseSite.js'
import noteManager from './note.js'

main();

const testBody = document.querySelector(".noteBody");
const testButton = document.createElement('button');
testBody.appendChild(testButton);
testButton.textContent = "TEST BUTTON ADD NOTE"
testButton.addEventListener('click', ()=> {
    noteManager.addNote();
})



