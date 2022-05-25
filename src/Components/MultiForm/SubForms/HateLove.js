import React, { useState } from 'react'

export default function HateLove(props) {

    /* Setting the initial state of the formData object. */
    const [formData, setFormData] = useState({
        prefs: {
            love: "",
            hate: ""
        }
    });

    /**
     * If the pref is love, set the love property of the prefs object to the value of the textarea. 
     * 
     * If the pref is hate, set the hate property of the prefs object to the value of the textarea.
     * @param e - the event object
     * @param pref - 'love' or 'hate'
     */
    const handleTxtArea = (e, pref) => {
        if (pref === 'love') {
            setFormData({
                prefs: {
                    ...formData.prefs,
                    love: e.target.value
                }
            })
        }
        else if (pref === 'hate') {
            setFormData({
                prefs: {
                    ...formData.prefs,
                    hate: e.target.value
                }
            })
        }
    }

    const preventFunc = e => {
        e.preventDefault();

        props.modifyIndex(6, formData)
    }

    const handleReturn = () => {
        props.modifyIndex(4)
    }


    return (
        <form className="preferences-form"
            onSubmit={preventFunc}
        >
            <p>Parle -nous des aliment que tu préfères et que tu détestes ! </p>

            <label htmlFor="prefered"> Tes aliments préférés, séparés par une virgule : </label>
            <textarea
                id="prefered"
                placeholder='Un ou plusieurs, si tu en as'
                onChange={e => handleTxtArea(e, 'love')}
            >
            </textarea>

            <label htmlFor="hated"> les aliments que tu ne supporte pas, séparés par une virgule : </label>
            <textarea
                id="hated"
                placeholder='Un ou plusieurs, si tu en as'
                onChange={e => handleTxtArea(e, 'hate')}
            >
            </textarea>
            <div className="container-nav-btns">
                <button type='button' className='prev' onClick={handleReturn}>
                    Précédent
                </button>

                <button>
                    Valider
                </button>
            </div>

        </form>
    )
}
