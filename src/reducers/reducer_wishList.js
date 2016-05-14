export default function (state=[], action){
    switch (action.type) {
        case 'ADD_TO_WISHLIST':
            state.push(action.payload)
            return [...state]
        case 'REMOVE_FROM_WISHLIST':
            state.splice(state.indexOf(action.payload), 1)
            return [...state]
    }
    return state;
}