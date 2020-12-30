import React from 'react';
import { Alert, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ButtonFab from '../../../components/ButtonFab';
import { 
    ConversationItem, 
    AvatarContainer, 
    Avatar, 
    MessageContainer, 
    MessageLine, 
    MessageLineName, 
    MessageLineTime, 
    MessageLineBottom, 
    MessageLastText, 
    MessagesBadge, 
    MessagesBadgeNumber 
} from './styles';
import iconDoubleCheck from '../../../assets/icons/double-check.png';

export default function ConversationTab(){
            
    const conversations: any[] = [
        {
            id: '1',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7wEcxp2kEGYlB0bBCd9S6FGxdIOoRuQZZxA&usqp=CAU',
            name: 'Família Oliveira',
            last_time: '16:58',
            last_message: '+55 77 9804-3437: 😍😍😍',
            total_messages: 0
        },
        {
            id: '2',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7wEcxp2kEGYlB0bBCd9S6FGxdIOoRuQZZxA&usqp=CAU',
            name: 'NeverStopLearning',
            last_time: '16:58',
            last_message: 'André: Foto',
            total_messages: 9
        },
        {
            id: '3',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7wEcxp2kEGYlB0bBCd9S6FGxdIOoRuQZZxA&usqp=CAU',
            name: 'Silva Costa, Ferreira e Cia',
            last_time: '16:44',
            last_message: 'Pai: Vídeo',
            total_messages: 42
        },
        {
            id: '5',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7wEcxp2kEGYlB0bBCd9S6FGxdIOoRuQZZxA&usqp=CAU',
            name: 'Adriana Mattos',
            last_time: '16:22',
            last_message: 'Foto',
            total_messages: 0
        },{
            id: '6',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7wEcxp2kEGYlB0bBCd9S6FGxdIOoRuQZZxA&usqp=CAU',
            name: 'Grupo Tecnologia',
            last_time: '16:58',
            last_message: 'No momento o servidor está bem mais estável',
            total_messages: 0
        },
        {
            id: '8',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7wEcxp2kEGYlB0bBCd9S6FGxdIOoRuQZZxA&usqp=CAU',
            name: 'Paulo Assis',
            last_time: '16:44',
            last_message: 'certo, tranquilo.',
            total_messages: 2
        },
        {
            id: '9',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7wEcxp2kEGYlB0bBCd9S6FGxdIOoRuQZZxA&usqp=CAU',
            name: 'Mateus',
            last_time: '16:27',
            last_message: 'Bom dia 🎄🌧️🌧️',
            total_messages: 1
        }
    ];

    return(
        <>
            <FlatList
                data={conversations}
                keyExtractor={(item: any) => item.id}
                renderItem={({item}: any) => (
                    <ConversationItem key={item.id} onLongPress={() => Alert.alert('', '')} >
                        <AvatarContainer>
                            <Avatar source={{uri: item.avatar}} />
                        </AvatarContainer>
                        <MessageContainer>
                            <MessageLine>
                                <MessageLineName>{item.name}</MessageLineName>
                                <MessageLineTime active={item.total_messages}>
                                    {item.last_time}
                                </MessageLineTime>
                            </MessageLine>
                            <MessageLineBottom>
                                <MessageLastText numberOfLines={1}>                               
                                    <Image source={iconDoubleCheck} style={{width: 18, height: 18}} resizeMode="contain" /> {item.last_message}
                                </MessageLastText>
                                <MessagesBadge visibled={item.total_messages}>
                                    <MessagesBadgeNumber>{item.total_messages}</MessagesBadgeNumber>
                                </MessagesBadge>
                            </MessageLineBottom>
                        </MessageContainer>
                    </ConversationItem>
                )}
            />
            <ButtonFab icon="comment" color="#25D366" />
        </>
    )  
}