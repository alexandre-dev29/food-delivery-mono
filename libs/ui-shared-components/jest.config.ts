/* eslint-disable */
export default {
  displayName: 'ui-shared-components',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': ['@swc/jest', { jsc: { transform: { react: { runtime: 'automatic' } } } }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/ui-shared-components',
};
