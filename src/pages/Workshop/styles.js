import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors, sizes, theme } from '../../constants/theme';


export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
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
    borderRadius: 8,
    marginBottom: -60,
    padding: sizes.large,
    marginVertical: sizes.medium,
    marginHorizontal: sizes.small,
    backgroundColor: colors.white,
    fontFamily: 'Montserrat-Regular',

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
    borderRadius: 8,
    marginBottom: -60,
    padding: sizes.large,
    marginVertical: sizes.medium,
    marginHorizontal: sizes.small,
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



  main: {
    flex: 1,
    marginTop: 40,
  },
  mainCard: {
    borderRadius: 20,
    padding: sizes.small,
    marginVertical: sizes.small,
    backgroundColor: colors.white,
    marginHorizontal: sizes.medium,

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
    alignItems: 'center',
    justifyContent: 'center',
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
    color: colors.blue,
    textAlign: 'center',
    fontSize: sizes.text,
    fontFamily: 'Montserrat-Bold',
    marginHorizontal: sizes.small,
  },
  mainCardDistanceText: {
    color: colors.blue,
    textAlign: 'center',
    fontSize: sizes.text,
    marginHorizontal: sizes.small,
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
    color: colors.blue,
    textAlign: 'center',
    fontSize: sizes.title,
    fontFamily: 'Montserrat-Bold',
  },
  mainCardDetailsSubtitle: {
    color: colors.blue,
    textAlign: 'justify',
    fontSize: sizes.subTitle,
    marginHorizontal: sizes.small,
    fontFamily: 'Montserrat-Regular',
  },
  mainCardFooter: {
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: colors.blue,
    paddingHorizontal: sizes.medium,
  },
  mainCardFooterText: {
    color: colors.blue,
   margin: sizes.small,
   fontSize: sizes.subTitle,
   fontFamily: 'Montserrat-Regular',
  },

})