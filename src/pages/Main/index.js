import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, ImageBackground, Text, TouchableOpacity, View, StatusBar, Alert, StyleSheet, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

//Context

import styles from './styles';
import { api, http } from '../../services/api'
import Loading from '../../components/Loading'
import images from '../../constants/imagensBase64'
import { car } from '../../constants/data'

export default function Main() {
  const route = useRoute()
  const navigation = useNavigation()
  const [loadingVisible, setLoadingVisible] = useState(false)

  function navigateToWorkshop(props) {
    //console.log('props:',props);
    navigation.navigate('Workshop')
  }
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
        <Text style={styles.headerTitle}>Olá</Text>
        <Text style={styles.headerSubtitle}>Nathan Gabriel</Text>
      </View>

      <View style={styles.main}>
        <TouchableOpacity
          style={styles.mainCard}
          onPress={() => navigateToWorkshop()}
        >
          <Image
            source={{ uri: images.workshop }}
            style={styles.mainCardIcon}
            resizeMode={'contain'}
          />
          <Text style={styles.mainCardText}>{`\nOficinas`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainCard}
          onPress={() => { }}
        >
          <Image
            source={{ uri: images.addFriend }}
            style={styles.mainCardIcon}
            resizeMode={'contain'}
          />
          <Text style={styles.mainCardText}>{`Indicar um\namigo`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainCard}
          onPress={() => { }}
        >
          <Image
            source={{ uri: images.workshop }}
            style={styles.mainCardIcon}
            resizeMode={'contain'}
          />
          <Text style={styles.mainCardText}>{`Adicionar\nnovo Veiculo`}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerCard}>
          <Text style={styles.footerCardPlanText}>{`Plano: ${car.plan}`}</Text>
          <TouchableOpacity
            style={styles.footerCardItem}
            onPress={() => { }}
          >
            <Image
              source={require('../../../assets/images/carro-novo-onix.png')}
              style={styles.footerCardIcon}
              resizeMode={'contain'}
            />
            <View style={styles.footerCardDetailsTitle}>
              <Text style={styles.footerCardTitle}>{`${car.name}`}</Text>
              <Text style={styles.footerCardSubtitle}>{`${car.year}`}</Text>
            </View>
            <View style={styles.footerCardDetails}>
              <Text style={styles.footerCardSubtitle}>{`Media de ${car.kmWheelsets}Km/rodados`}</Text>
              <Text style={styles.footerCardSubtitle}>{`Valor fipe: $${car.fipe}`}</Text>
            </View>

          </TouchableOpacity>
        </View>
      </View >
    </>

  );
}