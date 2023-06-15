"use strict"
// Déclaration de 2 const en donnant comme valeur les balises form/todo
const formToDoList = document.getElementById('form');
const todoInput = document.getElementById('todo');


formToDoList.addEventListener('submit', function (e) {
    e.preventDefault();
    // Ici, on veut que todoValue ait la valeur du contenu de l'input
    const todoValue = todoInput.value;
    // Si la valeur du contenu input est strictement différent à "vide", alors on déclare une variable item comprenant notre contenu input
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
    // Une fois l'item crée, on va venir l'ajouter à la liste avec la concaténation
        const listItems = document.querySelector('.list-items');
        listItems.innerHTML += item;
    // On instentie ici notre bouton delete en utilisant une boucle forEach
        const btnDelete = document.querySelectorAll('.btn-delete');
        btnDelete.forEach(i => {
            console.log('btn-delete')
            i.addEventListener('click', function () {
                console.log('btn-delete cliqué');
                i.parentElement.remove();
            });
        });
    // Même principe que delete mais ici pour le bouton archiver qui va venir barré la tâche effectuée
        const btnArchive = document.querySelectorAll('.btn-archive');
        btnArchive.forEach(i => {
            console.log('btn-archive');
            i.addEventListener('click', function () {
                const parent = i.parentElement;
                parent.classList.toggle('done');
            });
        });

    };
    // En rajoutant la methode .reset, on "refresh" notre barre input à chaque ajout de contenu
    formToDoList.reset();
});
