import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, ImageBackground, Text, TouchableOpacity, View, StatusBar, Alert, StyleSheet, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

//Context

import styles from './styles';
import { api, http } from '../../services/api'
import Loading from '../../components/Loading'
//import images from '../../components/imagensBase64'

export default function Main() {
  const route = useRoute()
  const navigation = useNavigation()
  const [loadingVisible, setLoadingVisible] = useState(false)

  /* 
    async function loadAuth(param) {
      try {
        setLoadingVisible(true)
        const requestAPI = await api.get('/authUser',
          {
            params: {
              email: param.email,
              id: param.id,
              socialmethod: param.social
            }
          }
        )
        //console.log("login", requestAPI.data);
  
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
   */

  return (
    <>
      <View style={styles.header}>
        <Text>Olá</Text>
        <Text>Nathan Gabriel</Text>
      </View>
      <View style={styles.main}>
        <Text>Main</Text>
      </View>
      <View style={styles.footer}>
        <Text>footer</Text>
      </View>
    </>

  );
}