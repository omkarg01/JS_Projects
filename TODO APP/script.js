const input = document.querySelector('input');
let add = document.querySelector('#add');
let list = document.querySelectorAll('li')
let remove = document.querySelectorAll('.remove');
let edit = document.querySelectorAll('.edit');

add.addEventListener('click', function () {
    const task = input.value;
    // console.log(list)
    const li = document.getElementById('list')
    const newTask = document.createElement('li')

    newTask.innerHTML = `<span class="task">${task}</span> <span><button class="edit" id="${list.length + 1}">Edit</button><button
    class="remove" id="${list.length + 1}">Remove</button>`;
    
    li.appendChild(newTask);
    input.value = "";
    updateValues();
});

remove.forEach(element => {
    element.addEventListener('click', removeListner())
});

edit.forEach(element => {
    element.addEventListener('click', editListner())
})


function updateValues() {
    list = document.querySelectorAll('li');
    add = document.querySelector('#add');
    remove = document.querySelectorAll('.remove');
    console.log(list.length - 1);
    remove[list.length - 1].addEventListener('click', removeListner());
    edit = document.querySelectorAll('.edit');
    edit[list.length - 1].addEventListener('click', editListner());
}

function removeListner() {
    return function () {
        const removeId = this.id;
        console.log(this);
        list[removeId - 1].remove();
    };
}

function editListner() {
    return function () {
        const id = this.id - 1;
        console.log(id)
        const editElem = edit[id];

        const inp = createInp();
        const task = list[id].querySelector(".task");
        task.replaceWith(inp);

        const done = createDoneBtn(id);
        edit[id].replaceWith(done);

        doneEditing(done, inp, editElem, task);
    };
}

function createInp() {
    const inp = document.createElement('input');
    inp.className = "newtask";
    inp.placeholder = "Enter new task";
    return inp;
}

function createDoneBtn(id) {
    const done = document.createElement('button');
    done.className = "done";
    done.id = id;
    done.innerText = "Done";
    return done;
}

function doneEditing(done, inp, editElem, task) {
    done.addEventListener('click', function () {
        task.innerText = inp.value;
        inp.replaceWith(task);
        done.replaceWith(editElem)
    });
}