import React, { useRef } from 'react'
import './SubForm.css'

export default function FoodStyle(props) {

    const preventFunc = e => {
        e.preventDefault();

        const styleData = {
            foodStyle: []
        }

      
        allCheckboxes.current.forEach(checkbox => {
            if(checkbox.checked){
                styleData.foodStyle.push(checkbox.value)
            }
        })

        props.modifyIndex(4, styleData)
    }

    const allCheckboxes = useRef([]);

    const addCheck = (el) => {
        if (el && !allCheckboxes.current.includes(el)) {
            allCheckboxes.current.push(el);
        }
    };

    console.log(allCheckboxes);

    const handleReturn = () => {
        props.modifyIndex(2)
    }

    return (
        <form
            onSubmit={preventFunc}
            className="checkbox-form"
        >
            <p>Quelles sont tes cuisines préférées </p>
            <span>Choix multiples</span>

            <label htmlFor="italian">
                Italienne
            </label>
            <input
                ref={addCheck}
                type="checkbox"
                id='italian'
                value='italian'
            />

            <label htmlFor="japanese">
                Japonaise
            </label>
            <input
                ref={addCheck}
                type="checkbox"
                id='japanese'
                value='japanese'
            />

            <label htmlFor="idian">
                Indienne
            </label>
            <input
                ref={addCheck}
                type="checkbox"
                id='idian'
                value='idian'
            />

            <label htmlFor="thaï">
                Thaïlandaise
            </label>
            <input
                ref={addCheck}
                type="checkbox"
                id='thaï'
                value='thaï'
            />

            <label htmlFor="french">
                Française
            </label>
            <input
                ref={addCheck}
                type="checkbox"
                id='french'
                value='french'
            />

            <label htmlFor="chinese">
                Chinoise
            </label>
            <input
                ref={addCheck}
                type="checkbox"
                id='chinese'
                value='chinese'
            />

            <div className="container-nav-btns">
                <button type='button' className='prev' onClick={handleReturn}>
                    Précédent
                </button>
                <button>Valider</button>
            </div>
        </form>

    )
}
