import App from 'constants/App';
import Layout from 'constants/Layout';
import {useEffect, useState} from 'react';
import {I18nManager} from 'react-native';

import i18n from 'utility/i18n';
export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // SplashScreen.preventAutoHideAsync();

        if (!App.lang)
          if (Layout.isRTL) {
            i18n.changeLanguage('ar');
          } else {
            i18n.changeLanguage('en');
          }
        else {
          i18n.changeLanguage(App.lang);
        }

        I18nManager.allowRTL(false);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        // SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
