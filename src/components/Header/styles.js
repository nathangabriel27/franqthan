import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors, sizes } from '../../constants/theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: sizes.medium,
    backgroundColor: colors.blue1,
  },
  backButton: {
    zIndex: 9,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: colors.blue1,
  },
  arrowIcon: {
    width: 20,
    height: 30,
    margin: sizes.medium,
    padding: sizes.medium,
  },
  title: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: colors.green,
  },
  drinkTitleIcon: {
    width: 25,
    height: 25,
    margin: sizes.small,
  },
  drinkTitleText: {
    width: '90%',
    marginLeft: '-20%',
    textAlign: 'center',
    color: colors.white,
    fontSize: sizes.title,
    fontFamily: 'Nunito-Bold',
    paddingVertical: sizes.small,
    //backgroundColor: colors.black,
  },

})