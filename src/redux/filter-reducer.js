const ADD_INGREDIENT_FOR_FILTER = 'ADD-INGREDIENT-FOR-FILTER';
const REMOVE_FILTER = 'REMOVE-FILTER';
const UPDATE_USER_SEARCH_TEXT = 'UPDATE-USER-SEARCH-TEXT';
const REMOVE_USER_SEARCH = 'REMOVE-USER-SEARCH';

let initialState = {
    dropMenuIngredients: [
        'чушки', 'авокадо', 'боб', 'домати', 'ориз', 'броколи', 'гъби', 'кайма',
        'картофи', 'тиквички', 'яйца', 'спанак', 'цвекло', 'тиква', 'краставици', 'кашкавал', 'бекон', 'будгур'
    ],
    ingredientsForFilter: [

    ],
    userSearch: ''

}
const ingredientForFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT_FOR_FILTER:
            state.ingredientsForFilter.push(action.newIngredient);
            return state;
        case REMOVE_FILTER:
            state.ingredientsForFilter.splice(0, state.ingredientsForFilter.length);
            return state;
        case REMOVE_USER_SEARCH:
            state.userSearch = '';
            return state;
        case UPDATE_USER_SEARCH_TEXT:
            state.userSearch = action.newText.toLowerCase();
            return state;
        default:
            return state;
    }
}

export const actionCreatorAddIngredientsForFilter = (ingredient) => {
    return {
        type: ADD_INGREDIENT_FOR_FILTER,
        newIngredient: ingredient
    }
}

export const actionCreatorRemoveFilter = () => ({type: REMOVE_FILTER})

export const actionCreatorRemoveUserSearch = () => ({type: REMOVE_USER_SEARCH})

export const actionCreatorUpdateUserSearchText = (text) => {
    return {
        type: UPDATE_USER_SEARCH_TEXT,
        newText: text
    }
}



export default ingredientForFilterReducer;