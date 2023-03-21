/// create private key for storage 100% unique

import {Platform} from 'react-native';
import {AppLanguages} from 'types/App';
import {Storage} from 'utility/helper/Storage';

const platform = Platform.OS;
const lang = Storage.getString('lang') as AppLanguages;
export default {
  platform,
  lang,
};
