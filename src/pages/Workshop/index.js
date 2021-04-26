import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, TextInput, Text, TouchableOpacity, View, StatusBar, Alert } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import * as Location from 'expo-location';
//Context

import styles from './styles';
import { api, http } from '../../services/api'
import Loading from '../../components/Loading'
//import images from '../../components/imagensBase64'

export default function Workshop() {
  const route = useRoute()
  const navigation = useNavigation()
  const [loadingVisible, setLoadingVisible] = useState(false)
  const [data, setData] = useState([])


  useEffect(() => {
    loadData()
  }, [])

  async function loadData(param) {
    try {
      setLoadingVisible(true)
      const requestAPI = await api.get(`/Api/Oficina?codigoAssociacao=601&cpfAssociado=""`)
      setData(requestAPI.data.ListaOficinas)
      setFilteredData(requestAPI.data.ListaOficinas)

      //Coloquei esse timeout para ser possivel ver o loading.
      setTimeout(function () { setLoadingVisible(false) }, 500);

    } catch (err) {
      const message =
        err.response && err.response.data
          ? ` Não foi possivel enviar dados para a API. Verique sua conexão. \nErro code: [ ${err} ]`
          : 'Não foi possivel enviar dados para a API.';

      Alert.alert('Ooopsss', message);
      setLoadingVisible(false)
    }
  }

  function navigateToDetailsWorkshop(props) {
    // console.log('props navigateToDetailsWorkshop:', props);
    navigation.navigate('DetailsWorkshop', props)
  }

  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState();
  const searchFilter = (text) => {
    if (text) {
      const newData = filteredData.filter(
        function (item) {
          const itemData = item.Nome
            ? item.Nome.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
      setData(newData);
      setSearch(text);
    } else {
      setData(filteredData);
      setSearch(text);
    }
  }
  function navigateToMapWorkshops() {
    //console.log('props:',props);
    navigation.navigate('MapWorkshops', data)
  }


  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  useEffect(() => {
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

  function getDistanceFromLatLonInKm(position1, position2) {
    var deg2rad = function (deg) { return deg * (Math.PI / 180); },
      R = 6371,
      dLat = deg2rad(position2.lat - position1.lat),
      dLng = deg2rad(position2.lng - position1.lng),
      a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
        + Math.cos(deg2rad(position1.lat))
        * Math.cos(deg2rad(position1.lat))
        * Math.sin(dLng / 2) * Math.sin(dLng / 2),
      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return ((R * c).toFixed());
  }

  return (
    <>
      <StatusBar backgroundColor={'#3D4585'} barStyle="light-content" />

      <Loading loadingVisible={loadingVisible} />

      <View style={styles.header}>
        <TextInput
          style={styles.headerInput}
          autoCorrect={false}
          placeholder="Ex: oficina do Nathan"
          placeholderTextColor='#aaa'
          autoCapitalize="words"
          keyboardType="default"
          returnKeyType={'search'}
          value={search}
          onChangeText={(text) => searchFilter(text)}
        />
        <TouchableOpacity
          style={styles.headerMap}
          onPress={() => navigateToMapWorkshops()}
        >
          <Foundation name="map" size={24} color='#3D4585' />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        {data.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={styles.mainCard}
            onPress={() => navigateToDetailsWorkshop(item)}
          >
            <View style={styles.mainCardItem} >
              <View style={styles.mainCardPhoto}>
                <Image
                  source={{ uri: `data:image/png;base64,${item.Foto}` }}
                  style={styles.mainCardLogo}
                  resizeMode={'contain'}
                />
                <View style={styles.mainCardDistance}>
                  <Image
                    source={require('../../../assets/images/carLocation.png')}
                    style={styles.mainCardDistanceIcon}
                    resizeMode={'contain'}
                  />
                  <Text style={styles.mainCardDistanceTitle}>{
                    `${getDistanceFromLatLonInKm(
                      { lat: latitude, lng: longitude },
                      { lat: item.Latitude, lng: item.Longitude }
                    )} Km`
                  }</Text>
                </View>
                <Text style={styles.mainCardDistanceText}> da sua localização atual</Text>
              </View>
              <View style={styles.mainCardDetails}>
                <Text style={styles.mainCardDetailsTitle} numberOfLines={2}>{item.Nome}</Text>
                <Text style={styles.mainCardDetailsSubtitle} numberOfLines={3}>{item.DescricaoCurta}</Text>
              </View>
            </View>
            <View style={styles.mainCardFooter}>
              <Text style={styles.mainCardFooterText} numberOfLines={1}>{item.Endereco}</Text>
            </View>
          </TouchableOpacity >
        ))
        }

      </View>

    </>

  );
}