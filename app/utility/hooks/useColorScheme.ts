import {ColorSchemeName, useColorScheme as _useColorScheme} from 'react-native';
import {Storage} from 'utility/helper/Storage';

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
export default function useColorScheme(): NonNullable<ColorSchemeName> {
  const isManual = Storage.getString(
    'color_scheme',
  ) as NonNullable<ColorSchemeName>;
  if (isManual) return isManual;
  else return _useColorScheme() as NonNullable<ColorSchemeName>;
}
