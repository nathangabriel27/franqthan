import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, TextInput, Text, TouchableOpacity, View } from 'react-native';
import { Foundation } from '@expo/vector-icons';

//Context
import styles from './styles';
import images from '../../constants/imagensBase64'


export default function Mercosul() {
  const route = useRoute()
  const navigation = useNavigation()


  const [placa, setPlaca] = useState('')

  function navigateToDataFriend(props) {
    const data = {
      name: route.params.name,
      CPF: route.params.CPF,
      email: route.params.email,
      phone: route.params.phone,
      codAssociado: route.params.codAssociado,
      photo: 'default',
      placa: placa,
    }

    navigation.navigate('DataFriend', data)
  }


  return (
    <>
      <View style={styles.main}>
        <Text style={styles.title}>Preencha o numero da placa do associado</Text>

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
          <TextInput
            style={styles.mainInput}
            autoCorrect={false}
            placeholder="UAI2A20"
            placeholderTextColor='#aaa'
            autoCapitalize="characters"
            keyboardType="default"
            returnKeyType={'send'}
            value={placa}
            onChangeText={(text) => setPlaca(text)}
            maxLength={7}
            onSubmitEditing={() => navigateToDataFriend()}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigateToDataFriend()}
        >
          <Text style={styles.footerText}>Próximo</Text>
          <Image
            source={{ uri: images.arrowWhiteRight }}
            style={styles.footerIcon}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}