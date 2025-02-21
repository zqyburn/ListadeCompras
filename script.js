function loadItems() {
    const items = JSON.parse(localStorage.getItem('shoppingList')) || [];
    const itemList = document.getElementById('itemList');
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.text;
        if (item.bought) {
            listItem.classList.add('comprado');
            listItem.style.border = '2px solid green'; // Adiciona borda verde
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('excluir'); // Adiciona a classe de estilo
        deleteButton.addEventListener('click', function() {
            itemList.removeChild(listItem);
            saveItems(); // Atualiza o armazenamento após a exclusão
        });

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Peguei';
        buyButton.classList.add('comprar'); // Adiciona a classe de estilo
        buyButton.addEventListener('click', function() {
            listItem.classList.toggle('comprado');
            listItem.style.border = listItem.classList.contains('comprado') ? '2px solid green' : 'none'; // Alterna a borda
            saveItems(); // Atualiza o armazenamento após a compra
        });

        listItem.appendChild(buyButton);
        listItem.appendChild(deleteButton);
        itemList.appendChild(listItem);
    });
}

document.getElementById('addButton').addEventListener('click', function() {
    const itemInput = document.getElementById('itemInput');
    const itemValue = itemInput.value.trim();

    if (itemValue) {
        const itemList = document.getElementById('itemList');
        const listItem = document.createElement('li');
        listItem.textContent = itemValue;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('excluir'); // Adiciona a classe de estilo
        deleteButton.addEventListener('click', function() {
            itemList.removeChild(listItem);
            saveItems(); // Atualiza o armazenamento após a exclusão
        });

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Comprar';
        buyButton.classList.add('comprar'); // Adiciona a classe de estilo
        buyButton.addEventListener('click', function() {
            listItem.classList.toggle('comprado');
            listItem.style.border = listItem.classList.contains('comprado') ? '2px solid green' : 'none'; // Alterna a borda
            saveItems(); // Atualiza o armazenamento após a compra
        });

        listItem.appendChild(buyButton);
        listItem.appendChild(deleteButton);
        itemList.appendChild(listItem);
        itemInput.value = ''; 
        saveItems(); // Salva o novo item
    }
});

// Carregar itens ao iniciar
loadItems();