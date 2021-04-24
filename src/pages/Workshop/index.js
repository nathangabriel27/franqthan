import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, TextInput, Text, TouchableOpacity, View, StatusBar, Alert, FlatList, Platform, ScrollView } from 'react-native';
import { Foundation } from '@expo/vector-icons';

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
     // console.log("loadData", requestAPI.data.ListaOficinas);
      setData(requestAPI.data.ListaOficinas)
    } catch (err) {
      const message =
        err.response && err.response.data
          ? ` Não foi possivel enviar dados para a API. Verique sua conexão. \nErro code: [ ${err} ]`
          : 'Não foi possivel enviar dados para a API.';

      Alert.alert('Ooopsss', message);
      setLoadingVisible(false)
      //setLoading(false)
    }
  }

  /*   const renderItem = (item) => {
      return (
        <TouchableOpacity
          style={}
          onPress={() => { }}
        >
          <Text>Teste</Text>
        </TouchableOpacity >
  
      )
    } */


  return (
    <>
      <View style={styles.header}>
        <TextInput
          style={styles.headerInput}
          autoCorrect={false}
          placeholder="Ex: oficina do Nathan"
          placeholderTextColor='#aaa'
          autoCapitalize="words"
          keyboardType="default"
          returnKeyType={'next'}
        //value={nameDrink}
        //onChangeText={(text) => setNameDrink(text)}
        />
        <TouchableOpacity
          style={styles.headerMap}
          onPress={() => { }}
        >
          <Foundation name="map" size={24} color='#3D4585' />
        </TouchableOpacity>
      </View>


      <View style={styles.main}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={styles.mainCard}
              onPress={() => { }}
            >
              <View style={styles.mainCardItem}>
                <View style={styles.mainCardPhoto}>
                  <Image
                    source={{ uri: `data:image/png;base64,${item.Foto}` }}
                    style={styles.mainCardLogo}
                    resizeMode={'contain'}
                  />
                  <View style={styles.mainCardDistance}>
                    <Image
                      source={require('../../../assets/images/addCar.png')}
                      style={styles.mainCardDistanceIcon}
                      resizeMode={'contain'}
                    />
                    <Text style={styles.mainCardDistanceTitle}>3,7KM</Text>
                  </View>
                    <Text style={styles.mainCardDistanceText}>Distancia</Text>
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
          )}
        />

      </View>

    </>

  );
}