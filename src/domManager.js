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
   function makeValidSelector(string){
       const VALIDSELECTION = [
           'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
       'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
       '-', '_'];
       const VALIDNUMBER = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
   
       let validString = '';
   
       for(let i = 0; i < string.length; i++) {
           if(i == 0){
               if(VALIDSELECTION.includes(string.substr(i, 1))) {
                   validString +=(string.substr(i, 1))                
               } else if(VALIDNUMBER.includes(string.substr(i, 1))){
                    validString += '_';
                    validString += (string.substr(i))
               }
           } else{
               if(VALIDSELECTION.includes(string.substr(i, 1)) || VALIDNUMBER.includes(string.substr(i, 1))) {
                   validString +=(string.substr(i, 1))                
               } else {
               }
           }
       }
       return validString;
   }
    
    return{
        deleteElement,
        createElementDOM,
        checkIfDrawn,
        makeValidSelector
    }
})();



export default domManager;

