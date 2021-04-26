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
  mainCard: {
    borderRadius: 15,
    margin: sizes.medium,
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
    margin: sizes.small,
    padding: sizes.small,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray4,
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
    margin: sizes.medium,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: sizes.medium,
    backgroundColor: colors.blue1,
  },
  footerText: {
    width: '100%',
    textAlign: 'center',
    color: colors.white,
    position: 'absolute',
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

})