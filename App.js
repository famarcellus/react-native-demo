import React from 'react';
import { useInterpret } from "@xstate/react";
import { ScrollView,  View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { LoggedInContext } from './LoggedInContext';
import { LogInMachine } from './LogInMachine';
import { Login } from "./pages/Login/Login";
import commonStyle from './style/common.style';



const App = () => {
  const myService = useInterpret(LogInMachine);

  return (
    <LoggedInContext.Provider value={ myService }>
      <ScrollView style={styles.appContainer} contentContainerStyle={{ alignItems: "center" }}>
        <View style={[commonStyle.elementWidth, { display: "flex", alignItems: "center" }]} contentContainerStyle={{ alignItems: "center" }}>
          <Login />
        </View>
      </ScrollView>
    </LoggedInContext.Provider>
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
