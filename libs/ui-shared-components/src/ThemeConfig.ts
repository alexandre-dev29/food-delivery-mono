import { createTheme } from '@nextui-org/react';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
export const LightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      bgColorWhite: '#F1F1EF',
      blueDark: '#2F414F',
      blueLight: '#3894A3',
      sadGreenL: '#C7DAD4',
    },
    fonts: {
      sans: poppins.style.fontFamily,
    },
  },
});

export const DarkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      bgColorWhite: '#2F414F',
      blueDark: '#F1F1EF',
      blueLight: '#3894A3',
      sadGreenL: '#C7DAD4',
    },
    fonts: {
      sans: poppins.style.fontFamily,
    },
  },
});
