import main from './baseSite.js'
import {noteManager} from './note.js'
import domManager from './domManager'

main();

noteManager.addNote('Default', 'root')





function logAll(items){
    for(let arg in arguments){
        console.log(arguments[arg])
    }
}