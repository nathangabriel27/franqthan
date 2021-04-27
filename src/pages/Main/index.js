import React, { useState, useEffect} from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions'

//Context

import styles from './styles';
import images from '../../constants/imagensBase64'
import { car } from '../../constants/data'

export default function Main() {
  const navigation = useNavigation()

  function navigateToWorkshop(props) {
    //console.log('props:',props);
    navigation.navigate('Workshop')
  }
  function navigateToSelectAssociated(props) {
    //console.log('props:',props);
    navigation.navigate('SelectAssociated')
  }

  function navigateToMapWorkshops(props) {
    //console.log('props:',props);
    navigation.navigate('MapWorkshops')
  }


  return (
    <>
      <StatusBar backgroundColor={'#3D4585'} barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Olá</Text>
        <Text style={styles.headerSubtitle}>Nathan Gabriel</Text>
      </View>

      <View style={styles.main}>
        <TouchableOpacity
          style={styles.mainCard}
          onPress={() => navigateToWorkshop()}
        >
          <Image
            source={{ uri: images.workshop }}
            style={styles.mainCardIcon}
            resizeMode={'contain'}
          />
          <Text style={styles.mainCardText}>{`\nOficinas`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainCard}
          onPress={() => navigateToSelectAssociated()}
        >
          <Image
            source={{ uri: images.addFriend }}
            style={styles.mainCardIcon}
            resizeMode={'contain'}
          />
          <Text style={styles.mainCardText}>{`Indicar um\namigo`}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerCard}>
          <Text style={styles.footerCardPlanText}>{`Plano: ${car.plan}`}</Text>
          <TouchableOpacity
            disabled={true}
            style={styles.footerCardItem}
            onPress={() => navigateToMapWorkshops()}
          >
            <Image
              source={require('../../../assets/images/carro-novo-onix.png')}
              style={styles.footerCardIcon}
              resizeMode={'contain'}
            />
            <View style={styles.footerCardDetailsTitle}>
              <Text style={styles.footerCardTitle}>{`${car.name}`}</Text>
              <Text style={styles.footerCardSubtitle}>{`${car.year}`}</Text>
            </View>
            <View style={styles.footerCardDetails}>
              <Text style={styles.footerCardSubtitle}>{`Media de ${car.kmWheelsets}Km/rodados`}</Text>
              <Text style={styles.footerCardSubtitle}>{`Valor fipe: $${car.fipe}`}</Text>
            </View>

          </TouchableOpacity>
        </View>
      </View >
    </>

  );
}