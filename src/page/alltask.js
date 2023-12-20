import { Task } from ".."
import { createItem } from "./today"

function undoneTask(list) {
    let myTask = localStorage.getItem('myTask')
    if (myTask == null ) {
        localStorage.setItem('myTask', "[]")
    } else {
        myTask = JSON.parse(localStorage.getItem('myTask'))
        for (let i = 0; i < myTask.length; i++) {
            let task = new Task(myTask[i].title, myTask[i].describtion, myTask[i].done, myTask[i].important, myTask[i].date)
            if (task.done === false) {
                createItem(list, task)
            }
        }
    }
}

export function showAllTask() {
    const content = document.createElement('div')
    content.id = 'panel'

    const listItem = document.createElement('div')
    listItem.id = 'listTask'

    undoneTask(listItem)
    content.appendChild(listItem)

    return content
}