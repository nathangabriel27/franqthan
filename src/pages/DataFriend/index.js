import React, { useRef, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, TextInput, Text, TouchableOpacity, View, KeyboardAvoidingView,  TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';

//Context
import styles from './styles';
import images from '../../constants/imagensBase64'


export default function CreateAssociated() {
  const route = useRoute()
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const emailRef = useRef()
  const [phone, setPhone] = useState('')
  const phoneRef = useRef()


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
       navigation.navigate('SendFriend', data)
  }

  function regexPhone(text) {
    let reg = text.replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1)$2') 
    .replace(/(\d{5})(\d)/, '$1 - $2')
    .replace(/( - \d{4})\d+?$/, '$1')
    setPhone(reg)
  }
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      enabled={Platform.OS === 'ios'}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        >
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
              onChangeText={(text) => regexPhone(text)}
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