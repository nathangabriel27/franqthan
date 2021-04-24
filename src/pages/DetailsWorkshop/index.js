import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, Linking, Text, TouchableOpacity, View, StatusBar, Alert, StyleSheet, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer'


//Context

import styles from './styles';
import { api, http } from '../../services/api'
import Loading from '../../components/Loading'
//import images from '../../components/imagensBase64'

export default function DetailsWorkshop() {
  const route = useRoute()
  const navigation = useNavigation()
  const [loadingVisible, setLoadingVisible] = useState(false)


  useEffect(() => {
    //console.log("DetailsWorkshop route:", route.params.Nome);

  }, [])
  function openMail(props) {

    MailComposer.composeAsync({
      subject: `Preciso da ajuda de vocês ${route.params.Nome}`,
      recipients: [`${props}`],
      body: `Olá\n
      Estou com problemas no meu veiculo e preciso de ajudar.
      `
    })
  }
  function openNumberPhone(props) {
    Linking.openURL(`tel:${props}`)
  }

  return (
    <>
      <View style={styles.container}>

        <View style={styles.main}>
          <View style={styles.mainHeader}>
            <Image
              source={{ uri: `data:image/png;base64,${route.params.Foto}` }}
              style={styles.mainHeaderLogo}
              resizeMode={'contain'}
            />
            <Text style={styles.mainTitle}>{route.params.Nome}</Text>
            <Text style={styles.mainSubTitle}>{route.params.Descricao}</Text>
          </View>

          {route.params.Telefone1 == null || undefined || ''
            ?
            <>
            </>
            :
            <TouchableOpacity
              style={styles.mainButton}
              onPress={() => openNumberPhone(route.params.Telefone1)}
            >
              <Image
                source={require('../../../assets/images/phoneIcon.png')}
                style={styles.mainIcon}
                resizeMode={'contain'}
              />
              <Text style={styles.mainButtonText} numberOfLines={1}>{route.params.Telefone1}</Text>
            </TouchableOpacity>
          }

          {route.params.Telefone2 == null || undefined || ''
            ?
            <>
            </>
            :
            <TouchableOpacity
              style={styles.mainButton}
              onPress={() => openNumberPhone(route.params.Telefone2)}
            >
              <Image
                source={require('../../../assets/images/phoneIcon.png')}
                style={styles.mainIcon}
                resizeMode={'contain'}
              />
              <Text style={styles.mainButtonText} numberOfLines={1}>{route.params.Telefone2}</Text>
            </TouchableOpacity>
          }
          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => { }}
          >
            <Image
              source={require('../../../assets/images/mapMarker.png')}
              style={styles.mainIcon}
              resizeMode={'contain'}
            />
            <Text style={styles.mainButtonText} numberOfLines={1}>{route.params.Endereco}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => openMail(route.params.Email)}
          >
            <Image
              source={require('../../../assets/images/sendMail.png')}
              style={styles.mainIcon}
              resizeMode={'contain'}
            />
            <Text style={styles.mainButtonText} numberOfLines={1}>{route.params.Email}</Text>
          </TouchableOpacity>



        </View>

      </View>

    </>

  );
}