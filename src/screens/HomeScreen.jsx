import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import fetchData from '../api/MainAPI';

const HomeScreen = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log('ioioioi');
    try {
      const response = await axios.get(
        'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json',
      );
      console.log(response);
      //return response;
    } catch (error) {
      console.log(error);
      //return response;
    }
  };

  return (
    <View>
      <Text style={{color: 'red'}}>Text</Text>
    </View>
  );
};

export default HomeScreen;
