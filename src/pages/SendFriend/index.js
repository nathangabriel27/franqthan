import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View, Alert, } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import moment from "moment";


//Context
import styles from './styles';
import { api, http } from '../../services/api'
import Loading from '../../components/Loading'
import images from '../../constants/imagensBase64'
import { usersProfile } from '../../constants/data'

export default function SendFriend() {
  const route = useRoute()
  const navigation = useNavigation()
  const [loadingVisible, setLoadingVisible] = useState(false)


  async function sendInviteFriend() {
    try {
      setLoadingVisible(true)
      const requestAPI = await api.post('/Api/Indicacao', {
        Indicacao: {
          CodigoAssociacao: route.params.codAssociado,
          CpfAssociado: route.params.CPF,
          EmailAssociado: route.params.email,
          NomeAssociado: route.params.name,
          TelefoneAssociado: route.params.phone,
          PlacaVeiculoAssociado: route.params.placa,
          NomeAmigo: route.params.friendName,
          TelefoneAmigo: route.params.friendPhone,
          EmailAmigo: route.params.friendEmail,
          DataCriacao: moment().format('YYYY-MM-DD'),
        },
        Remetente: "romulo.marques@hinovamobile.com.br",
        Copias: []
      })

      setLoadingVisible(false)
      if (requestAPI.data.Sucesso === "Indicacao enviada com sucesso!") {
        return Alert.alert("Obaaa", `Seu amigo ${route.params.friendName}\nfoi indicado com sucesso !`),
          navigation.navigate('Main')
      } else {
        return Alert.alert('Tivemos um probleminha', 'Mas fique tranquilo, ja estamos resolvendo 😉')
      }
    } catch (err) {
      const message =
        err.response && err.response.data
          ? ` Não foi possivel enviar dados para a API. Verique sua conexão. \nErro code: [ ${err} ]`
          : 'Não foi possivel enviar dados para a API.';

      Alert.alert('Ooopsss', message);
      setLoadingVisible(false)
    }
  }

  return (
    <>
      <Loading loadingVisible={loadingVisible} />
      <View style={styles.main}>
        <Text style={styles.title}>Associado</Text>

        <TouchableOpacity
          disabled={true}
          style={styles.defaultButton}
          onPress={() => { }}
        >
          {route.params.photo === 'default'
            ?
            <FontAwesome5 name="user-circle" size={70} style={{ marginHorizontal: 10 }} color="#8489B2" />
            :
            <Image
              source={{ uri: usersProfile.photoProfile }}
              style={styles.defaultProfilePhoto}
            />
          }

          <View style={styles.defaultDetails}>
            <Text style={styles.defaultName}>{`${route.params.name} /#${route.params.codAssociado}`}</Text>
            <Text style={styles.defaultMail}>{route.params.email}</Text>
            <Text style={styles.defaultMail}>{route.params.CPF}</Text>
            <Text style={styles.defaultMail}>{route.params.phone}</Text>
            <Text style={styles.defaultName}>{ }</Text>

            <View style={styles.mainCardMercosul}>
              <View style={styles.mainCardMercosulItem}>
                <Image
                  source={{ uri: images.br }}
                  style={styles.mainCardMercosulIcon}
                  resizeMode={'contain'}
                />
                <Text style={styles.mainCardMercosulCity}>BRASIL</Text>
                <Image
                  source={{ uri: images.br }}
                  style={styles.mainCardMercosulIcon}
                  resizeMode={'contain'}
                />
              </View>
              <Text style={styles.mainText}>{route.params.placa.toUpperCase()}</Text>
            </View>
          </View>

        </TouchableOpacity>
        <Text style={styles.title}>Amigo</Text>
        <TouchableOpacity
          disabled={true}
          style={styles.defaultButton}
        >
          <View style={styles.defaultDetails}>
            <Text style={styles.defaultName}>{route.params.friendName}</Text>
            <Text style={styles.defaultMail}>{route.params.friendEmail}</Text>
            <Text style={styles.defaultMail}>{`${route.params.friendPhone}`}</Text>
          </View>
        </TouchableOpacity>

      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => sendInviteFriend()}
        >
          <Text style={styles.footerText}>Enviar convite</Text>
          <Image
            //source={{ uri: images.arrowWhiteRight }}
            style={styles.footerIcon}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </>

  );
}