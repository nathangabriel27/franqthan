import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors, sizes, theme } from '../../constants/theme';


export default StyleSheet.create({
  main: {
    flex: 1,
    padding: sizes.medium,
  },
  title: {

    color: colors.blue,
    fontSize: sizes.text,
    marginVertical: sizes.medium,
    fontFamily: 'Montserrat-Bold',
    marginHorizontal: sizes.medium,
  },
  mainCardMercosul: {
    borderRadius: 15,
    margin: sizes.large,
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
    alignItems: 'center',
    padding: sizes.small,
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
    margin: sizes.small,
    color: colors.white,
    padding: sizes.small,
    fontFamily: 'Montserrat-Regular',
  },


  mainInput: {
    fontSize: 50,
    textAlign: 'center',
    marginVertical: sizes.large,
    paddingVertical: sizes.large,
    fontFamily: 'Montserrat-Regular',
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
    flexDirection: 'row',
    margin: sizes.medium,
    justifyContent: 'flex-end',
    backgroundColor: colors.blue1,
    paddingVertical: sizes.medium,
  },
  footerText: {
    width: '100%',
    textAlign: 'center',
    color: colors.white,
    fontSize: sizes.text,
    position: 'absolute',
    marginVertical: sizes.medium,
    fontFamily: 'Montserrat-Regular',
  },
  footerIcon: {
    zIndex: 2,
    width: 30,
    height: 30,
    marginHorizontal: sizes.medium,

  },
})