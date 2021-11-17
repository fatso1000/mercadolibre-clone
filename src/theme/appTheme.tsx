import {StyleSheet} from 'react-native';

export const globalColors = {
  white: '#fff',
  grey1: '#ededed',
  grey2: '#ebebeb',
  grey3: '#3d405b',
  blue: '#3483fa',
  black1: '#424242',
  black2: '#333',
  green: '#00a650',
  yellow: '#fff159',
};

export const globalStyles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: globalColors.black1,
  },
  borderRadius: {
    borderRadius: 8,
  },
  shadow1: {
    flex: 1,
    borderRadius: 0,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 0.1,
    elevation: 10,
    backgroundColor: '#0000', // invisible color
  },
  fontFamiliy: {fontFamily: 'STIXTwoText-VariableFont_wght'},
  background: {backgroundColor: globalColors.grey3},
  globalMargin: {paddingHorizontal: 8},
});
