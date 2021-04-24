import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors, sizes, theme } from '../../constants/theme';


export default StyleSheet.create({
  main: {
    flex: 1,
    padding: sizes.small,
  },
  title: {
    marginHorizontal: sizes.medium,
    color: colors.blue,
    fontSize: sizes.text,
    fontFamily: 'Montserrat-Bold',
  },
  mainCard: {
    margin: sizes.medium,
    borderRadius: 15,
    padding: sizes.medium,
    backgroundColor: colors.white,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  mainInput: {

  },




  footer: {

  },
  footerButton: {

  },
  footerText: {

  },
  footerIcon: {

  },






  defaultProfilePhoto: {
    width: 90,
    height: 90,
    marginHorizontal: sizes.small,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: colors.blue,
  },
  defaultDetails: {
    flex: 1,
    padding: sizes.small,
  },
  defaultName: {
    marginHorizontal: sizes.small,
    color: colors.blue,
    fontSize: sizes.text,
    fontFamily: 'Montserrat-Bold',
  },
  defaultMail: {
    marginHorizontal: sizes.small,
    color: colors.blue,
    fontSize: sizes.text,
    fontFamily: 'Montserrat-Regular',
  },
  defaultCodAssociado: {
    flex: 1,
    marginHorizontal: sizes.small,
    color: colors.blue,
    fontSize: sizes.text,
    fontFamily: 'Montserrat-Bold',
  },






})