import React, { useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, Text, Image, Dimensions, StatusBar, View } from 'react-native';
import { colors, sizes } from '../../constants/theme';

import images from '../../constants/imagensBase64'
import styles from './styles'

export default function Header(props) {
  const { arrowWhite, title, image64, containerShadow, data } = props
  const { height, width } = Dimensions.get('window');
  const navigation = useNavigation()
  /* 
  useEffect(() => {
    console.log('data', data.scene.descriptor.options);
  }, [])
  
 */
  return (

    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={styles.backButton}
      >
        {
          arrowWhite == true || null || undefined
            ?
            <Image
              source={{ uri: images.arrowLeftWhite }}
              style={styles.arrowIcon}
              resizeMode={'contain'}
            />
            :
            <Image
              source={{ uri: images.arrowLeftYellow }}
              style={styles.arrowIcon}
              resizeMode={'contain'}
            />
        }
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

  );
}
