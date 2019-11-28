import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Padrao from '../estilo/Padrao'

export default (props) =>
    <Text style={[Padrao.ex]}>{props.texto}</Text>
