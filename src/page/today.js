import { Task, Idea } from ".."
//Create Form
function createForm(type) {
    const content = document.createElement('div')
    content.classList = 'form'
    content.id = `this${type}`

    const form = document.createElement('form')
    form.id = `${type}`
    form.classList = 'hidden'

    const title = document.createElement('label')
    title.innerHTML = 'Title'
    const inputTitle = document.createElement('input')
    inputTitle.type = 'text'
    inputTitle.id = `${type}Title`
    inputTitle.placeholder = 'What you gonna do ?'
    form.appendChild(title)
    form.appendChild(inputTitle)

    const details = document.createElement('label')
    details.innerHTML = 'Details'
    const inputDetails = document.createElement('textarea')
    inputDetails.id = `${type}Details`
    inputDetails.rows = '2'
    inputDetails.cols = '50'
    inputDetails.placeholder = 'Anything that make you understand why you have to do it'
    form.appendChild(details)
    form.appendChild(inputDetails)

    const twoButton = document.createElement('div')
    twoButton.id = 'button'

    const addButton = document.createElement('input')
    addButton.type = 'submit'
    addButton.id = `${type}Submit`
    addButton.value = 'Add'



    const cancelButton = document.createElement('input')
    cancelButton.type = 'button'
    cancelButton.id = `${type}Cancel`
    cancelButton.value = 'Cancel'

    cancelButton.addEventListener('click', () => {
        form.classList.add('hidden')
    })

    twoButton.appendChild(addButton)
    twoButton.appendChild(cancelButton)

    form.appendChild(twoButton)
    content.appendChild(form)

    return content
}

function createAdd(type) {
    const content = document.createElement('div')
    content.classList = 'add'

    const button = document.createElement('button')
    button.id = `${type}Add`

    const image = document.createElement('img')
    image.src = "./images/plus.png"

    const text = document.createElement('p')
    text.innerHTML = `Add ${type}`

    button.appendChild(image)
    button.appendChild(text)

    button.addEventListener('click', () => {
        let form = document.getElementById(`${type}`)
        form.classList.remove('hidden')
    })

    content.appendChild(button)
    return content
}

function createLeftPanel(timing) {
    const content = document.createElement('div')
    content.id = 'left-panel'

    const form = createForm('task')
    content.appendChild(form)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        let titleInput = document.getElementById('taskTitle') 
        let describtionInput = document.getElementById('taskDetails')

        const task = new Task(titleInput.value, describtionInput.value, false, false)
        task.addToLocalStorage()

        createItem(listTask, task)

        titleInput.value = ""
        describtionInput.value = ""
        document.getElementById('task').classList.add("hidden")
    })

    const listTask = document.createElement('div')
    listTask.id = 'listTask' 

    avaialbleTask(listTask, timing)
    content.appendChild(listTask)

    const addButton = createAdd('task')
    content.appendChild(addButton)

    return content
}

function createRightPanel(timing) {
    const content = document.createElement('div')
    content.id = 'right-panel'

    const form = createForm('idea')
    content.appendChild(form)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        let titleInput = document.getElementById('ideaTitle') 
        let describtionInput = document.getElementById('ideaDetails')

        const idea = new Idea(titleInput.value, describtionInput.value, false, false)
        idea.addToLocalStorage()

        createItem(listIdea, idea)

        titleInput.value = ""
        describtionInput.value = ""
        document.getElementById('idea').classList.add("hidden")
    })

    const listIdea = document.createElement('div')
    listIdea.id = 'listIdea' 

    availableIdea(listIdea, timing)
    content.appendChild(listIdea)

    const addButton = createAdd('idea')
    content.appendChild(addButton)

    return content
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

export function createItem(listItem, task) {


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
        createEditForm(listItem)

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
    })
    listItem.appendChild(item)
}

function createEditForm(list) {

    const place = list.id === 'listIdea' ? document.getElementById('thisidea') : document.getElementById('thistask')
    
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

function avaialbleTask(list, timing) {
    let myTask = localStorage.getItem('myTask')
    if (myTask == null ) {
        localStorage.setItem('myTask', "[]")
    } else {
        myTask = JSON.parse(localStorage.getItem('myTask'))
        for (let i = 0; i < myTask.length; i++) {
            let task = new Task(myTask[i].title, myTask[i].describtion, myTask[i].done, myTask[i].important, myTask[i].date)  
            if(task.date == timing) {
                createItem(list, task)
            }
        }
    }
}

function availableIdea(list, timing) {
    let myIdea = localStorage.getItem('myIdea')
    if (myIdea == null ) {
        localStorage.setItem('myIdea', "[]")
    } else {
        myIdea = JSON.parse(localStorage.getItem('myIdea'))
        for (let i = 0; i < myIdea.length; i++) {
            let idea = new Idea(myIdea[i].title, myIdea[i].describtion, myIdea[i].done, myIdea[i].important, myIdea[i].date)
            if(idea.date == timing) {
                createItem(list, idea)
            }
        }   
    }
}


export function addToday(timing) {
    const content = document.createElement('div')
    content.id = 'panel'

    const left = createLeftPanel(timing)
    content.appendChild(left)

    const right = createRightPanel(timing)
    content.appendChild(right)

    return content
}





