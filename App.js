import React, { useState, useEffect } from 'react';
import Routes from './src/routes/Routes'
import AppLoading from 'expo-app-loading'
import * as Font from "expo-font";

export default function App() {
  const [isLoadingFontComplete, setIsLoadingFontComplete] = useState(false);

  const handleFontsAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        "Gibson-Bold": require("./assets/fonts/Gibson/Gibson-Bold.ttf"),
        "Gibson-Regular": require("./assets/fonts/Gibson/Gibson-Regular.ttf"),
        "Montserrat-Regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
        "Montserrat-Bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
        "Nunito-Bold": require("./assets/fonts/Nunito/Nunito-Bold.ttf"),
        "Nunito-Regular": require("./assets/fonts/Nunito/Nunito-Regular.ttf"),
      })
    ],
      //console.log('Fonte carregada')
    );
  };

  if (!isLoadingFontComplete) {
    return (
      <AppLoading
        startAsync={handleFontsAsync}
        onError={error => console.warn(error)}
        onFinish={() => setIsLoadingFontComplete(true)
        }
      />
    );
  }
  return (
    <Routes />
  );
}

