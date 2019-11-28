import React from 'react'
import {View, Text} from 'react-native'
import Padrao from "../estilo/Padrao"
import If from './if'

function parOuImpar(num) {
    const v = num % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={Padrao.ex}>{v}</Text>

}

export default props =>
    <View>
        {
            parOuImpar(props.numero)
        }
    </View>
