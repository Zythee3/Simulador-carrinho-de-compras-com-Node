// Parte das funcionalidades que o carrinho vai apresentar

import { calculateSubTotal } from "./item.js";

// Adicionar item ao carrinho
async function addItem(userCart, item) {
    
    userCart.push(item);
}

// Deletar um item do carrinho
async function deleteItem(userCart, index) {
    
    // atualização no número do index para o usuário conseguir remover atráves do index que é visto na listagem da função display
    const indexUpdate = index - 1;
    
    if (indexUpdate >= 0 && index<= userCart.length){
        
        // serve para remover o item o array
        userCart.splice(indexUpdate, 1);
    }
}

// Remover uma quantidade do item
async function removeItem(userCart, index) {
    
    const indexUpdate = index - 1;
    
    if (indexUpdate >= 0 && index<= userCart.length){
        
        userCart.forEach((item, index) => {

            if (index == indexUpdate){
                item.quantity -= 1;
                
                if (item.quantity == 0){
                    deleteItem(userCart, item.index);
                }
                item.subTotal = calculateSubTotal(item.price, item.quantity)
                
            }
        })
    }
}

// Adiciona uma nova quantidade a unidade do item
async function addQuantityItem(userCart, index, quantity) {
    const indexUpdate = index - 1;
    
    if (indexUpdate >= 0 && index<= userCart.length){
        
        userCart.forEach((item, index) => {

            if (index == indexUpdate){
                item.quantity += quantity;
                item.subTotal = calculateSubTotal(item.price, item.quantity)
                
            }
        })
    }
}


// Cacular o total do carrinho
async function calculateValue(userCart) {
    
    const result = userCart.reduce((total, item)=> total + item.subTotal, 0);
    console.log(`==============================================================\n💵 Valor total do carrinho: ${result.toFixed(2)}\n==============================================================`);
}

// Exibir os item que estão dentro da lista
async function displayCart(userCart) {
    console.log("==============================================================\n🛒 Carrinho de compras\n==============================================================");
    userCart.forEach((item, index) =>{
        console.log(`${item.index}. ${item.name}  ${item.quantity}  ${item.price} = ${item.subTotal}`);
    })
}

export{
    addItem,
    deleteItem,
    removeItem,
    calculateValue,
    displayCart,
    addQuantityItem
}
