import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () =>{
    const [categories, setCategories] = useState(['Bleach']);

    //Tarea, agregar uno o mas elementos dento de categorias
    // const handleAdd = () =>{
    //     const newsAdd = ['Naruto', 'Sailor Moon', 'Kenichi'];
    //     setCategories([...categories, ...newsAdd]);
    //Forma mas eficiente para llamar setCategories
    //      setCategories(ctg => [...ctg, ...newsAdd]);        
    // }

    return (<>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />

        {/* <button onClick={ handleAdd }>Agregar</button> */}

        <ol>
            {
                categories.map( cat =>(
                    <GifGrid 
                        key={ cat }
                        category={ cat }
                    />
                ))
            }
        </ol>
    </>);
}

export default GifExpertApp;