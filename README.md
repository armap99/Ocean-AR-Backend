# Ocean-AR-Backend
API para Ocean AR Hackathon por innovación virtual.

## Dependencies

<details>
<summary>Dependencies </summary>
Express
  
- Istallation 
  
```
npm i express -S
```

Cors
  
- Istallation 
  
```
npm i cors -S
```

Jsonwebtoken
  
- Istallation 
  
```
npm i jsonwebtoken -S
```

Sequelize
  
- Istallation 
  
```
npm i sequelize -S
```

Mysql2
  
- Istallation 
  
```
npm i mysql2 -S
```

</details>


<details>
<summary>DevDependencies </summary>
Nodemon
  
- Installation
  
```
npm install nodemon --save-dev
```

Eslint
  
- Installation
  
```
npm install eslint --save-dev
```

- Configuration file generation
  
```
npm init @eslint/config
```
  
- Eslint rules

```
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
 
Jest
  
- Installation
  
```
npm install jest@26.6.0 --save-dev
```
 
</details>

## Package.json config

```
  "scripts": {
    "start": "node src/index",
    "dev": "nodemon src/index",
    "test": "jest",
    "linter": "node ./node_modules/eslint/bin/eslint.js .",
    "linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix"
  }
```