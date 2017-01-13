import  * as types from '../constants/actionTypes'

export const addInventory = (inventory) => {
    return {
        type: types.ADD_INVENTORY,
        payload: inventory
    }
}


export const incrementQuantity = (payload) => {
    return {
        type: types.ADD_QUANTITY,
        payload
    }
}


export const decrementQuantity = (payload) => {
    return {
        type: types.REMOVE_QUANTITY,
        payload
    }
}