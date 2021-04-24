import React, { useState, useEffect } from 'react';
import { Alert, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { colors, sizes} from '../../constants/theme';

export default function Loading(props) {
  const { loadingVisible, mensage } = props
  //const loadingVisible = false
  /* 
    useEffect(() => {
      console.log('loadingVisible', loadingVisible);
    }, []) */

  return (
    <>
      { loadingVisible ?
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#EB9D01" />
          <Text style={styles.text}>Acessando dados ... </Text>
        </View>
        :
        null
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: 'absolute',
    zIndex: 999,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    margin: sizes.medium,
    fontFamily: 'Nunito-Bold',
    fontSize: sizes.title
  }
});