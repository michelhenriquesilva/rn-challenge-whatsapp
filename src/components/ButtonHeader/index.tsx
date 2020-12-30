import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {ButtonHeaderSearchComponent, ButtonHeaderIcon} from './styles';

export default function ButtonHeader(props: any){
    return(
        <ButtonHeaderSearchComponent rippleColor={'rgba(255,255,255,0.3)'}>            
            <ButtonHeaderIcon name={props.icon} color="#fff" size={22} style={{marginHorizontal: 10}} />
        </ButtonHeaderSearchComponent>
    )
}