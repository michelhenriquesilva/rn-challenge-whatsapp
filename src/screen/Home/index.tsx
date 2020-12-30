import React from 'react';
import { Dimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/Feather';
import CallsTab from '../Tabs/CallsTab';
import CameraTab from '../Tabs/CameraTab';
import ConversationTab from '../Tabs/ConversationTab';
import StatusTab from '../Tabs/StatusTab';

export default function HomeScreen(){

    const initialLayout = { width: Dimensions.get('window').width };
    const [index, setIndex] = React.useState(1); 
      
      
    const [routes] = React.useState([
        { key: 'cameraScreen'},
        { key: 'conversationScreen', title: 'Conversas' },
        { key: 'statusScreen', title: 'Status' },
        { key: 'callsScreen', title: 'Chamadas' }
    ]);

    const renderScene = SceneMap({
        cameraScreen: CameraTab,
        conversationScreen: ConversationTab,
        statusScreen: StatusTab,
        callsScreen: CallsTab,
    });

    const renderTabBar = (props: any) => (
        <TabBar 
            {...props}
            indicatorStyle={{
                backgroundColor: '#fff'
            }}
            labelStyle={{
                fontWeight: 'bold',
                paddingHorizontal: 5,
            }}
            tabStyle={{
                width: 'auto'
            }}
            style={{
                backgroundColor: '#3a5664',
                alignContent: 'center'
            }}
            renderIcon={({route}) => (
                route.key == 'cameraScreen' ? <Icon name="camera" color="#fff" size={22} /> : null
            )}
        />
    )

    return(
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}         
        />
    )
}