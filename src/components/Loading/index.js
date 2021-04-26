import React, { useState, useEffect } from 'react';
import { Dimensions, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../constants/theme';

const { height, width } = Dimensions.get('window');
export default function Loading(props) {

  const { loadingVisible, mensage } = props

  return (
    <>
      { loadingVisible ?
        <View style={styles.container}>
          <ActivityIndicator size="large" color={colors.blue} />
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
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  text: {
    color: colors.white,
    margin: sizes.medium,
    fontFamily: 'Montserrat-Bold',
    fontSize: sizes.title
  }
});