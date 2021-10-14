import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './actions';

export let reducer = (state = [], action) => {
    let newList;
    switch (action.type) {
        case ADD_TODO:
            newList = [...state];
            newList.push(action.payload);
            return newList;
        case DELETE_TODO:
            newList = [...state];
            newList = newList.filter(todo => todo.id !== action.payload);
            return newList;
        case UPDATE_TODO:
            newList = [...state];
            let index = -1;
            for (let i = 0; i < newList.length; i++) {
                index++;
                if (newList[i].id === action.payload.id) {
                    break;
                }
            }
            if (index !== -1) {
                newList[index] = action.payload;
                return newList;
            }
            break;
        default:
    }
    return state;
}