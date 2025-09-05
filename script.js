const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
const notes = document.querySelector('.input-box');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();
function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}
createBtn.addEventListener('click', function() {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className= 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = "images/delete.png";
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
    inputBox.focus();
})

notesContainer.addEventListener('input', function(e) {
    if(e.target.classList.contains('input-box'))
    {
        updateStorage();
    }
})


notesContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }   
    else if(e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
})

document.addEventListener('keydown', function(e) {
    if(e.key === 'Enter' && e.target.classList.contains('input-box')) {
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
})
showNotes();
