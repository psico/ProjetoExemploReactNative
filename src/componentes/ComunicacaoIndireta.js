import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Padrao from "../estilo/Padrao";
import TextInput from "react-native-web/src/exports/TextInput";

export const Entrada = props =>
    <View>
        <TextInput value={props.texto}
                   style={Padrao.input}
                   onChangeText={props.chamarQuandoMudar}/>
    </View>

export default class TextoSincronizado extends Component {

    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({texto})
    }

    render() {
        return (
            <View>
                <Text style={Padrao.fonte40}>{this.state.texto}</Text>
                <Entrada texto={this.state.texto}
                         chamarQuandoMudar={this.alterarTexto}
                />
            </View>

        )
    }
}
