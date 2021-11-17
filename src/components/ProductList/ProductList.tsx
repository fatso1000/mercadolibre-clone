import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ProductItem} from '../../components/ProductItem';
import {globalColors, globalStyles} from '../../theme/appTheme';
import {Product} from '../../types/types';
import Icon from 'react-native-vector-icons/Ionicons';

export interface ProductListProps {
  title?: string;
  moreBtn?: boolean;
  moreScreen?: string;
  moreBtnText?: string;
  items: Product[];
  display: 'Grid' | 'Column';
}

export const ProductList = (props: ProductListProps) => {
  const {items, moreBtn, moreScreen, title, moreBtnText, display} = props;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!items) return;
    setProducts(items);
  }, [items]);

  const renderListHeader = () => {
    return (
      <View>
        <Text
          style={{
            ...globalStyles.title,
            marginVertical: 10,
            marginHorizontal: 10,
          }}>
          {title}
        </Text>
      </View>
    );
  };

  const renderListFooter = () => {
    return (
      <TouchableOpacity activeOpacity={0.75}>
        <View style={styles.footer}>
          <Text style={styles.moreText}>
            {moreBtnText ? moreBtnText : 'Ver mas'}
          </Text>
          <Icon
            name="chevron-forward-outline"
            color={globalColors.blue}
            style={styles.moreIcon}
            size={20}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        ...globalStyles.globalMargin,
      }}>
      {products && products.length > 0 && (
        <FlatList
          style={{...globalStyles.borderRadius, ...styles.FlatList}}
          data={products}
          renderItem={item => (
            <ProductItem display={display} item={item.item} />
          )}
          keyExtractor={item => item.title}
          ListHeaderComponent={title ? () => renderListHeader() : undefined}
          ListFooterComponent={moreBtn ? () => renderListFooter() : undefined}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  FlatList: {
    flex: 1,
    backgroundColor: globalColors.white,
    marginTop: 10,
    borderColor: globalColors.grey1,
    borderWidth: 1,
  },
  moreText: {
    color: globalColors.blue,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  footer: {
    marginVertical: 10,
    height: 23,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moreIcon: {
    paddingRight: 10,
  },
});
