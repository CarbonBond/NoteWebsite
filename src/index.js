import main from './baseSite.js'
import noteManager from './note.js'
import domManager from './domManager'

main();


//TEST CODE START

const testDir = document.querySelector(".noteDirectory");
const testBody = document.querySelector(".noteBody");
const testButton = document.createElement('button');
testDir.appendChild(testButton);
testButton.textContent = "TEST BUTTON ADD NOTE"
testButton.addEventListener('click', ()=> {
    noteManager.addNote();
})

for(let i = 0; i<10; i++){
    const delDiv = document.createElement("div");
    delDiv.classList.add(`del${i+1}`, 'del');
    delDiv.textContent = `del${i+1}`;
    testBody.appendChild(delDiv);
}
const testRemoveButton = document.createElement("button");
testRemoveButton.textContent = `testRemoveButton`;
testRemoveButton.addEventListener("click", () => {
    const testClassRemove = prompt('Element class to remove', '');
    let testAll = prompt('Remove all, yes/no');
    if (testAll == "yes") {
        testAll = true;
    }else {
        testAll = false;
    }
    domManager.deleteElement(testClassRemove, testAll);

})
testBody.appendChild(testRemoveButton);

//TEST CODE END


