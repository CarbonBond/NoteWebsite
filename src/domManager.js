const domManager = (() => {


    const deleteElement = (deleteTarget, deleteAll) => {
        if(deleteAll == undefined || typeof(deleteAll) != "boolean") {
            console.error(" domManager: deleteElement: deleteAll is not a BOOL type")
            return 'error';
        }
        if(deleteAll == true) {
            if(typeof deleteTarget == 'string') {
                const elementToRemove = document.querySelectorAll(`.${deleteTarget}`);
                if(elementToRemove){
                    elementToRemove.forEach(item => {
                        item.remove();
                    })
                } else {
                    console.warn(`domManager.deleteElement: Didn't find ".${deleteTarget}" class.`)
                }
            } else {
                console.warn(`domManager.deleteElement: Can only delete multiple elements when using class selector`)
            }
        } else {
            if(typeof deleteTarget == 'string'){
                const elementToRemove = document.querySelector(`.${deleteTarget}`);
                if(elementToRemove){
                    elementToRemove.remove();
                } else {
                    console.warn(`domManager.deleteElement: Didn't find ".${deleteTarget}" class.`)
                }
            } else if (isDOM(deleteTarget)) {
                deleteTarget.remove();
            } else {
                console.warn(`domManager.deleteElement: deleteTarget is not a valid selector`)
            }
            
        }
    };


    function createElementDOM(elementStyle){
        const elementDOM = document.createElement(elementStyle);
        for(let i = 1; i < arguments.length; i++){
            elementDOM.classList.add(arguments[i]);
        }
        return elementDOM;
    }
    
    function checkIfDrawn(searchClass, searchLocation){
        if(searchLocation){
            const item = searchLocation.querySelector(`.${searchClass}`)
            let isDrawn = false;
            if(item) {
                isDrawn = true;
            }
            return isDrawn;
        }
    }

    function isDOM(Obj) {
              
        // Function that checks whether 
        // object is of type Element
       return Obj instanceof Element;
   }
    
    return{
        deleteElement,
        createElementDOM
    }
})();


export default domManager;