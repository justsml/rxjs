module.exports = {
  extends: [
    'airbnb-typescript/base',
    'plugin:jest/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:sonarjs/recommended',
    'plugin:functional/currying',
    'plugin:functional/external-recommended',
    'plugin:functional/recommended',
    'plugin:functional/stylistic',
  ],
  settings: {
    next: {
      rootDir: ['src/*/', 'packages/*/'],
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  plugins: ['jest', '@typescript-eslint', 'import', 'sonarjs', 'functional'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc', '__fixtures__', '**/*.test.ts'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'eol-last': ['error', 'always'],
    'function-paren-newline': [0],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true, // Since lambdas have aws-sdk we don't need to package it
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_' }, // TS will sometimes demand you flesh out arguments.  If they are intentionally unused, prefix with '_'
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
      },
    ],
    'consistent-return': 'off',
    '@typescript-eslint/return-await': 'off',
    // 'no-console': 2,
    'no-underscore-dangle': 'off',
    'jest/no-mocks-import': 'off',
    'jest/valid-title': 'off',
    'jest/valid-expect': 'off',
    'jest/no-done-callback': 'off',
    quotes: [2, 'single', { avoidEscape: true }],
    'import/order': [
      'error',
      {
        // Guide: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
        groups: [
          'external',
          'builtin',
          'internal',
          'sibling',
          'parent',
          'index',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        warnOnUnassignedImports: true,
      },
    ],
    'sonarjs/cognitive-complexity': ['error', 15],
    'functional/functional-parameters': [
      'error',
      {
        allowRestParameter: true,
        enforceParameterCount: false,
      },
    ],
    'functional/no-return-void': 'off',
    'functional/no-conditional-statement': 'off',
    'functional/no-try-statement': 'off',
    'functional/no-throw-statement': 'off',
    'functional/prefer-readonly-type': 'off',
    'functional/no-expression-statement': 'off',
    // 'functional/no-expression-statement': [
    //   'error',
    //   {
    //     ignorePattern: ['^console.', '^resolve', '^reject'],
    //   },
    // ],
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  },
  overrides: [
    {
      files: [
        'src/handlers/**/*.ts',
        'src/io/**/*.ts',
        'src/test/*.ts',
        'src/utiliies/io/**/*.ts',
      ],
      rules: {
        'functional/no-expression-statement': 'off',
        'functional/no-return-void': 'off',
      },
    },
  ],
};
