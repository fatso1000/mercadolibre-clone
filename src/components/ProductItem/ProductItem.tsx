import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {numberWithCommas} from '../../helpers';
import {globalColors} from '../../theme/appTheme';
import {ProductItemProps} from '../../types/types';

export const ProductItem = (props: ProductItemProps) => {
  const {item, display} = props;

  const isGrid = display === 'Grid';
  const flexDirection = isGrid ? 'row' : 'column';
  const container: any = {...styles.container, flexDirection};
  const priceWithComas = numberWithCommas(item.price);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        height: isGrid ? 125 : 150,
        flex: 1,
        width: isGrid ? '100%' : '50%',
      }}>
      <View style={container}>
        <View style={styles.divContainer}>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
        <View style={{flex: 1, padding: 3}}>
          <Text>{item.title}</Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={styles.priceText}>$ {priceWithComas}</Text>
            {item.discount && (
              <Text style={styles.discountText}>{item.discount}% OFF</Text>
            )}
          </View>
          {item.cuotas && <Text style={styles.cuotasText}>{item.cuotas}</Text>}
          {item.envio && (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.cuotasText}>{item.envio.label}</Text>
              {item.envio.full && (
                <Icon name="flash" color={globalColors.green} size={18} />
              )}
              {item.envio.full && (
                <Text
                  style={{
                    ...styles.cuotasText,
                    fontFamily: 'Montserrat-BlackItalic',
                  }}>
                  FULL
                </Text>
              )}
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    borderTopColor: globalColors.grey1,
    borderBottomColor: globalColors.grey1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  priceText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 21,
  },
  cuotasText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: globalColors.green,
  },
  discountText: {
    fontFamily: 'Montserrat-Medium',
    color: globalColors.green,
    fontSize: 14,
    marginLeft: 3,
    marginTop: 2,
  },
  divContainer: {
    width: 100,
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
