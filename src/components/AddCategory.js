import React, {  useState } from 'react';
import PropTypes from 'prop-types'

//Tarea 2: Agregar los PropTypes para setCategories que sea obligatoria
export const AddCategory = ({ setCategories }) => {
    const [inputVal, setinputVal] = useState('');

    const handleInputChange = (e) => {
        setinputVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputVal.trim().length > 2){
            //Tarea 1: recibir setCategories en este componente y llamarlo desde esta función
            setCategories(ctg => [inputVal, ...ctg,]);
            setinputVal('');
        }
    }

    return (
        
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputVal }
                onChange={ handleInputChange }
            />
        </form>
    )    
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}