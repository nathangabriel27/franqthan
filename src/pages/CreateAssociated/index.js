import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, TextInput, Text, TouchableOpacity, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';

//Context
import styles from './styles';
import images from '../../constants/imagensBase64'

export default function CreateAssociated() {
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [CPF, setCPF] = useState('')
  const CPFRef = useRef()
  const [email, setEmail] = useState('')
  const emailRef = useRef()
  const [phone, setPhone] = useState('')
  const phoneRef = useRef()
  const [codAssociado, setCodAssociado] = useState()
  const codAssociadoRef = useRef()

  function navigateToMercosul(props) {
    const data = {
      name: name,
      CPF: CPF,
      email: email,
      phone: phone,
      codAssociado: parseInt(codAssociado),
    }
    navigation.navigate('Mercosul', data)
  }
  function regexCPF(text) {
    let reg = text.replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
    setCPF(reg)
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
        style={{ flex: 1 }}>

        <View style={styles.main}>
          <Text style={styles.title}>Preencha os dados do associado</Text>
          <View style={styles.mainCard}>
            <TextInput
              style={styles.mainInput}
              autoCorrect={false}
              placeholder="Nome"
              placeholderTextColor='#aaa'
              autoCapitalize="words"
              keyboardType="default"
              returnKeyType={'next'}
              value={name}
              onChangeText={(text) => setName(text)}
              onSubmitEditing={() => CPFRef.current.focus()}
            />
            <TextInput
              style={styles.mainInput}
              autoCorrect={false}
              placeholder="CPF"
              placeholderTextColor='#aaa'
              autoCapitalize="words"
              keyboardType="phone-pad"
              returnKeyType={'next'}
              value={CPF}
              ref={CPFRef}
              onChangeText={(text) => regexCPF(text)}
              onSubmitEditing={() => emailRef.current.focus()}
            />
            <TextInput
              style={styles.mainInput}
              autoCorrect={false}
              placeholder="Email"
              placeholderTextColor='#aaa'
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType={'next'}
              value={email}
              ref={emailRef}
              onChangeText={(text) => setEmail(text)}
              onSubmitEditing={() => phoneRef.current.focus()}
            />
            <TextInput
              style={styles.mainInput}
              autoCorrect={false}
              placeholder="Telefone"
              placeholderTextColor='#aaa'
              autoCapitalize="words"
              keyboardType="phone-pad"
              returnKeyType={'next'}
              value={phone}
              ref={phoneRef}
              onChangeText={(text) => regexPhone(text)}
              onSubmitEditing={() => codAssociadoRef.current.focus()}
            />
            <TextInput
              style={styles.mainInput}
              autoCorrect={false}
              placeholder="Codigo associado"
              placeholderTextColor='#aaa'
              autoCapitalize="words"
              keyboardType="phone-pad"
              returnKeyType={'send'}
              value={codAssociado}
              ref={codAssociadoRef}
              onChangeText={(text) => setCodAssociado(text)}
              onSubmitEditing={() => navigateToMercosul()}
            />
          </View>

        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => navigateToMercosul()}
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