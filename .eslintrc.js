module.exports = {
  extends: ['next/core-web-vitals', 'airbnb', 'airbnb-typescript', 'airbnb/hooks', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [2, { useTabs: false }],
    'no-unused-vars': 'error',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'warn',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/no-array-index-key': 'warn',
    'react/jsx-props-no-spreading': [
      1,
      {
        custom: 'ignore',
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/require-default-props': [
      2,
      {
        forbidDefaultForRequired: false,
        functions: 'defaultArguments',
      },
    ],
    'import/extensions': [0, 'ignorePackages'],
  },
}
