module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'no-param-reassign': 'off',
    'react/jsx-no-bind': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-newline': [2, { prevent: true }],
    'react/jsx-curly-newline': [
      'error', {
        multiline: 'forbid',
        singleline: 'forbid',
      },
    ],
    'react/jsx-curly-spacing': [2,
      {
        when: 'always',
        children: false,
      },
    ],
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var', 'block', 'block-like'], next: '*' },
    ],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
