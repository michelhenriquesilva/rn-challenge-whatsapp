import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import ButtonHeader from '../components/ButtonHeader';
import HomeScreen from '../screen/Home';

const AppStack = createStackNavigator();

export default function AppRoutes(){
    return(
        <AppStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#3a5664',
                    elevation: 0,
                    shadowOpacity: 0
                },
                headerTintColor: '#fff'
            }}
        >
            <AppStack.Screen 
                name="HomeScreen"                 
                component={HomeScreen} 
                options={{
                    headerTitle: 'WhatsApp',
                    headerRight: () => <View style={{flexDirection: 'row'}}>
                        <ButtonHeader icon="search"/>
                        <ButtonHeader icon="more-vertical"/>
                        
                    </View>  
                }}
            />
        </AppStack.Navigator>
    )
}