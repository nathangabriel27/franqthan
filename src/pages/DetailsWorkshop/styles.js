import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors, sizes, theme } from '../../constants/theme';


export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.blue1
  },
  header: {
    backgroundColor: colors.red
  },


  main: {
    backgroundColor: colors.white,
    height: '90%',
    width: width,
    //justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  mainHeader: {
    //backgroundColor: colors.red,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,

  },
  mainHeaderLogo: {
    height: 120,
    width: 250,
    marginTop: -60,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,

  },
  mainTitle: {
    marginHorizontal: sizes.small,
    textAlign: 'center',
    color: colors.blue,
    fontSize: sizes.title,
    fontFamily: 'Montserrat-Bold',
  },
  mainSubTitle: {
    marginHorizontal: sizes.medium,
    textAlign: 'justify',
    color: colors.blue,
    fontSize: sizes.subTitle,
    fontFamily: 'Montserrat-Regular',
  },
  mainButton: {
    backgroundColor: colors.blue1,
    width: '90%',
    padding: sizes.medium,
    marginVertical: sizes.small,
    borderRadius: 10,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  mainIcon: {
    height: 25,
    width: 25,
    marginHorizontal: sizes.small,
  },
  mainButtonText: {
    marginHorizontal: sizes.small,
    width: '85%',
    color: colors.white,
    fontSize: sizes.subTitle,
    fontFamily: 'Montserrat-Regular',
  },



})