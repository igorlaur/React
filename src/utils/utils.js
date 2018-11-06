import React from 'react'

export function childrenWithProps(props) {
    return React.Children.map(props.children, child => { /* Transmitindo propriedades do pai para o Filho, como sobrenome */
        return React.cloneElement(child, {
            ...props, ...child.props  
       })
    })
}