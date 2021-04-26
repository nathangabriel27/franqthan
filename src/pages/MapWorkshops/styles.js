import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors, sizes, theme } from '../../constants/theme';


export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.blue1
  },
  calloutName: {
    fontSize: sizes.title,
    fontFamily: 'Montserrat-Bold',
  },
  calloutText: {

    fontSize: sizes.title,
    fontFamily: 'Montserrat-Regular',
  },

  cardCar: {
    backgroundColor: colors.blue,
    width: width,
    marginTop: -40,
    //position:'absolute'
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardName: {
    marginVertical: sizes.large,
    paddingVertical: sizes.large,
    marginHorizontal: sizes.large,
    width: width,
    textAlign: 'center',
    color: colors.white,
    fontSize: sizes.title,
    fontFamily: 'Montserrat-Bold',
  },
  cardDetails: {
    backgroundColor: colors.blue1,
    width: width,
    flexDirection: 'row',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  cardDetailsItens: {
    flex: 1,
    padding: sizes.medium,
  },
  cardDetailsText: {

    marginHorizontal: sizes.small,
    padding: sizes.small,
    color: colors.white,
    fontSize: sizes.subTitle,
    fontFamily: 'Montserrat-Regular',
  },
  cardDetailsPhoto: {

  },
  cardDetailsPhotoCar: {
    height: 120,
    width: 210,
    //position: 'absolute',
    marginTop: -40,
    // backgroundColor: colors.red,

  },

  mainButtonText: {
    marginHorizontal: sizes.small,
    width: '85%',
    color: colors.white,
    fontSize: sizes.subTitle,
    fontFamily: 'Montserrat-Regular',
  },
  mainIcon: {
    height: 25,
    width: 25,
    marginHorizontal: sizes.small,
  },


})