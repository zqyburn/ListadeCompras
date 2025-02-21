document.getElementById('addButton').addEventListener('click', function() {
    const itemInput = document.getElementById('itemInput');
    const itemValue = itemInput.value.trim();

    if (itemValue) {
        const itemList = document.getElementById('itemList');
        const listItem = document.createElement('li');
        listItem.textContent = itemValue;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', function() {
            itemList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        itemList.appendChild(listItem);
        itemInput.value = ''; 
    }
});