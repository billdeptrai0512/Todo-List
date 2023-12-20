import { Task, Idea } from ".."
import { createItem } from "./today"

function createLeftPanel() {
    const content = document.createElement('div')
    content.id = 'left-panel'

    const listTask = document.createElement('div')
    listTask.id = 'listTask' 

    importantTask(listTask)
    content.appendChild(listTask)

    return content
}

function createRightPanel() {
    const content = document.createElement('div')
    content.id = 'left-panel'

    const listTask = document.createElement('div')
    listTask.id = 'listTask' 

    importantIdea(listTask)
    content.appendChild(listTask)
    
    return content
}

function importantTask(list) {
    let myTask = localStorage.getItem('myTask')
    if (myTask == null ) {
        localStorage.setItem('myTask', "[]")
    } else {
        myTask = JSON.parse(localStorage.getItem('myTask'))
        for (let i = 0; i < myTask.length; i++) {
            let task = new Task(myTask[i].title, myTask[i].describtion, myTask[i].done, myTask[i].important, myTask[i].date)  
            if (task.done === false && task.important === true) {
                createItem(list, task)
            } 
            
        }
    }
}

function importantIdea(list) {
    let myIdea = localStorage.getItem('myIdea')
    if (myIdea == null ) {
        localStorage.setItem('myIdea', "[]")
    } else {
        myIdea = JSON.parse(localStorage.getItem('myIdea'))
        for (let i = 0; i < myIdea.length; i++) {
            let idea = new Idea(myIdea[i].title, myIdea[i].describtion, myIdea[i].done, myIdea[i].important, myIdea[i].date)  
            if (idea.done === false && idea.important === true) {
                createItem(list, idea)
            } 
            
        }
    }
}



export function showImportant() {
    const content = document.createElement('div')
    content.id = 'panel'

    const leftPanel = createLeftPanel()
    content.appendChild(leftPanel)

    const rightPanel = createRightPanel()
    content.appendChild(rightPanel)

    return content
}