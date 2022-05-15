# Ocean-AR-Backend
API para Ocean AR Hackathon por innovación virtual.

## Dependencies

<details>
<summary>Dependencies </summary>
Installation 
  
```bash
npm i express cors jsonwebtoken sequelize mysql2 -S
```

</details>


<details>
<summary>DevDependencies </summary>  
Installation
  
```bash
npm install nodemon eslint jest@26.6.0 --save-dev
```

- Configuration file generation
  
```
npm init @eslint/config
```
  
- Eslint rules

```json
{
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "standard"
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "no-unused-vars": "off",
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"]
    }
}
```

</details>

## Package.json config

```json
  "scripts": {
    "start": "node src/index",
    "dev": "nodemon src/index",
    "test": "jest",
    "linter": "node ./node_modules/eslint/bin/eslint.js .",
    "linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix"
  }
``` 