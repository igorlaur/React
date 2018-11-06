import React from 'react'
import ReactDOM from 'react-dom' // Importando do package.json

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

//ReactDOM.render(<BomDia nome="Igor" idade={20} />, document.getElementById('root'))
ReactDOM.render(
    <div>
        <Pai nome="Antonio" sobrenome="Laur">
            {/* Como passo os componentes Filhos aqui? */}
            <Filho nome="Igor" />
            <Filho nome="Alexandre" />
        </Pai>
    </div>
, document.getElementById('root'))
