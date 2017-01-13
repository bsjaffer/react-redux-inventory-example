import {  ADD_INVENTORY, ADD_QUANTITY, REMOVE_QUANTITY } from '../constants/actionTypes'

const initialState = [];

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_INVENTORY:
            return [
                ...state,
                {
                    id: state.reduce((maxId, inventory) => Math.max(inventory.id, maxId), -1) + 1,
                    name: action.payload.name,
                    price: action.payload.price,
                    quantity: action.payload.quantity
                }
            ]
        case ADD_QUANTITY:
            return state.map(inventory => action.payload.ids.indexOf(inventory.id) !== -1 ?
                Object.assign({}, inventory, {quantity: inventory.quantity + 1}) :
                inventory
            )
        case REMOVE_QUANTITY:
            var updatedState = [];
            state.forEach(inventory => {
                if (action.payload.ids.indexOf(inventory.id) !== -1) {
                    if (inventory.quantity > 1) {
                        updatedState.push(Object.assign({}, inventory, {quantity: inventory.quantity - 1}));
                    }
                } else {
                    updatedState.push({...inventory});
                }
            })
            return updatedState;
        default:
            return state
    }
}

export default reducer;