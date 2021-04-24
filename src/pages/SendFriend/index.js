import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, TextInput, Text, TouchableOpacity, View, StatusBar, Alert, FlatList, Platform, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


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

  useEffect(() => {
    console.log('data', route.params);
  }, [])


  function navigateToDetailsWorkshop(props) {
    console.log('props navigateToDetailsWorkshop:', props);
    navigation.navigate('DetailsWorkshop', props)
  }


  return (
    <>
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
          style={styles.defaultButton}
          onPress={() => { }}
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
          onPress={() => navigateToMercosul()}
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