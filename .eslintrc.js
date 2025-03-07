module.exports = {
    "env": {
    "react-native/react-native": true,
    "jest": true
    },
    "parserOptions": {
    "ecmaFeatures": {
    "jsx": true
    }
    },
    "settings": {
    "react": {
    "version": "16"
    }
    },
    "globals": {
    "it": true
    },
    "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "react-native",
    "prettier",
    "prettier/react"
    ],
    "plugins": [
    "react",
    "react-native",
    "prettier",
    "jest"
    ],
    "rules": {
    "prettier/prettier": [
    "error",
    {
    "printWidth": 100,
    "semi": false,
    "singleQuote": true,
    "trailingComma": "none"
    }
    ],
    "no-use-before-define": 0,
    "class-methods-use-this": 0,
    "react/prefer-stateless-function": 0,
    "react/no-did-mount-set-state": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-closing-tag-location": 2,
    "react-native/no-color-literals": 0,
    "import/no-commonjs": 0,
    "import/no-nodejs-modules": 0,
    "import/no-unresolved": 0,
    "import/no-namespace": 0
    }
    }