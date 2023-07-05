import 'styled-components';
import { defaultTheme } from '../Styles/Theme/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
