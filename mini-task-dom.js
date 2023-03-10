let from = document.getElementById('addForm');
let itemList = document.getElementById('items');

// From submit event
from.addEventListener('submit', addItem);

// Delet event
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    let deletebtn = document.createElement('button');

    // Create classes to del button
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deletebtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deletebtn);

    // Append li to list
    itemList.appendChild(li);

}

// Remove Item 

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        ;
        if (confirm('Are You Sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}