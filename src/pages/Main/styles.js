import { Dimensions, StyleSheet, } from 'react-native';
const { height, width } = Dimensions.get('window');
import { colors, sizes, theme } from '../../constants/theme';


export default StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },


  header: {
    height: '15%',
    width: width,
    padding: sizes.medium,
    alignItems: 'flex-start',
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
    elevation: 3,
  },
  headerTitle: {
    color: colors.white,
    padding: sizes.small,
    fontSize: sizes.title,
    marginHorizontal: sizes.medium,
    fontFamily: 'Montserrat-Regular',
  },
  headerSubtitle: {
    color: colors.white,
    padding: sizes.small,
    fontSize: sizes.subTitle,
    fontFamily: 'Montserrat-Bold',
    marginHorizontal: sizes.medium,
  },


  main: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: sizes.small,
    /*    backgroundColor: colors.w, */
  },
  mainCard: {
    width: '40%',
    borderRadius: 15,
    alignItems: 'center',
    padding: sizes.medium,
    justifyContent: 'center',
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
  mainCardIcon: {
    width: 70,
    height: 70,
  },
  mainCardText: {
    color: colors.blue,
    padding: sizes.small,
    fontSize: sizes.subTitle,
    fontFamily: 'Montserrat-Bold',
    marginHorizontal: sizes.medium,
    textAlign: 'center',
  },


  footer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerCard: {
    width: '90%',
    borderRadius: 15,
    margin: sizes.medium,
    backgroundColor: colors.blue1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  footerCardPlanText: {
    color: colors.white,
    padding: sizes.small,
    fontSize: sizes.text,
    fontFamily: 'Montserrat-Bold',
    margin: sizes.medium,
  },
  footerCardItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 15,
  },
  footerCardIcon: {
    width: 200,
    height: 130,
  },
  footerCardDetailsTitle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: sizes.medium,
  },
  footerCardDetails: {
    width: '100%',
    padding: sizes.small,
    justifyContent: 'center',
  },
  footerCardTitle: {
    color: colors.blue,
    fontSize: sizes.title,
    fontFamily: 'Montserrat-Bold',
    paddingHorizontal: sizes.small,
  },
  footerCardSubtitle: {
    color: colors.gray,
    fontSize: sizes.subTitle,
    paddingHorizontal: sizes.small,
    marginHorizontal: sizes.medium,
    fontFamily: 'Montserrat-Regular',
  },



})