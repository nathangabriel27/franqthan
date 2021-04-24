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

export default function SelectAssociated() {
  const route = useRoute()
  const navigation = useNavigation()
  const [loadingVisible, setLoadingVisible] = useState(false)



  useEffect(() => {

  }, [])


  function navigateToCreateAssociated(props) {
    console.log('props navigateToDetailsWorkshop:', props);
    navigation.navigate('CreateAssociated', props)
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
          onPress={() => { }}
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