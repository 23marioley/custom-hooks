import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true, //Cuando se monta el hook se está cargando
        hasError: null //Hay error?
    });

    const getFetch = async() => {
        setState({
            ...state,
            isLoading: true
        });

        const resp = await fetch(url); //Hacemos petición fetch a la api
        const data = await resp.json(); //Recibimos la respuesta

        setState({
            data, //Se manda el data
            isLoading: false, //Se deja de cargar
            hasError: null
        });
    }

    useEffect(() => {
        getFetch(); //Llamada a la función que hace la api request
    }, [url]) //Se ejecutará cuando la url cambie


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError 
    };
}
