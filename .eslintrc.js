module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'spaced-comment': 'warn',
    'no-useless-computed-key': 'error',
    'prefer-destructuring': 'warn',
  },
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
    tftNativeApiCallBackObj: true,
    webkit: true,
  },
};
