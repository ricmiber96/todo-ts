module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "plugin:react/recommended",
        "standard-with-typescript"
    ],
    overrides: [
    ],
    ignorePatterns:[".eslintrc.cjs", "vite.config.ts"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      
    },
    plugins: [
        "react"
    ],
    rules: {
        //   "react/react-in-tsx-scope": "off",
        //   "quotes": [4, "single", { "avoidEscape": true }],
        //   //"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        //   "jsx-quotes": ["error", "prefer-single"],
        //   "indent": ["error", 2],
        //   "semi": ["error", "never"],
        //   "react/prop-types": 0
        'react/react-in-jsx-scope': 'off',
        'semi': ['error', 'never'], // Remove semicolons
        'quotes': ['error', 'single'], // Use single quotes
        'react/prop-types': 'off', // Disable prop-types since TypeScript handles this
    }
}
