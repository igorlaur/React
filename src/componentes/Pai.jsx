import React from 'react'
import { childrenWithProps } from '../utils/utils.js'


export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {
                childrenWithProps(props) /* Chamo a função do utils.js */
            }
        </ul> 
    </div> 