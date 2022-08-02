export const todoReducer = (initialState = [], action) => {
    switch(action.type) {
        case '[TODO] Add Todo':
            // throw new Error('Action.type = ABC no está implementada'); //Se usa cuando algo está pendiente de implementación, lanzará un error al entrar aquí
            return [...initialState, action.payload];
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id != action.payload); //Regresa todos los todos excepto el que indicamos para borrar
        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });
        default:
            return initialState;
    }
}