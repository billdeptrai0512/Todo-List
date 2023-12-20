import './style.css';
import { showAllTask } from './page/alltask';
import { showAllIdea } from './page/allIdea';
import { showImportant } from './page/important';
import { addToday } from './page/today';
import { showDate } from './page/date';

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

let now = new Date().toLocaleDateString('en-GB')

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
        liTag += `<li id="last" class="inactive">${i - lastDayofMonth + 1}</li>`
    }

    currentDate.innerHTML = `${month[currMonth]} ${currYear}`
    dateTag.innerHTML = liTag
    //--------------------------------
    const wholeMonth = document.querySelector('.days').children
    let everyDay = []
    for (let i = 0 ; i < wholeMonth.length ; i++) {
        everyDay.push(wholeMonth[i])
    }
    
    everyDay.forEach((date) => {
        date.addEventListener('click', () => {
            let timing
            if(date.classList == 'inactive' && date.id == 'last') {
                timing = `${date.innerHTML}/${currMonth + 2}/${currYear}`
            } else if (date.classList == 'inactive' && !date.id) {
                timing = `${date.innerHTML}/${currMonth}/${currYear}`
            } else {
                timing = `${date.innerHTML}/${currMonth + 1}/${currYear}`
            }
            //------------
            
            if(timing == now) {
                rightBody.innerHTML = ''

                const todayTitle = document.createElement('h2')
                todayTitle.id = 'title'
                todayTitle.innerHTML = 'Today'

                rightBody.appendChild(todayTitle)

                rightBody.appendChild(addToday())

                today.classList.add("active")
                allTask.classList.remove("active")
                allIdea.classList.remove("active")
                important.classList.remove("active")
            } else {
                rightBody.innerHTML = ''

                const todayTitle = document.createElement('h2')
                todayTitle.id = 'title'
                todayTitle.innerHTML = timing

                rightBody.appendChild(todayTitle)

                rightBody.appendChild(showDate(timing))

                today.classList.remove("active")
                allTask.classList.remove("active")
                allIdea.classList.remove("active")
                important.classList.remove("active")
            }

        })
        
    })

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

export class Task {
    constructor (title, describtion, done, important, date) {
        this.title = title
        this.describtion = describtion
        this.done = done
        this.important = important
        this.date = date == null ? now : date
    }

    beDone() {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
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
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
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
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
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
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
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
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        myTask.push(task)
        localStorage.setItem('myTask', JSON.stringify(myTask))
    }

    deleteFromLocalStorage() {
        let myTask = JSON.parse(localStorage.getItem('myTask'))
        let task = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        for (let i = 0; i < myTask.length; i++) {
            if(JSON.stringify(myTask[i]) === JSON.stringify(task)) {
                myTask.splice(i, 1)
            }
        }
        localStorage.setItem('myTask', JSON.stringify(myTask))
    }
}

export class Idea {
    constructor (title, describtion, done, important, date) {
        this.title = title
        this.describtion = describtion
        this.done = done
        this.important = important
        this.date = date == null ? now : date
    }

    beDone() {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date }
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
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date }
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
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
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
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        for (let i = 0; i < myIdea.length; i++) {
            if(JSON.stringify(myIdea[i]) === JSON.stringify(idea)) {
                this.describtion = newDes
                myIdea[i].describtion = newDes
            }
        }
        return localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }

    addToLocalStorage() {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        myIdea.push(idea)
        localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }

    deleteFromLocalStorage() {
        let myIdea = JSON.parse(localStorage.getItem('myIdea'))
        let idea = {'title': this.title, 'describtion': this.describtion, 'done': this.done, 'important': this.important, 'date': this.date}
        for (let i = 0; i < myIdea.length; i++) {
            if(JSON.stringify(myIdea[i]) === JSON.stringify(idea)) {
                myIdea.splice(i, 1)
            }
        }
        localStorage.setItem('myIdea', JSON.stringify(myIdea))
    }
}
//select right area
const rightBody = document.querySelector('.right')

const today = document.getElementById('Today');
today.classList.add("active")

const todayTitle = document.createElement('h2')
todayTitle.id = 'title'
todayTitle.innerHTML = 'Today'

rightBody.appendChild(todayTitle)
rightBody.appendChild(addToday())

today.addEventListener('click', () => {

    rightBody.innerHTML = ''

    const todayTitle = document.createElement('h2')
    todayTitle.id = 'title'
    todayTitle.innerHTML = 'Today'

    rightBody.appendChild(todayTitle)

    rightBody.appendChild(addToday())

    today.classList.add("active")
    allTask.classList.remove("active")
    allIdea.classList.remove("active")
    important.classList.remove("active")
})

// add eventlistener to create new right panel
const allTask = document.getElementById('Task');
allTask.addEventListener('click',  () => {

    rightBody.innerHTML = ''

    const todayTitle = document.createElement('h2')
    todayTitle.id = 'title'
    todayTitle.innerHTML = 'All Task'

    rightBody.appendChild(todayTitle)

    rightBody.appendChild(showAllTask())

    today.classList.remove("active")
    allTask.classList.add("active")
    allIdea.classList.remove("active")
    important.classList.remove("active")
});

const allIdea = document.getElementById('Idea');
allIdea.addEventListener('click', () => {

    rightBody.innerHTML = ''

    const todayTitle = document.createElement('h2')
    todayTitle.id = 'title'
    todayTitle.innerHTML = 'All Idea'

    rightBody.appendChild(todayTitle)

    rightBody.appendChild(showAllIdea())
    today.classList.remove("active")
    allTask.classList.remove("active")
    allIdea.classList.add("active")
    important.classList.remove("active")
});

const important = document.getElementById('Important');
important.addEventListener('click', () => {

    rightBody.innerHTML = ''

    const todayTitle = document.createElement('h2')
    todayTitle.id = 'title'
    todayTitle.innerHTML = 'Important'

    rightBody.appendChild(todayTitle)

    rightBody.appendChild(showImportant())

    today.classList.remove("active")
    allTask.classList.remove("active")
    allIdea.classList.remove("active")
    important.classList.add("active")
});

