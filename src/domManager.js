const domManager = (() => {


    const deleteElement = (deleteClass, deleteAll) => {
        if(deleteAll == undefined || typeof(deleteAll) != "boolean") {
            console.error(" domManager: deleteElement: deleteAll is not a BOOL type")
            return 'error';
        }
        if(deleteAll == true) {
            const elementToRemove = document.querySelectorAll(`.${deleteClass}`);
            if(elementToRemove){
                elementToRemove.forEach(item => {
                    item.remove();
                })
            } else {
                console.warn(`domManager.deleteElement: Didn't find ".${deleteClass}" class.`)
            }
        } else {
            const elementToRemove = document.querySelector(`.${deleteClass}`);
            if(elementToRemove){
                elementToRemove.remove();
            } else {
                console.warn(`domManager.deleteElement: Didn't find ".${deleteClass}" class.`)
            }
        }
    };

    const updateDOM = (item, location, textContent, additionalClass) => {
        const locationElement = document.querySelector(`.${location}`);
        if (typeof(item)=='string') {
            if(!checkIfDrawn(item)){
                const newDiv = document.createElement('div');
                newDiv.classList.add(item)
                if(additionalClass){
                    newDiv.classList.add(additionalClass);
                }
                if(textContent){
                    newDiv.textContent = textContent;
                }
                locationElement.appendChild(newDiv);
            }
        }
    }
    
    function checkIfDrawn(searchClass, searchLocation){
        const item = document.querySelector(`.${searchClass}`)
        let isDrawn = false;
        if(item) {
            isDrawn = true;
        }
        return isDrawn;
    }
    
    return{
        deleteElement,
        updateDOM,
    }
})();


export default domManager;