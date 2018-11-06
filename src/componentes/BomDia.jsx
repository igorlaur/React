import React from 'react'

export default props => [
    <h1 key='h1'>Bom dia, {props.nome}! Eu tenho {props.idade} anos.</h1>,
    <h2 key='h2'>Até breve!</h2>
        // Key para não dar erro de renderização no console
]

// Como uma DIV, o React.Fragment ele também servirá como tag e não será renderizado no HTML 
/*
    <React.Fragment> 
        <h1>Bom dia, {props.nome}! Eu tenho {props.idade} anos.</h1>
        <h2>Até breve!</h2>
    </React.Fragment>
*/

/*
    <div> 
        <h1>Bom dia, {props.nome}! Eu tenho {props.idade} anos.</h1>
        <h2>Até breve!</h2>
    <div>
*/