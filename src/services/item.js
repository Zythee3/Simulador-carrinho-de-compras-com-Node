// CASO DE USO DOS ITENS

//  Criar item
export function createItem(name, price, quantity) {
    return {
        name, 
        price,
        quantity,
        subTotal: calculateSubTotal(price, quantity),
    }
    
}

export function calculateSubTotal(price, quantity) {
    
    return price * quantity;
}