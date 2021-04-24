import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors, sizes, theme } from '../../constants/theme';


export default StyleSheet.create({
  main: {
    flex: 1,
    padding: sizes.medium,
  },
  title: {
    marginHorizontal: sizes.medium,
    marginVertical: sizes.medium,

    color: colors.blue,
    fontSize: sizes.text,
    fontFamily: 'Montserrat-Bold',
  },
  mainCardMercosul: {
    margin: sizes.large,
    borderRadius: 15,
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
  mainCardMercosulItem: {
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#2E65DC',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: sizes.small
  },
  mainCardMercosulIcon: {
    width: 30,
    height: 30,
    marginHorizontal: sizes.medium,
  },
  mainCardMercosulCity: {
    margin: sizes.small,
    padding: sizes.small,
    color: colors.white,
    fontFamily: 'Montserrat-Regular',
  },



  mainInput: {
    // backgroundColor: colors.red,
    marginVertical: sizes.large,
    paddingVertical: sizes.large,

    fontFamily: 'Montserrat-Regular',
    fontSize: 50,
    textAlign: 'center',
  },


  footer: {
    padding: sizes.small,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButton: {
    backgroundColor: colors.blue1,
    width: '90%',
    paddingVertical: sizes.medium,
    margin: sizes.medium,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerText: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    marginVertical: sizes.medium,
    color: colors.white,
    fontSize: sizes.text,
    fontFamily: 'Montserrat-Regular',


  },
  footerIcon: {
    zIndex: 2,
    width: 30,
    height: 30,
    marginHorizontal: sizes.medium,

  },








})