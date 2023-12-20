import { Task, Idea } from ".."
import { createItem } from "./today"

function createLeftPanel(timing) {
    const content = document.createElement('div')
    content.id = 'left-panel'

    const listTask = document.createElement('div')
    listTask.id = 'listTask' 

    oldTask(listTask, timing)
    content.appendChild(listTask)

    return content
}

function createRightPanel(timing) {
    const content = document.createElement('div')
    content.id = 'left-panel'

    const listTask = document.createElement('div')
    listTask.id = 'listTask' 

    oldIdea(listTask, timing)
    content.appendChild(listTask)
    
    return content
}

function oldTask(list, timing) {
    let myTask = localStorage.getItem('myTask')
    if (myTask == null ) {
        localStorage.setItem('myTask', "[]")
    } else {
        myTask = JSON.parse(localStorage.getItem('myTask'))
        for (let i = 0; i < myTask.length; i++) {
            let task = new Task(myTask[i].title, myTask[i].describtion, myTask[i].done, myTask[i].important, myTask[i].date)  
            if (task.date == timing && task.done == false) {
                createItem(list, task)
            } 
            
        }
    }
}

function oldIdea(list, timing) {
    let myIdea = localStorage.getItem('myIdea')
    if (myIdea == null ) {
        localStorage.setItem('myIdea', "[]")
    } else {
        myIdea = JSON.parse(localStorage.getItem('myIdea'))
        for (let i = 0; i < myIdea.length; i++) {
            let idea = new Idea(myIdea[i].title, myIdea[i].describtion, myIdea[i].done, myIdea[i].important, myIdea[i].date)  
            if (idea.date == timing && idea.done == false) {
                createItem(list, idea)
            } 
            console.log(idea.date)
            console.log(timing)
        }
    }
}

export function showDate(timing) {
    const content = document.createElement('div')
    content.id = 'panel'

    const leftPanel = createLeftPanel(timing)
    content.appendChild(leftPanel)

    const rightPanel = createRightPanel(timing)
    content.appendChild(rightPanel)

    return content
}