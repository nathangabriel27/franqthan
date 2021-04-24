import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import Main from '../pages/Main'
import Workshop from '../pages/Workshop'
import DetailsWorkshop from '../pages/DetailsWorkshop'

//Components
import Header from '../components/Header'
//import images from '../constants/imagensBase64'


const Stack = createStackNavigator();

export default function Routes() {

  useEffect(() => {
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Main"}
        screenOptions={{ headerShown: true, animationEnabled: false }}
      >
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false, }} />

        <Stack.Screen name="Workshop" component={Workshop}
          options={{
            header: props => <Header
              data={props}
              borderRadius={0}
              title={'Oficinas'}
            />,
          }} />
        <Stack.Screen name="DetailsWorkshop" component={DetailsWorkshop}
          options={{
            header: props => <Header
              data={props}
              borderRadius={0}
              title={''}
            />,
          }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}
