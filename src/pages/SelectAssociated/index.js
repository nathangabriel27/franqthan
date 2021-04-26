import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image,  Text, TouchableOpacity, View} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

//Context
import styles from './styles';

import { usersProfile } from '../../constants/data'

export default function SelectAssociated() {

  const navigation = useNavigation()

  function navigateToCreateAssociated(props) {
    console.log('props navigateToDetailsWorkshop:', props);
    navigation.navigate('CreateAssociated', props)
  }
  function navigateToDataFriend(props) {
    const data = {
      name: usersProfile.name,
      CPF: usersProfile.cpf,
      email: usersProfile.email,
      phone: usersProfile.phone,
      codAssociado: usersProfile.codAssociado,
      placa: usersProfile.placa,
      photo: usersProfile.photoProfile,
    }
    navigation.navigate('DataFriend', data)
  }

  return (
    <>
      <View style={styles.main}>
        <Text style={styles.title}>Selecione um associado </Text>

        <TouchableOpacity
          style={styles.defaultButton}
          onPress={() => navigateToCreateAssociated()}
        >
          <FontAwesome5 name="user-circle" size={60} color="#8489B2" />
          <View style={[styles.defaultDetails, { justifyContent: 'center', alignItems: 'center' }]}>
            <Text style={[styles.defaultName, { textAlign: 'center' }]}>Preencher dados do associado manualmente</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.defaultButton}
          onPress={() => navigateToDataFriend()}
        >
          <Image
            source={{ uri: usersProfile.photoProfile }}
            style={styles.defaultProfilePhoto}
          />
          <View style={styles.defaultDetails}>
            <Text style={styles.defaultName}>{usersProfile.name}</Text>
            <Text style={styles.defaultMail}>{usersProfile.email}</Text>
            <Text style={styles.defaultCodAssociado}>{`#${usersProfile.codAssociado}`}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}