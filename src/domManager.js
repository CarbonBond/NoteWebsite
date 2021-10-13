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

    return{
        deleteElement,
    }
})();


export default domManager;