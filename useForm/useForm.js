import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => { //Se desestructura el target del evento
        const { name, value } = target; //Se desestructura el target para obtener name y value
        setFormState({
            ...formState, //Se mantienen las propiedades del formState
            [name]: value //Se indica que se cambiará sólo el valor del campo que esté siendo modificado indicándolo con el name, si se modifica el campo con el name "username" se cambiará la propiedad "username" del objeto formState
        });
    }

    const onResetForm = () => {
        setFormState(initialForm); //Se resetea el estado al valor inicial que tenía
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
