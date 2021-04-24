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
    // backgroundColor: colors.red,
    margin: sizes.small,
    padding: sizes.small,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray4,
    fontFamily: 'Montserrat-Regular',
  },


  footer: {
    padding: sizes.small,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButton: {
    backgroundColor: colors.blue1,
    width: '90%',
    padding: sizes.medium,
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
    margin: sizes.medium,
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