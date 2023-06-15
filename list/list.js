"use strict"

const formToDoList = document.getElementById('form');
const todoInput = document.getElementById('todo');

formToDoList.addEventListener('submit', function (e) {
    e.preventDefault();
    const todoValue = todoInput.value;

    if (todoValue.trim() !== '') {
        let item = `
                <div class="item">
                    <p>${todoValue}</p>
                    <button class="btn-delete"
                    </button>
                    <button class="btn-archive">
                    </button>
                </div>
        `

        const listItems = document.querySelector('.list-items');
        listItems.innerHTML += item;

        const btnDelete = document.querySelectorAll('.btn-delete');
        btnDelete.forEach(i => {
            console.log('btn-delete')
            i.addEventListener('click', function () {
                console.log('btn-delete cliqué');
                i.parentElement.remove();
            });
        });

        const btnArchive = document.querySelectorAll('.btn-archive');
        btnArchive.forEach(i => {
            console.log('btn-archive');
            i.addEventListener('click', function () {
                const parent = i.parentElement;
                parent.classList.toggle('done');
            });
        });

    };
    formToDoList.reset();
});


// const formToDoList = document.getElementById('form');
// const todoInput = document.getElementById('todo');
// const listItems = document.querySelector('.list-items');

// formToDoList.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const todoValue = todoInput.value.trim();

//   if (todoValue !== '') {
//     const itemTemplate = document.getElementById('item-template');
//     const newItem = document.importNode(itemTemplate.content, true);
//     const todoText = newItem.querySelector('.todo-text');
//     const btnDelete = newItem.querySelector('.btn-delete');
//     const btnArchive = newItem.querySelector('.btn-archive');

//     todoText.textContent = todoValue;
//     btnDelete.addEventListener('click', deleteItem);
//     btnArchive.addEventListener('click', toggleDone);

//     listItems.appendChild(newItem);
//   }

//   formToDoList.reset();
// });

// function deleteItem(e) {
//   const item = e.target.parentElement;
//   item.remove();
// }

// function toggleDone(e) {
//   const item = e.target.parentElement;
//   item.classList.toggle('done');
// }