import React from 'react'

const globalFilter = ({places}) => {


    return (
        <div className="global-filter-container">
            <span> Busca detalhada </span>
            <span> Tipo de seleção </span>
            <form>
                <div className="selectionTypeContainer">
                    <label htmlFor="selectionType1" className="asdasd">
                        <input
                            name="selectionType"
                            type="radio"
                            id="selectionType1"
                            value="demarcada"/>
                        Demarcada
                    </label>
                    <label htmlFor="selectionType2" className="asdasd">
                        <input
                            name="selectionType"
                            type="radio"
                            id="selectionType2"
                            value="isolada"/>
                        Isolada
                    </label>
                </div>
                <label> Opacidade da seleção
                    <input className="opacitySelection" type="range"></input>
                </label>
            </form>
            <span> Áreas do Rio de Janeiro </span>
            <div className="places">
                {places}
            </div>
        </div>
    )
}

export default globalFilter
