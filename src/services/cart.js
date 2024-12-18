// Parte das funcionalidades que o carrinho vai apresentar

// Adicionar item ao carrinho
async function addItem (userCart, item) {
    userCart.push(item);
}

// Deletar um item do carrinho
async function deleteItem (userCart, name) {
}

// Remover uma quantidade do item
async function removeItem (userCart, value) {
    
}

// Cacular o total do carrinho
async function calculateValue (userCart) {
    
    const result = userCart.reduce((total, item)=> total + item.subTotal(), 0);
    console.log(`🛒 Valor total do carrinho: ${result}`);
}

export{
    addItem,
    deleteItem,
    removeItem,
    calculateValue
}
