import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text>Hello world</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;