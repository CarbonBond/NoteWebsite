import main from './baseSite.js'
import noteManager from './note.js'
import domManager from './domManager'

main();

noteManager.addNote('Default')
//TEST CODE START

const testDir = document.querySelector(".noteDirectory");
const testBody = document.querySelector(".noteBody");
const testButton = document.createElement('button');
testDir.appendChild(testButton);
testButton.textContent = "TEST BUTTON ADD NOTE"
testButton.addEventListener('click', ()=> {
    noteManager.addNote('test');
})



//TEST CODE END


