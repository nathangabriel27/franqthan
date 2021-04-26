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
  header: {
    backgroundColor: colors.red
  },


  main: {
    width: width,
    height: '90%',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: colors.white,
  },
  mainHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  mainHeaderLogo: {
    width: 250,
    height: 120,
    marginTop: -60,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
   // elevation: 3,

  },
  mainTitle: {
    textAlign: 'center',
    color: colors.blue,
    fontSize: sizes.title,
    fontFamily: 'Montserrat-Bold',
    marginHorizontal: sizes.small,
  },
  mainSubTitle: {
    color: colors.blue,
    textAlign: 'justify',
    fontSize: sizes.subTitle,
    marginHorizontal: sizes.medium,
    fontFamily: 'Montserrat-Regular',
  },
  mainButton: {
    width: '90%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: sizes.medium,
    marginVertical: sizes.small,
    backgroundColor: colors.blue1,
  },
  mainIcon: {
    width: 25,
    height: 25,
    marginHorizontal: sizes.small,
  },
  mainButtonText: {
    width: '85%',
    color: colors.white,
    fontSize: sizes.subTitle,
    marginHorizontal: sizes.small,
    fontFamily: 'Montserrat-Regular',
  },
})