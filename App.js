import React from 'react';
import { ScrollView,  View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Login } from "./src/pages/Login/Login";
import commonStyle from './src/style/common.style';



const App = () => {

  return (
      <ScrollView style={styles.appContainer} contentContainerStyle={{ alignItems: "center" }}>
        <View style={[commonStyle.elementWidth, { display: "flex", alignItems: "center" }]} contentContainerStyle={{ alignItems: "center" }}>
          <Login />
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: Constants.statusBarHeight + 65,
    paddingHorizontal: 100,
    display: "flex",
    backgroundColor: "#f7f7f7",
  },

});

export default App;
