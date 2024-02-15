import React from 'react';
import MeetingsScreen from '../screens/Meetings';
import HostsScreen from '../screens/Hosts';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Screen = props => {

  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#f15454',
            tabBarLabelStyle: {
                flex: 1,
                fontSize: 15,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
            },
            tabBarStyle: {display: 'flex'},
            tabBarIconStyle: {display: 'none'}
        }}
    >
        <Tab.Screen name={'Hosts'} component={HostsScreen}/>
        <Tab.Screen name={'Meetings'} component={MeetingsScreen}/>
    </Tab.Navigator>    
  );
};

export default Screen;