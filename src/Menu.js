import React from 'react'
import {createDrawerNavigator} from 'react-navigation'

import Simples from './componentes/Simples';
import Pamimpar from "./componentes/Pamimpar";
import Inverter, {MegaSena} from './componentes/Multi'

export default createDrawerNavigator({
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
