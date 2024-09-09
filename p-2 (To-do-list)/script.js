const inputId = document.getElementById('inputId');
const buttonId = document.getElementById('btnId');
const taskList = document.getElementById('task-list');

buttonId.addEventListener('click', () => {
    let inputValue = inputId.value;

    if (inputValue === "") {
        alert('Please give some task..')

    } else {

        let li = document.createElement('li');

        li.innerHTML = inputValue;
        taskList.appendChild(li);

        let span = document.createElement('span');
        span.classList.add('delete');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        saveData();
    }
    inputId.value = "";
})

taskList.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked');
        saveData();

    } else if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }

})


function saveData() {
    localStorage.setItem('data', taskList.innerHTML);
}

function showTask() {
    taskList.innerHTML = localStorage.getItem('data');
}

showTask();