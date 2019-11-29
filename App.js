import React from 'react'
import {View, Text} from 'react-native'
import {createDrawerNavigator} from 'react-navigation'
import Contador from './src/componentes/Contador'

import Simples from './src/componentes/Simples';
import Pamimpar from "./src/componentes/Pamimpar";
import Inverter, {MegaSena} from './src/componentes/Multi'
import Plataformas from './src/componentes/Plataformas'
import ValidarProps from "./src/componentes/ValidarProps";
import Evento from "./src/componentes/Eventos";
import Avo from "./src/componentes/ComunicacaoDireta";
import TextoSincronizado from "./src/componentes/ComunicacaoIndireta";

// export default () => <View><Text>Testfgge333ge</Text></View>

export default createDrawerNavigator({
    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: {title: 'Texto Sincronizado'}
    },
    Avo: {
        screen: () => <Avo nome='João' sobrenome='Silva'/>
    },
    Evento: {
        screen: Evento
    },
    ValidarProps: {
        screen: () => <ValidarProps ano={18} />
    },
    Plataformas: {
        screen: () => <Plataformas />
    },
    Contador: {
        screen: () => <Contador numeroInicial={100}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8}/>,
        navigationOptions: {title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!'/>
    },
    Pamimpar: {
        screen: () => <Pamimpar numeros={30}/>,
        navigationOptions: {title: 'Par & Impar'}
    },
    Simples: {
        screen: () => <Simples texto='Flexivel!!!'/>
    }
}, {drawerWidth: 300})
