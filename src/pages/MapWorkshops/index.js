import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, Linking, Text, TouchableOpacity, View, StatusBar, Alert, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import MapView, { Marker, Callout } from 'react-native-maps'
import * as Location from 'expo-location';

//Context

import styles from './styles';
import { api, http } from '../../services/api'
import Loading from '../../components/Loading'
import { car } from '../../constants/data'


export default function MapWorkshops() {
  const route = useRoute()
  const navigation = useNavigation()
  const [loadingVisible, setLoadingVisible] = useState(false)
  const { height, width } = Dimensions.get('window');

  const [latitude, setLatitude] = useState(-19.9132301);
  const [longitude, setLongitude] = useState(-43.9565751);


  useEffect(() => {
    console.log('data map ', route.params);
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Oooppss', 'Precisamos de permissão para usar a localização do seu aparelho.');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude)
      setLongitude(location.coords.longitude)
    })();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <MapView
          style={{ width: width, height: height }}
          initialRegion={{
            latitude: -19.9622435,
            longitude: -44.175102,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}
          //style={styles.map}
          showsUserLocation
          loadingEnabled
        >
          {/*           {devs.map(dev => (
              <Marker
               >
            
                <Callout
                >
                  <View style={styles.calloutFixed} >
                    <Text style={styles.devNameFixed} >{dev.nameGithub}</Text>
                    <Text style={styles.devtechsFixed} >{dev.usernameGithub}</Text>
                    <Text style={styles.devBioFixed} >{dev.bioGitHub}</Text>
                  </View>
                </Callout>
              </Marker>
            ))} */}

          {route.params.map(office => (

            <Marker
              coordinate={{
                latitude: parseFloat(office.Latitude),
                longitude: parseFloat(office.Longitude)
              }}>
              <Image
                source={{ uri: `data:image/png;base64,${office.Foto}` }}
                style={{
                  width: 150,
                  height: 151
                }}
                resizeMode={'contain'}
              />
              <Callout
              >
                <View style={{ width: 260, height: 100 }} >
                  <Text style={styles.calloutName}>{office.Nome}</Text>
                  <Text style={styles.calloutText}>{office.Endereco}</Text>

                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>


        <View style={styles.cardCar} >
          <Text style={styles.cardName} numberOfLines={1}>{car.name} </Text>
          <View style={styles.cardDetails}>
            <View style={styles.cardDetailsItens}>
              <Text style={styles.cardDetailsText}>{`${car.kmWheelsets} Km/rodados`}</Text>
              <Text style={styles.cardDetailsText}>{`Valor fipe: ${car.fipe}`}</Text>
              <Text style={styles.cardDetailsText}>{`Ano: ${car.year}`}</Text>
            </View>
            <View style={styles.cardDetailsPhoto}>
              <Image
                source={require('../../../assets/images/chevrolet-onix-joy-branco.png')}
                style={styles.cardDetailsPhotoCar}
                resizeMode={'contain'}
              />
            </View>
          </View>
        </View>

      </View>

    </>

  );
}