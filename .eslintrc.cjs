module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript"
    ],
    "overrides": [
    ],
    "ignorePatterns": [".eslintrc.cjs", "vite.config.ts"],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
      
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
          // allow jsx syntax in js files (for next.js project)
          "quotes": [2, "single", { "avoidEscape": true }],
          // "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
          "jsx-quotes": ["error", "prefer-single"],
          "indent": ["error", 2],
          "react/prop-types": 0
    }
}
