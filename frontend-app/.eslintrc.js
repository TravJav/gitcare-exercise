module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // Uncomment the following lines if you're using React:
    // 'plugin:react/recommended',
    // 'plugin:react-hooks/recommended',
  ],
  rules: {
    // Customize to your liking
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': 'warn',
  },
  // Optional React settings
  settings: {
    // Only needed if you're using React
    react: {
      version: 'detect',
    },
  },
};
