import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: { globals: globals.browser },
  },
  {
    // ESLint rules for TypeScript
    // rules: {
    //   '@typescript-eslint/no-explicit-any': 'off', // Allow usage of `any`
    //   '@typescript-eslint/explicit-module-boundary-types': 'off', // Disallow specifying return types
    //   '@typescript-eslint/ban-ts-ignore': 'off', // Allow `@ts-ignore` directive
    // },
    ignores: ['node_modules/', 'build/'],
  },
  tseslint.configs.recommended,
])
