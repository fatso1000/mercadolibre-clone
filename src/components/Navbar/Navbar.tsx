import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalColors, globalStyles} from '../../theme/appTheme';

export const Navbar = () => {
  const leftButton = (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={{width: 70, height: 50, marginLeft: 10, marginTop: 5}}>
        <Image
          source={{
            uri: 'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.15.2/mercadolibre/logo__small@2x.png',
          }}
          style={{height: '75%', width: '75%'}}
        />
      </View>
    </TouchableOpacity>
  );
  const rightButton = (
    <TouchableOpacity activeOpacity={0.6}>
      <View
        style={{display: 'flex', flexDirection: 'row', width: 100, height: 50}}>
        <Icon name="menu-outline" color={globalColors.black2} size={43} />
        <Icon name="cart-outline" color={globalColors.black2} size={43} />
      </View>
    </TouchableOpacity>
  );
  const title = (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={{display: 'flex', marginRight: 30}}>
        <TextInput
          placeholder="Estoy buscando..."
          placeholderTextColor={globalColors.grey2}
          style={styles.textInput}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flex: 1,
        ...globalStyles.shadow1,
      }}>
      <NavigationBar
        leftButton={leftButton}
        rightButton={rightButton}
        tintColor={globalColors.yellow}
        title={title}
        style={{
          height: 50,
          borderBottomColor: globalColors.grey1,
          borderBottomWidth: 1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.white,
    fontSize: 16,
    color: globalColors.black2,
    fontFamily: 'Montserrat-Medium',
    maxWidth: 200,
    width: 200,
    height: 36,
    borderRadius: 4,
  },
});
