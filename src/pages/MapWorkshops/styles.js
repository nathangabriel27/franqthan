import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors, sizes, theme } from '../../constants/theme';


export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    width: width,
    marginTop: -40,
    //position:'absolute'
    alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
  cardName: {
    width: width,
    textAlign: 'center',
    color: colors.white,
    fontSize: sizes.title,
    marginVertical: sizes.large,
    paddingVertical: sizes.large,
    marginHorizontal: sizes.large,
    fontFamily: 'Montserrat-Bold',
  },
  cardDetails: {
    width: width,
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.blue1,
  },
  cardDetailsItens: {
    flex: 1,
    padding: sizes.medium,
  },
  cardDetailsText: {
    padding: sizes.small,
    color: colors.white,
    fontSize: sizes.subTitle,
    marginHorizontal: sizes.small,
    fontFamily: 'Montserrat-Regular',
  },
  cardDetailsPhoto: {

  },
  cardDetailsPhotoCar: {
    width: 210,
    height: 120,
    marginTop: -40,
  },

  mainButtonText: {
    width: '85%',
    color: colors.white,
    fontSize: sizes.subTitle,
    marginHorizontal: sizes.small,
    fontFamily: 'Montserrat-Regular',
  },
  mainIcon: {
    width: 25,
    height: 25,
    marginHorizontal: sizes.small,
  },
})