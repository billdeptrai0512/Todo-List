import _ from 'lodash';
import './style.css';



const leftPanel = document.querySelector('.left');
const menuButton = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    if (leftPanel.classList == "left") {
        leftPanel.classList.add('hidden')
    } else {
        leftPanel.classList.remove('hidden')
    }
})

