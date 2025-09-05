const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
const notes = document.querySelector('.input-box');
// const dltBtn = document.getElementById('dlt');

createBtn.addEventListener('click', function() {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className= 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = "images/delete.png";
    // inputBox.appendChild(img);
    notesContainer.appendChild(inputBox).appendChild(img);

})
