import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import Main from '../pages/Main'

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
        {/* 
            <Stack.Screen name="TypesOfDrinks" component={TypesOfDrinks}
              options={{
                header: props => <Header
                  data={props}
                  arrowWhite={true}
                 // image64={images.drinkIcon03}
                  title={''}
                />,
              }} />
        */}
      </Stack.Navigator>
    </NavigationContainer >
  );
}
