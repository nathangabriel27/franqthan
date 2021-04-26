import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors, sizes, theme } from '../../constants/theme';


export default StyleSheet.create({
  main: {
    flex: 1,
    padding: sizes.small,
  },
  title: {
    color: colors.blue,
    fontSize: sizes.text,
    fontFamily: 'Montserrat-Bold',
    marginHorizontal: sizes.medium,
  },
  defaultButton: {
    borderRadius: 15,
    alignItems: 'center',
    margin: sizes.medium,
    flexDirection: 'row',
    padding: sizes.medium,
    justifyContent: 'center',
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
  defaultProfilePhoto: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderRadius: 200,
    borderColor: colors.blue,
    marginHorizontal: sizes.small,
  },
  defaultDetails: {
    flex: 1,
    padding: sizes.small,
  },
  defaultName: {
    color: colors.blue,
    fontSize: sizes.text,
    fontFamily: 'Montserrat-Bold',
    marginHorizontal: sizes.small,
  },
  defaultMail: {
    color: colors.blue,
    fontSize: sizes.text,
    marginHorizontal: sizes.small,
    fontFamily: 'Montserrat-Regular',
  },
  defaultCodAssociado: {
    flex: 1,
    color: colors.blue,
    fontSize: sizes.text,
    fontFamily: 'Montserrat-Bold',
    marginHorizontal: sizes.small,
  },
  footer: {
    padding: sizes.small,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButton: {
    width: '90%',
    borderRadius: 15,
    alignItems: 'center',
    margin: sizes.medium,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: sizes.medium,
    backgroundColor: colors.blue1,
  },
  footerText: {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    color: colors.white,
    fontSize: sizes.text,
    marginVertical: sizes.medium,
    fontFamily: 'Montserrat-Regular',
  },
  footerIcon: {
    zIndex: 2,
    width: 30,
    height: 30,
    marginHorizontal: sizes.medium,

  },


  mainCardMercosul: {
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
    padding: sizes.small,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#2E65DC',
    justifyContent: 'space-between',
  },
  mainCardMercosulIcon: {
    width: 30,
    height: 30,
    marginHorizontal: sizes.medium,
  },
  mainCardMercosulCity: {
    color: colors.white,
    margin: sizes.small,
    padding: sizes.small,
    fontFamily: 'Montserrat-Regular',
  },
  mainText: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: sizes.medium,
    paddingVertical: sizes.large,
    fontFamily: 'Montserrat-Regular',
  },





})