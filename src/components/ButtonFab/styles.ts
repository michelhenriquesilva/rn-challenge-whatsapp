import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const ButtonFabComponent = styled(RectButton)<any>`
    border: 1px solid red;
    width: 58px;
    height: 58px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 16px;
    right: 16px;
    elevation: 3;
    background-color: ${props => props.color ? props.color : '#000'}
`;