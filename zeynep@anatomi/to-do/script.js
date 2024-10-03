const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');
const todoFilter = document.getElementById('todo-filter');

// const todos = ['evi topla', 'markete git'];


//Bu fonksiyonla storageden kayıtlı fonksiyonlarımızı alıcaz
const getTodosFromStorage = () => {
    const storage = JSON.parse(localStorage.getItem('todos'));
    return (storage) ? storage : [];
}

const getDonesFromStorage = () => {
    const storage = JSON.parse(localStorage.getItem('dones'));
    return (storage) ? storage : [];
}

const todos = getTodosFromStorage();
//Kayıtlı dizimi localstorageden almıs oluyoruz.
const dones = getTodosFromStorage();



const getTodosToPage = () => {
        todos.forEach(todo => {
            createTodoItem(todo);
        });
    }
    //Burada inputa yazdığımız deger ekrana cıkar fakat bunları listeye kalıcı olarak kaydetmiyoruz sayfayı yenilediğimde girdiğimiz değer kaybolur


//Todo listemizin içerisine inputtan gelen değeri ekleme
//Biz bunu kalıcı olarak kaydetmek için storagelerden yaralanıcaz, storageye dizi değerini otomatik kaydedemiyorz o yüzden jsonlardan yaralanacagız  

const getDonesTopage = () => {
    dones.forEach(done => {
        createDoneItem(done);
    });
}



const saveTodosToStorage = (todo) => {
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    createTodoItem(todo);
    //burada sayfayı yenilediğimde artık kalıcı olarak kaydedilir
}


todoButton.addEventListener('click', () => {
    const input = todoInput.value;
    if (input) {
        saveTodosToStorage(input);
        todoInput.value = "";

    }
});


//keyup, klavyeden basılan tuşun bırakılmasıyla aktif olan bir fonksiyondur.
todoInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) todoButton.click();
})


// Dinamik olarak sayfa yüklendiğinde oluşması için acılan penceremize yükleme yapmamız gerekiyor.
window.addEventListener('load', () => {
        getTodosToPage();
        getDonesTopage();
    })
    //Sayfam her yüklendiğinde todo-listimin içerisindeki değerler item olusturularaak sayfama otomatik yüklendi


//Remove icon start

const removeTodo = (target) => {
        // console.log(target);
        const todo = target.parentNode.childNodes[0].innerHTML;
        removeTodoFromStorage(todo);
        target.parentNode.classList.add('animate__animated', 'animate__slideOutLeft', 'animate__faster');
        target.parentNode.addEventListener('animationend', () => {
            target.parentNode.remove();
        });
    }
    //Burada targatın işlevi tıkadığımız şeyi bize geri döndürmesi

const removeTodoFromStorage = (todo) => {
    const index = todos.indexOf(todo);
    if (index > -1) {
        todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
        //Burada hem görünür listeden hem localstorageden kalıcı siliyoruz
    }
}


const removeDoneFromStorage = (done) => {
    const index = dones.indexOf(done);
    if (index > -1) {
        dones.splice(index, 1);
        localStorage.setItem('dones', JSON.stringify(dones));
    }
}

//remove icon end



//check - uncheck icon start

const checkTodo = (target) => {
    const todo = target.parentNode.childNodes[0].innerHTML;
    moveTodoToDone(todo, target);
}

const moveTodoToDone = (todo, target) => {
    removeTodoFromStorage(todo);
    dones.push(todo);
    localStorage.setItem('dones', JSON.stringify(dones));

    //asagıdaki kodda checj - uncheck yapmamız için tekrar localstorageye kayıt yapmalıyız
    makeItDone(target);
}
const makeItDone = (target) => {
    const done = target.parentNode.classList.add('done');
    target.parentNode.classList.remove('todo');
    target.parentNode.childNodes[2].setAttribute('onclick', 'removeDone(this)');
    target.className = '';
    target.classList.add('fas', 'fa-check-square');
    target.setAttribute('onclick', 'unCheckDone(this)');
}

const unCheckDone = (target) => {
    const done = target.parentNode.childNodes[0].innerHTML;
    moveDoneToTodes(done, target);
}

const removeDone = (target) => {
    const done = target.parentNode.childNodes[0].innerHTML;
    removeDoneFromStorage(done);
    target.parentNode.classList.add('animate__animated', 'animate__slideOutLeft', 'animate__faster');
    target.parentNode.addEventListener('animationend', () => {
        target.parentNode.remove();
    });


}

const moveDoneToTodes = (done, target) => {
    removeDoneFromStorage(done);
    todos.push(done);
    localStorage.setItem('todos', JSON.stringify(todos));

    //asagıdaki kodda checj - uncheck yapmamız için tekrar localstorageye kayıt yapmalıyız
    makeItTodo(target);
}

const makeItTodo = (target) => {
    const todo = target.parentNode.classList.remove('done');
    target.parentNode.classList.add('todo');
    target.parentNode.childNodes[2].setAttribute('onclick', 'removeTodo(this)');
    target.className = '';
    target.classList.add('fas', 'fa-square');
    target.setAttribute('onclick', 'checkTodo(this)');
}

// const uncheck = (target) => {
//     const done = target.parentNode.childNodes[0].innerHTML;
//     moveDoneToTodo(done, target);
// }


//check - uncheck icon end



// ------------------
// Burada liste elemenlarını html de statik yapmak yerine her şeyi js de olusturuyoruz bu html kodunun karşılığı aşagıdaki js kodu

{
    /* <div class="todo-item todo">
            <li>Evi topla</li>
                <i class="fas fa-square"></i>
                <i class="fas fa-trash-alt">
            </i>
        </div>  
    */
}


//İlk olarak oluşturulacak yer burası

const createTodoItem = (text) => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item', 'todo');
        const todoItemLi = document.createElement('li');
        todoItemLi.innerHTML = text;
        const todoItemCheck = document.createElement('i');
        todoItemCheck.classList.add('fas', 'fa-square');
        todoItemCheck.setAttribute('onclick', 'checkTodo(this)');
        const todoItemRemove = document.createElement('i');
        todoItemRemove.classList.add('fas', 'fa-trash-alt');
        todoItemRemove.setAttribute('onclick', 'removeTodo(this)');
        todoItem.appendChild(todoItemLi);
        todoItem.appendChild(todoItemCheck);
        todoItem.appendChild(todoItemRemove);
        todoList.appendChild(todoItem);
    }
    // -----------------

//check edildikten sonraki yani(done)
const createDoneItem = (text) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item', 'done');
    const todoItemLi = document.createElement('li');
    todoItemLi.innerHTML = text;
    const todoItemCheck = document.createElement('i');
    todoItemCheck.classList.add('far', 'fa-check-square');
    todoItemCheck.setAttribute('onclick', 'uncheckDone(this)');
    const todoItemRemove = document.createElement('i');
    todoItemRemove.classList.add('fas', 'fa-trash-alt');
    todoItemRemove.setAttribute('onclick', 'removeDone(this)');
    todoItem.appendChild(todoItemLi);
    todoItem.appendChild(todoItemCheck);
    todoItem.appendChild(todoItemRemove);
    todoList.appendChild(todoItem);
}

// filter check


//parseInt ile filterın içerisinden gelen içerisindeki text değerini integer olarak alıyorum
todoFilter.addEventListener('click', () => {
    todoList.dataset.filter = (parseInt(todoList.dataset.filter) + 1) % 3;
    // console.log(todoList.dataset.filter);
    listFilter();
})

const listFilter = () => {
    const items = todoList.getElementsByClassName('todo-item')
        // console.log(items);
    let array = [].map.call(items, item => item);
    const filter = todoList.dataset.filter;
    array.forEach((item) => {
        switch (filter) {
            case '0':
                todoFilter.className = '';
                todoFilter.classList.add('far', 'fa-square');
                item.style.display = 'flex';
                break;
            case '1':
                todoFilter.className = '';
                todoFilter.classList.add('fas', 'fa-check-square');
                if (item.classList.contains('done')) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
                break;
            case '2':
                todoFilter.className = '';
                todoFilter.classList.add('fas', 'fa-check-square');
                if (item.classList.contains('todo')) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
                break;
            default:

        }
    })
}

// filter check end