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
  defaultButton: {

    borderRadius: 15,
    margin: sizes.medium,
    flexDirection: 'row',
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

})