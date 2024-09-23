import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  // Configuração base do ESLint para JavaScript
  js.configs.recommended,

  {
    // Definição dos arquivos que serão analisados
    files: ['**/*.{ts,tsx}'],

    // Opções de linguagem
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parser: typescriptParser,
    },
    
    // Plugins utilizados
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'typescript-eslint': typescriptEslint,
    },

    // Regras personalizadas
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Adicione suas regras do TypeScript aqui, se necessário
    },

    // Ignorar diretórios ou arquivos específicos
    ignores: ['dist'],
  },
];
