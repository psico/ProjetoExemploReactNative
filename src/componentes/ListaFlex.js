import React from 'react'
import {ScrollView, View, FlatList, Text} from 'react-native'

const alunos = [
    {id: 1, nome: 'João', nota: 7.8},
    {id: 2, nome: 'Ana', nota: 4.7},
    {id: 3, nome: 'Maria', nota: 6.9},
    {id: 4, nome: 'Jhon', nota: 7.8},
    {id: 5, nome: 'Giovane', nota: 8.9},
    {id: 6, nome: 'Emanuel', nota: 5.3},
    {id: 7, nome: 'Fulano', nota: 7.8},
    {id: 8, nome: 'Paula', nota: 3.3},
    {id: 9, nome: 'Virgilia', nota: 7.8},
    {id: 10, nome: 'Marcela', nota: 7.4},
    {id: 11, nome: 'Claudio', nota: 8.6},
    {id: 12, nome: 'Victor', nota: 5.7},
    {id: 13, nome: 'Fulano', nota: 7.8},
    {id: 14, nome: 'Beltrano', nota: 7.5},
    {id: 15, nome: 'Ciclano', nota: 7.7},
    {id: 16, nome: 'Vantuir', nota: 8.3},
    {id: 17, nome: 'Marcia', nota: 5.7},
    {id: 18, nome: 'Flávio', nota: 7.9},
    {id: 19, nome: 'Fátima', nota: 9.9},
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //Flex
    // justifyContent: 'space-around'
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({item}) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                      keyExtractor={(_, index) => index.toString()}/>
        </ScrollView>
    )
}
