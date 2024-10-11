module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        "plugin:prettier/recommended",
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'feature-slice-import-manager',
        'unused-imports',
        'import',
    ],
    rules: {
        "unused-imports/no-unused-imports": "error",
        "import/order": [
            "error",
            {
              "groups": [
                "builtin", 
                "external", 
                "internal", 
                "parent", 
                "sibling", 
                "index"
              ],
              "pathGroups": [
                {
                  "pattern": "@/**",
                  "group": "internal",
                  "position": "after"
                }
              ],
              "pathGroupsExcludedImportTypes": ["builtin", "external"],
              "newlines-between": "ignore",
              "alphabetize": {
                "caseInsensitive": true
              }
            }
          ],
        'react/jsx-filename-extension': [2, {
            extensions: [
                '.js',
                '.jsx',
                '.tsx',
            ],
        }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'jsx-quotes': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'to',
                    'data-testid',
                    'name',
                    'alt',
                    'label',
                    'target',
                    'direction',
                    'align',
                    'justify',
                    'testId',
                    'role',
                    'as',
                    'border',
                    'feature'
                ],
            },
        ],
        'max-len': ['error', { ignoreComments: true, code: 120 }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'linebreak-style': 'off',
        'consistent-return': 'off',
        "react/no-array-index-key": 'off',
        'feature-slice-import-manager/check-imports': ['error', { alias: '@' }],
        'feature-slice-import-manager/public-api-imports': [
            'error',
            { 
                alias: '@',
                testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'] 
            }
        ],
        'feature-slice-import-manager/layer-imports': [
            'error',
            { 
                alias: '@',
                ignoreImportPatterns: ['**/storeProvider', '**/testing']
            }
        ],
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
        'react/no-unstable-nested-components': 'warn',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
                'no-plusplus': 'off',
            },
        },
    ],
};
