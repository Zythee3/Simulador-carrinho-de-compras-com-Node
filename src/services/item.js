// CASO DE USO DOS ITENS

//  Criar item


export function createItem(index, name, price, quantity) {
    return {
        index,
        name, 
        price,
        quantity,
        subTotal: calculateSubTotal(price, quantity),
    }
    
}

export function calculateSubTotal(price, quantity) {
    
    return price * quantity;
}