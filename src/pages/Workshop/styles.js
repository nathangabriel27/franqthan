import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors, sizes, theme } from '../../constants/theme';


export default StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#faa'
  },
  header: {
    width: width,
    height: '10%',
    marginTop: -1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: sizes.medium,
    justifyContent: 'center',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: colors.blue1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  headerInput: {
    width: '80%',
    marginBottom: -60,
    borderRadius: 8,
    marginVertical: sizes.medium,
    marginHorizontal: sizes.small,
    padding: sizes.large,
    fontFamily: 'Montserrat-Regular',
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
  headerMap: {
    backgroundColor: colors.white,
    marginBottom: -60,
    borderRadius: 8,
    marginVertical: sizes.medium,
    marginHorizontal: sizes.small,
    padding: sizes.large,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },



  main: {
    marginTop: 40,
    //backgroundColor: colors.green,
    flex: 1,
  },
  mainCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginHorizontal: sizes.medium,
    marginVertical: sizes.small,
    padding: sizes.small,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  mainCardItem: {
    flexDirection: 'row',
  },
  mainCardPhoto: {
    margin: sizes.small,
    // backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    //width: '40%',

  },
  mainCardLogo: {
    width: 140,
    height: 60,
  },
  mainCardDistance: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  mainCardDistanceIcon: {
    width: 50,
    height: 50,
    marginHorizontal: sizes.small,
  },
  mainCardDistanceTitle: {
    marginHorizontal: sizes.small,
    textAlign: 'center',
    color: colors.blue,
    fontSize: sizes.text,
    fontFamily: 'Montserrat-Bold',
  },
  mainCardDistanceText: {
    marginHorizontal: sizes.small,
    textAlign: 'center',
    color: colors.blue,
    fontSize: sizes.text,
    fontFamily: 'Montserrat-Regular',

  },
  mainCardDetails: {
    flex: 1,
    paddingTop: sizes.medium,
    borderTopRightRadius: 20,
    paddingBottom: sizes.small,
    backgroundColor: colors.gray4,
    paddingHorizontal: sizes.small,
  },
  mainCardDetailsTitle: {
    //marginHorizontal: sizes.small,
    textAlign: 'center',
    color: colors.blue,
    fontSize: sizes.title,
    fontFamily: 'Montserrat-Bold',
  },
  mainCardDetailsSubtitle: {
    marginHorizontal: sizes.small,
    textAlign: 'justify',
    color: colors.blue,
    fontSize: sizes.subTitle,
    fontFamily: 'Montserrat-Regular',
  },
  mainCardFooter: {
    borderTopColor: colors.blue,
    borderTopWidth: 1,
    paddingHorizontal: sizes.medium,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainCardFooterText: {
   margin: sizes.small,

   color: colors.blue,
   fontSize: sizes.subTitle,
   fontFamily: 'Montserrat-Regular',
  },



})