import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const ConversationItem = styled(TouchableNativeFeedback)<any>`
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    padding: 10px 15px 0 15px;
`;

export const AvatarContainer = styled.View`

`;

export const Avatar = styled.Image`
    margin-top: -9px;
    margin-right: 15px;
    border-radius: 100px;
    width: 55px;
    height: 55px;
`;

export const MessageContainer = styled.View`
    flex: 1;
`;

export const MessageLine = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const MessageLineBottom = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-style: solid;
    border-color: #ddd;
    padding-bottom: 15px;
    border-bottom-width: 0.5px;
    flex: 1;
`;

export const MessageLineName = styled.Text`
    padding-top: 8px;
    font-weight: bold;
    font-size: 16px;
`;
export const MessageLineTime = styled.Text<any>`    
    color: ${props => props.active ? '#25D366' : '#666'};
    font-size: 13px;
`;

export const MessageLastText = styled.Text`
    color: #666;
    font-size: 14px;
`;
export const MessagesBadge = styled.View<any>`
    display: ${props => props.visibled ? 'flex': 'none'}
    background-color: #25D366;
    border-radius: 100px;
    width: 21px;
    height: 21px;
    padding: 2px;
    align-items: center;
    justify-content: center;
`;
export const MessagesBadgeNumber = styled.Text`
    font-size: 12px;
    color: #fff;
    font-weight: bold;
`;
