import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonFabComponent } from './styles';

export default function ButtonFab(props: any){
    return(
        <ButtonFabComponent color={props.color} rippleColor="rgba(255,255,255,0.3)">
            <Icon name={props.icon} size={25} color="#fff" />
        </ButtonFabComponent>
    )
}