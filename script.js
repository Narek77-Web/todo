// SELECTORS
const input = document.querySelector('.app form input[type=text]');
const submit = document.querySelector('.app form input[type=submit]');
const select = document.querySelector('.app form select');
const todos = document.querySelector('.app .todos');


// EVENT LISTENERS
submit.addEventListener('click', addNewTodoFunc);
todos.addEventListener('click', checkTodoFunc);
select.addEventListener('change', filterFunc);

// FUNCTIONS

function addNewTodoFunc(e){
    e.preventDefault();
    if(input.value.trim().length === 0) return;

    const todo = document.createElement('div');
    todo.classList.add('todo');

    const span1 = document.createElement('span');
    span1.classList.add('todo-text');
    span1.innerText = input.value;

    const span2 = document.createElement('span');
    span2.classList.add('todo-btn');
    span2.innerHTML = '<i class="fas fa-check"></i>';
    span2.innerHTML += '<i class="fas fa-trash"></i>';


    todo.append(span1);
    todo.append(span2);
    todos.append(todo);

    input.value = '';
}

function checkTodoFunc(e){

    if(e.target.classList[1] === 'fa-check'){
        const todo = e.target.parentElement.parentElement;
        todo.classList.toggle('done');
    }
    
    if(e.target.classList[1] === 'fa-trash'){
        const todo = e.target.parentElement.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', ()=>{
            todo.remove();
        });
    }
}







function filterFunc(e){

    const todos = document.querySelectorAll('.app .todos .todo');

    console.log(e.target.value); // all, completed, uncompleted

    if(e.target.value === 'all'){
        for(let elem of todos){
           elem.style.display = 'flex';
        }
    }
    if(e.target.value === 'completed'){
        for(let elem of todos){
            if(elem.classList.contains('done')) elem.style.display = 'flex';
            else elem.style.display = 'none';
        }
    }
    if(e.target.value === 'uncompleted'){
        for(let elem of todos){
            if(!elem.classList.contains('done')) elem.style.display = 'flex';
            else elem.style.display = 'none';
        }
    }
}

