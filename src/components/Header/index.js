import React, { useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, Text, Image, Dimensions, StatusBar, View } from 'react-native';
import { colors, sizes } from '../../constants/theme';

import images from '../../constants/imagensBase64'
import styles from './styles'

export default function Header(props) {
  const { height, width } = Dimensions.get('window');
  const navigation = useNavigation()

  const { title, image64, borderRadius, data } = props
  /* 
  useEffect(() => {
    console.log('data', data.scene.descriptor.options);
  }, [])
  
 */
  return (
    <>
      <StatusBar backgroundColor={colors.blue1} barStyle="light-content" />
      <View style={[styles.container, { borderBottomRightRadius: borderRadius, borderBottomLeftRadius: borderRadius, }]}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.backButton}
        >
          <Image
            source={{ uri: images.arrowWhite }}
            style={styles.arrowIcon}
            resizeMode={'contain'}
          />
        </TouchableOpacity>

        <View style={styles.title}>
          {image64 == undefined || null
            ?
            <></>
            :
            <Image
              source={{ uri: image64 }}
              style={styles.drinkTitleIcon}
              resizeMode={'contain'}
            />
          }
          <Text style={styles.drinkTitleText} numberOfLines={1}>{title}</Text>
        </View>

      </View>
    </>
  );
}
