import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GetAllSections} from '../api/Api';
import {ProductList} from '../components/ProductList';
import {ProductListProps} from '../components/ProductList/ProductList';
import {globalColors, globalStyles} from '../theme/appTheme';
import {Navbar} from '../components/Navbar';

export const HomeScreen = () => {
  const [sections, setSections] = useState<ProductListProps[]>([]);

  useEffect(() => {
    const sectionsRequest = GetAllSections();
    setSections(sectionsRequest);
  }, []);

  return (
    <SafeAreaView
      style={{
        ...globalStyles.borderRadius,
        flex: 1,
      }}>
      <FlatList
        style={{display: 'flex', flexDirection: 'column'}}
        data={sections}
        renderItem={({item}) => (
          <ProductList
            items={item.items}
            display={item.display}
            moreBtn={item.moreBtn}
            moreScreen={item.moreScreen}
            moreBtnText={item.moreBtnText}
            title={item.title}
          />
        )}
        ListHeaderComponent={() => <Navbar />}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  FlatList: {
    backgroundColor: globalColors.white,
    marginTop: 10,
    maxHeight: 521,
    borderColor: globalColors.grey1,
    borderWidth: 1,
  },
  moreText: {
    color: globalColors.blue,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
});
