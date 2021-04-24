import React, { useContext, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, TextInput, Text, TouchableOpacity, View, StatusBar, Alert, FlatList, Platform, ScrollView } from 'react-native';
import { Foundation } from '@expo/vector-icons';

//Context
import styles from './styles';
import { api, http } from '../../services/api'
import Loading from '../../components/Loading'
import images from '../../constants/imagensBase64'
import { usersProfile } from '../../constants/data'

export default function DataFriend() {
  const route = useRoute()
  const navigation = useNavigation()
  const [loadingVisible, setLoadingVisible] = useState(false)



  useEffect(() => {

  }, [])


  function navigateToDetailsWorkshop(props) {
    console.log('props navigateToDetailsWorkshop:', props);
    navigation.navigate('DetailsWorkshop', props)
  }


  return (
    <>
      <View style={styles.main}>
        <Text style={styles.title}>DataFriend</Text>

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
        <Text style={styles.title}>Preencher dados de associado manualmente</Text>
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