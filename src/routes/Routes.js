import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import Main from '../pages/Main'
import Workshop from '../pages/Workshop'
import DetailsWorkshop from '../pages/DetailsWorkshop'
import SelectAssociated from '../pages/SelectAssociated'
import CreateAssociated from '../pages/CreateAssociated'
import Mercosul from '../pages/Mercosul'
import DataFriend from '../pages/DataFriend'
import SendFriend from '../pages/SendFriend'
import MapWorkshops from '../pages/MapWorkshops'


//Components
import Header from '../components/Header'

const Stack = createStackNavigator();

export default function Routes() {


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
        <Stack.Screen name="SelectAssociated" component={SelectAssociated}
          options={{
            header: props => <Header
              data={props}
              borderRadius={25}
              title={'Associado'}
            />,
          }} />
        <Stack.Screen name="CreateAssociated" component={CreateAssociated}
          options={{
            header: props => <Header
              data={props}
              borderRadius={25}
              title={'Dados do associado'}
            />,
          }} />
        <Stack.Screen name="Mercosul" component={Mercosul}
          options={{
            header: props => <Header
              data={props}
              borderRadius={25}
              title={'Dados do associado'}
            />,
          }} />
        <Stack.Screen name="DataFriend" component={DataFriend}
          options={{
            header: props => <Header
              data={props}
              borderRadius={25}
              title={'Dados do amigo'}
            />,
          }} />
        <Stack.Screen name="SendFriend" component={SendFriend}
          options={{
            header: props => <Header
              data={props}
              borderRadius={25}
              title={'Convite'}
            />,
          }} />
        <Stack.Screen name="MapWorkshops" component={MapWorkshops}
          options={{
            header: props => <Header
              data={props}
              borderRadius={25}
              title={'Mapa de oficinas'}
            />,
          }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}
