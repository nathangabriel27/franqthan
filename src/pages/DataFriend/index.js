import React, { useRef, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, TextInput, Text, TouchableOpacity, View, KeyboardAvoidingView, Alert, TouchableWithoutFeedback, Keyboard, Platform, ScrollView } from 'react-native';
import { Foundation } from '@expo/vector-icons';

//Context
import styles from './styles';
import { api, http } from '../../services/api'
import Loading from '../../components/Loading'
import images from '../../constants/imagensBase64'
import { usersProfile } from '../../constants/data'

export default function CreateAssociated() {
  const route = useRoute()
  const navigation = useNavigation()
  const [loadingVisible, setLoadingVisible] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const emailRef = useRef()
  const [phone, setPhone] = useState('')
  const phoneRef = useRef()




  useEffect(() => {

  }, [])


  function navigateToSendFriend(props) {
    const data = {
      name: route.params.name,
      CPF: route.params.CPF,
      email: route.params.email,
      phone: route.params.phone,
      codAssociado: route.params.codAssociado,
      placa: route.params.placa,
      photo: route.params.photo,
      friendName: name,
      friendEmail: email,
      friendPhone: phone,
    }
    //console.log('data navigateToSendFriend:', data);
    navigation.navigate('SendFriend', data)
  }


  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      enabled={Platform.OS === 'ios'}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>

        <View style={styles.main}>
          <Text style={styles.title}>Preencha os dados do amigo</Text>
          <View style={styles.mainCard}>
            <TextInput
              style={styles.mainInput}
              autoCorrect={false}
              placeholder="Nome do amigo"
              placeholderTextColor='#aaa'
              autoCapitalize="words"
              keyboardType="default"
              returnKeyType={'next'}
              value={name}
              onChangeText={(text) => setName(text)}
              onSubmitEditing={() => phoneRef.current.focus()}
            />
            <TextInput
              style={styles.mainInput}
              autoCorrect={false}
              placeholder="phone do amigo"
              placeholderTextColor='#aaa'
              autoCapitalize="words"
              keyboardType="number-pad"
              returnKeyType={'next'}
              value={phone}
              ref={phoneRef}
              onChangeText={(text) => setPhone(text)}
              onSubmitEditing={() => emailRef.current.focus()}
            />
            <TextInput
              style={styles.mainInput}
              autoCorrect={false}
              placeholder="Email do amigo"
              placeholderTextColor='#aaa'
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType={'next'}
              value={email}
              ref={emailRef}
              onChangeText={(text) => setEmail(text)}
              onSubmitEditing={() => navigateToSendFriend()}
            />

          </View>

        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigateToSendFriend()}
          >
            <Text style={styles.footerText}>Próximo</Text>
            <Image
              source={{ uri: images.arrowWhiteRight }}
              style={styles.footerIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback >

  );
}