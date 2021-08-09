import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import codePush from 'react-native-code-push';

const App = () => {
  const handlePress = () => {
    codePush.sync({
      updateDialog: codePush.DEFAULT_UPDATE_DIALOG,
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text>Hello world</Text>
        <Text>update codepush atualizado</Text>

        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text>Install updates</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 20,
    borderWidth: 1,
  },
});

export default codePush(App);
