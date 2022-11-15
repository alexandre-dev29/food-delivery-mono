/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    './apps/admin-app/app/**/*.{js,ts,jsx,tsx}',
    './apps/admin-app/pages/**/*.{js,ts,jsx,tsx}',
    './apps/admin-app/components/**/*.{js,ts,jsx,tsx}',
    './libs/ui-shared-components/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bgColorWhite: '#F1F1EF',
        blueDark: '#2F414F',
        blueLight: '#3894A3',
        sadGreenL: '#C7DAD4',
      },
    },
  },
  plugins: [],
};
