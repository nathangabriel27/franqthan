import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors, sizes } from '../../constants/theme';

export default StyleSheet.create({
  linearGradient: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    //backgroundColor: colors.red1,
  },
  backButton: {
    zIndex: 9,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: colors.blue1,
  },
  arrowIcon: {
    height: 50,
    width: 40,
    margin: sizes.medium,
  },
  title: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: colors.green,
  },
  drinkTitleIcon: {
    height: 25,
    width: 25,
    margin: sizes.small,
  },
  drinkTitleText: {
    width: '90%',
    marginLeft: '-20%',
    textAlign: 'center',
    paddingVertical: sizes.small,
    fontFamily: 'Nunito-Bold',
    fontSize: sizes.title,
    color: colors.white,
    //backgroundColor: colors.black,
  },

})