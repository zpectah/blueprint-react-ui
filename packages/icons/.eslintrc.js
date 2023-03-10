module.exports = {
  "extends": [ "eslint:recommended", "plugin:@typescript-eslint/recommended" ],
  "parser": "@typescript-eslint/parser",
  "plugins": [ "@typescript-eslint" ],
  "root": true,
  "rules": { "no-empty-interface": 0 },
  "env": {
    "jest": true,
    "browser": true,
    "amd": true,
    "node": true
  }
};
