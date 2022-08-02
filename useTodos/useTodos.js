import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    //Si existen todos almacenados en el localStorage traerlos y convertirlos a objeto, si no regresar un arreglo
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init); //Se pasa la referencia de la función todoReducer al hook useReducer
    //dispatch: Función a llamar para ejecutar o mandar acciones al reducer

    useEffect(() => { //Se va generar un efecto cuando se cambie el todos
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleNewTodo = (todo) => {
        //Se crea la acción con las propiedades necesarias para el todoReducer.js
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action); //Se hace dispatch de la acción para el reducer
    }

    const handleDeleteTodo = (id) => {
        dispatch({ //Le pasamos la acción directamente al dispatch, en lugar de crear una variable action
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo
    }
}