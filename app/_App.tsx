import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from 'screens/Index';
import useCachedResources from 'utility/hooks/useCachedResources';
import useColorScheme from 'utility/hooks/useColorScheme';
function App() {
  const colorScheme = useColorScheme();
  const isLoaded = useCachedResources();
  if (!isLoaded) {
    return null;
  } else
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        />
      </SafeAreaProvider>
    );
}

export default App;
