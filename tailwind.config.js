/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    './apps/admin-app/app/**/*.{js,ts,jsx,tsx}',
    './apps/admin-app/pages/**/*.{js,ts,jsx,tsx}',
    './apps/admin-app/components/**/*.{js,ts,jsx,tsx}',
    './libs/ui-shared-components/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
