import logo from '../../assets/logo.png'

import tomate from '../../assets/frutas/tomate.png'
import broculis from '../../assets/frutas/Bróculis.png'
import batata from '../../assets/frutas/Batata.png'
import pepino from '../../assets/frutas/Pepino.png'
import abobora from '../../assets/frutas/Abóbora.png'

const cesta ={
    topo:{
        titulo: "detalhe da cesta",
    },
    detalher:{
        nome:"Cesta de verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        preco: "R$ 40,00",
        botao: "Comprar"
    },
    itens:{
        titulo: "Itens da cesta",
        lista:[
            {nome:"Tomate", imagem:tomate,},
            {nome:"Bróculis", imagem:broculis,},
            {nome:"Batata", imagem:batata,},
            {nome:"Pepino", imagem:pepino,},
            {nome:"Abóbora", imagem:abobora,},
        ]
    }
}