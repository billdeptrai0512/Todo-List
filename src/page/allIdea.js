import { Idea } from ".."
import { createItem } from "./today"

function undoneTask(list) {
    let myIdea = localStorage.getItem('myIdea')
    if (myIdea == null ) {
        localStorage.setItem('myIdea', "[]")
    } else {
        myIdea = JSON.parse(localStorage.getItem('myIdea'))
        for (let i = 0; i < myIdea.length; i++) {
            let idea = new Idea(myIdea[i].title, myIdea[i].describtion, myIdea[i].done, myIdea[i].important, myIdea[i].date)
            if (idea.done === false) {
                createItem(list, idea)
            }
        }
    }
}

export function showAllIdea() {
    const content = document.createElement('div')
    content.id = 'panel'

    const listItem = document.createElement('div')
    listItem.id = 'listIdea'

    undoneTask(listItem)
    content.appendChild(listItem)

    return content
}