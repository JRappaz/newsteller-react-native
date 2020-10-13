import React, {useEffect, useState} from 'react';

import {styles} from './style';

import NewsList from '@components/NewsList';
import Swiper from 'react-native-swiper';

import {fetchCategoriesApi} from '@helpers/APIConnect';
import {View, ActivityIndicator} from 'react-native';

/**
 * Display NewsLists that can be swipped
 */
export default SwipeableNewsList = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch which categories are available
    fetchCategoriesApi(setLoading, setCategories);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <Swiper
          loop={false}
          loadMinimal={true}
          loadMinimalSize={1}
          showsButtons={true}>
          {
            // Adding a void category creates a search NewsList
            ['', ...categories].map((item) => (
              <NewsList
                key={item}
                navigation={navigation}
                searchTerm={item}
                isWithSearch={item == ''}
              />
            ))
          }
        </Swiper>
      )}
    </View>
  );
};
