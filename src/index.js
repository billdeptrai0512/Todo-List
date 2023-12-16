import _, { create, now } from 'lodash';
import './style.css';
import { showAllTask } from './alltask';
import { showAllIdea } from './allIdea';
import { showImportant } from './important';

// make the left panel disappear and appear
const leftPanel = document.querySelector('.left');
const menuButton = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    if (leftPanel.classList == "left") {
        leftPanel.classList.add('hidden')
    } else {
        leftPanel.classList.remove('hidden')
    }
})

// make the calender in the bottom of left panel
const currentDate = document.querySelector('.current-date');
const dateTag = document.querySelector('.days');
const prevNextIcon = document.querySelectorAll('.icons span')

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December']
 
const renderCalendar = () => {
    let firstDateofMonth = new Date(currYear, currMonth, 1).getDay(); // get first day of month
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // getting last day of month
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); //getinng last date of previous month
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofLastMonth).getDay(); //getting last day of month
    let liTag = "";

    for ( let i = firstDateofMonth; i > 0 ; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`
    }

    for ( let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                            && currYear === new Date().getFullYear() ? "active" : ""
        liTag += `<li class ="${isToday}">${i}</li>`
    }

    for ( let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }

    currentDate.innerHTML = `${month[currMonth]} ${currYear}`
    dateTag.innerHTML = liTag
}

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar()
    })
})

//make default right panel is today
const title = document.getElementById('title');
title.innerHTML = new Date().toLocaleDateString('en-GB')

const today = document.getElementById('Today');
today.classList.add("active"),
today.addEventListener('click', () => {
    title.innerHTML = ''
    title.innerHTML = new Date().toLocaleDateString('en-GB')
    today.classList.add("active")
    allTask.classList.remove("active")
    allIdea.classList.remove("active")
    important.classList.remove("active")
})

// add eventlistener to create new right panel
const allTask = document.getElementById('Task');
allTask.addEventListener('click',  () => {
    showAllTask()
    today.classList.remove("active")
    allTask.classList.add("active")
    allIdea.classList.remove("active")
    important.classList.remove("active")
});

const allIdea = document.getElementById('Idea');
allIdea.addEventListener('click', () => {
    showAllIdea();
    today.classList.remove("active")
    allTask.classList.remove("active")
    allIdea.classList.add("active")
    important.classList.remove("active")
});

const important = document.getElementById('Important');
important.addEventListener('click', () => {
    showImportant();
    today.classList.remove("active")
    allTask.classList.remove("active")
    allIdea.classList.remove("active")
    important.classList.add("active")
});

// click add task / add idea will remove the hidden class
const listItem = document.getElementById('listTask')
const formTask = document.getElementById("task")

const buttonAddTask = document.getElementById("addTask")
buttonAddTask.addEventListener('click', () => {
    formTask.classList.remove('hidden')
})

const cancelTaskButton = document.querySelector('input[id="cancel"]')
cancelTaskButton.addEventListener('click', () => {
    formTask.classList.add('hidden')
})

function createEditForm() {
    const place = document.querySelector('.form')
    
    const form = document.createElement('form')
    form.id = "editTask"

    const title = document.createElement('label')
    title.setAttribute('for', 'title')
    title.textContent = "Title:"
    form.appendChild(title)

    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'title')
    input.setAttribute('placeholder', 'What you gonna do ?')
    input.id = "inputEdit"
    form.appendChild(input)

    const details = document.createElement('label')
    details.setAttribute('for', 'details')
    details.textContent = "Details:"
    form.appendChild(details)

    const textArea = document.createElement('textarea')
    textArea.setAttribute('rows', '2')
    textArea.setAttribute('cols', '50')
    textArea.setAttribute('name', 'details')
    textArea.setAttribute('placeholder', 'Anything that make you understand why you have to do it')
    textArea.id = "detailsEdit"
    form.appendChild(textArea)

    const twoButton = document.createElement('div')
    twoButton.id = "button"

    const submit = document.createElement('input')
    submit.setAttribute('type', 'submit')
    submit.setAttribute('name', 'submit')
    submit.setAttribute('value', 'Edit')
    submit.id = "edit"
    twoButton.appendChild(submit)

    const cancel = document.createElement('input')
    cancel.setAttribute('type', 'button')
    cancel.setAttribute('name', 'cancel')
    cancel.setAttribute('value', 'Cancel')
    cancel.id = "editCancel"
    twoButton.appendChild(cancel)

    form.appendChild(twoButton)
    place.appendChild(form)
}

let newItem = (function newItem () {
    const baseID = 'item'
    let count = 0
    return function (type = 'div') {
        let item = document.createElement(type)
        item.classList = baseID
        item.id = count
        count += 1
        return item
    }
}())

// Design a div to represent the task/idea div
function createItem(listItem, task) {

    const item = newItem('div')
    const itemID = Number(item.id)

    const done = document.createElement('input')
    done.type = "checkbox";
    done.name = "done"
    done.setAttribute('id', 'done')
    item.appendChild(done)

    done.defaultChecked = task.done == true ? true : false

    //make button done change status
    done.addEventListener('click', () => {
        task.beDone()
    })

    let text = document.createElement('div')
    text.setAttribute('id', 'text')
    let h3 = document.createElement('h3')
    h3.innerHTML = task.title
    text.appendChild(h3)
    let p = document.createElement('p')
    p.innerHTML = task.describtion
    text.appendChild(p)
    item.appendChild(text)

    let combo = document.createElement('div')
    combo.id = "combo"

    const star = document.createElement('div')
    star.classList = 'star' 
    const starBox = document.createElement('input')
    starBox.type = "checkbox"
    starBox.setAttribute('id', `important${itemID}`)
    const starLabel = document.createElement('label')
    starLabel.setAttribute('for', `important${itemID}`)
    star.appendChild(starBox)
    star.appendChild(starLabel)
    combo.appendChild(star)

    starBox.defaultChecked = task.important == true ? true : false

    starBox.addEventListener('click', () => {
        task.beImportant()
    })

    const edit = document.createElement('div')
    edit.setAttribute('id', 'editContainer')
    const editSpan = document.createElement('span')
    editSpan.setAttribute('id', 'vert')
    editSpan.classList = "material-symbols-outlined"
    editSpan.textContent = "more_vert"
    edit.appendChild(editSpan)
    combo.appendChild(edit)

    const list = document.createElement('div')
    list.classList = 'listOption'
    const buttonEdit = document.createElement('button')
    buttonEdit.classList = 'edit'
    buttonEdit.innerHTML = "Edit"
    const buttonDelete = document.createElement('button')
    buttonDelete.classList = 'detele'
    buttonDelete.innerHTML = "Delete"
    list.appendChild(buttonEdit)
    list.appendChild(buttonDelete)
    combo.appendChild(list)

    item.appendChild(combo)

    edit.addEventListener('click', () => {
    if (list.classList.contains("active")) {
        list.classList.remove('active')
    } else {
        list.classList.add("active")
    }
    })

    buttonDelete.addEventListener('click', () => {
        task.deleteFromLocalStorage();
        item.remove();
    })
    //edit button should create another kind of form
    buttonEdit.addEventListener('click', () => {
        item.style.display = "none"
        createEditForm()

        const editForm = document.getElementById('editTask')
        const cancelButton = document.getElementById('editCancel')
        cancelButton.addEventListener('click', () => {
            editForm.remove()
            item.style.display = null
            list.classList.remove('active')
        })

        const editButton = document.getElementById('edit')
        let titleInput = document.getElementById('inputEdit')
        titleInput.value = h3.innerHTML
        let describtionInput = document.getElementById('detailsEdit')
        describtionInput.value = p.innerHTML

        editButton.addEventListener('click', () => {
            h3.innerHTML = titleInput.value
            p.innerHTML = describtionInput.value
            task.reName(`${titleInput.value}`)
            task.reDes(`${describtionInput.value}`)
            editForm.remove()
            item.style.display = null
            list.classList.remove('active')
        })
        //what if they press cancel ? we need to restore the item 
    })
    listItem.appendChild(item)
}

// Click Add will create a div + add object to localstorage
formTask.addEventListener('submit', (e) => {
    e.preventDefault();

    let titleInput = document.getElementById('inputTitle') 
    let describtionInput = document.getElementById('details')

    const task = new Task(titleInput.value, describtionInput.value, false, false)
    task.addToLocalStorage()

    createItem(listItem, task)

    titleInput.value = ""
    describtionInput.value = ""
    formTask.classList.add("hidden")
})

// const myIdea = localStorage.getItem('myIdea') == null ? localStorage.setItem('myIdea', "[]") : JSON.parse(localStorage.getItem('myIdea'))

class Task {
    constructor (title, describtion, done, important) {
        this.title = title
        this.describtion = describtion
        this.done = done
        this.important = important
    }

    beDone() {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important}
        for (let i = 0; i < myTask.length; i++) {
            if(JSON.stringify(myTask[i]) === JSON.stringify(task)) {
                this.done = !this.done
                myTask[i].done = !myTask[i].done
            }
        }
        return localStorage.setItem('myTask', JSON.stringify(myTask))
    }

    beImportant() {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important}
        for (let i = 0; i < myTask.length; i++) {
            if(JSON.stringify(myTask[i]) === JSON.stringify(task)) {
                this.important = !this.important
                myTask[i].important = !myTask[i].important
            }
        }
        return localStorage.setItem('myTask', JSON.stringify(myTask))
    }

    reName(newName) {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important}
        for (let i = 0; i < myTask.length; i++) {
            if(JSON.stringify(myTask[i]) === JSON.stringify(task)) {
                this.title = newName
                myTask[i].title = newName
            }
        }
        return localStorage.setItem('myTask', JSON.stringify(myTask))
    }

    reDes(newDes) {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important}
        for (let i = 0; i < myTask.length; i++) {
            if(JSON.stringify(myTask[i]) === JSON.stringify(task)) {
                this.describtion = newDes
                myTask[i].describtion = newDes
            }
        }
        return localStorage.setItem('myTask', JSON.stringify(myTask))
    }

    addToLocalStorage() {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important}
        myTask.push(task)
        localStorage.setItem('myTask', JSON.stringify(myTask))
    }

    deleteFromLocalStorage() {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important}
        for (let i = 0; i < myTask.length; i++) {
            if(JSON.stringify(myTask[i]) === JSON.stringify(task)) {
                myTask.splice(i, 1)
            }
        }
        localStorage.setItem('myTask', JSON.stringify(myTask))
    }
}

let myTask = localStorage.getItem('myTask')
if (myTask == null ) {
    localStorage.setItem('myTask', "[]")
} else {
    myTask = JSON.parse(localStorage.getItem('myTask'))
    for (let i = 0; i < myTask.length; i++) {
        let task = new Task(myTask[i].title, myTask[i].describtion, myTask[i].done, myTask[i].important)   
        createItem(listItem, task)
    }
}


class Idea {
    constructor (title, describtion, done, important) {
        this.title = title
        this.describtion = describtion
        this.done = done
        this.important = important
    }

    beDone() {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important}
        for (let i = 0; i < myIdea.length; i++) {
            if(JSON.stringify(myIdea[i]) === JSON.stringify(idea)) {
                this.done = !this.done
                myIdea[i].done = !myIdea[i].done
            }
        }
        return localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }

    beImportant() {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important}
        for (let i = 0; i < myIdea.length; i++) {
            if(JSON.stringify(myIdea[i]) === JSON.stringify(idea)) {
                this.important = !this.important
                myIdea[i].important = !myIdea[i].important
            }
        }
        return localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }

    reName(newName) {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important}
        for (let i = 0; i < myIdea.length; i++) {
            if(JSON.stringify(myIdea[i]) === JSON.stringify(idea)) {
                this.title = newName
                myIdea[i].title = newName
            }
        }
        return localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }

    reDes(newDes) {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important}
        for (let i = 0; i < myIdea.length; i++) {
            if(JSON.stringify(myIdea[i]) === JSON.stringify(idea)) {
                this.describtion = newDes
                myIdea[i].describtion = newDes
            }
        }
        return localStorage.setItem('myTask', JSON.stringify(myIdea))
    }

    addToLocalStorage() {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important}
        myIdea.push(idea)
        localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }

    deleteFromLocalStorage() {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important}
        for (let i = 0; i < myIdea.length; i++) {
            if(JSON.stringify(myIdea[i]) === JSON.stringify(idea)) {
                myIdea.splice(i, 1)
            }
        }
        localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }
}

const listIdea = document.getElementById('listIdea')

let myIdea = localStorage.getItem('myIdea')
if (myIdea == null ) {
    localStorage.setItem('myIdea', "[]")
} else {
    myIdea = JSON.parse(localStorage.getItem('myIdea'))
    for (let i = 0; i < myIdea.length; i++) {
        let idea = new Idea(myIdea[i].title, myIdea[i].describtion, myIdea[i].done, myIdea[i].important)
        createItem(listIdea, idea)
    }
}

const formIdea = document.getElementById('idea')
formIdea.addEventListener('submit', (e) => {
    e.preventDefault()

    let titleInput = document.getElementById('titleIdea') 
    let describtionInput = document.getElementById('subIdea')
    
    const idea = new Idea(titleInput.value, describtionInput.value, false, false)
    console.log(idea)
    idea.addToLocalStorage()

    createItem(listIdea, idea)

    titleInput.value = ''
    describtionInput.value = ''
    formIdea.classList.add('hidden')
})

const buttonAddIdea = document.getElementById("addIdea")
buttonAddIdea.addEventListener('click', () => {
    formIdea.classList.remove('hidden')
})

const cancelIdeaButton = document.querySelector('input[id="idea"]')
cancelIdeaButton.addEventListener('click', () => {
    formIdea.classList.add('hidden')
})