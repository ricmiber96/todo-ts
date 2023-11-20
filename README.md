# React + TypeScript + Vite
- [ X ] Inicializar proyecto con Vite
- [ X ] Añadir linter para TypeScript + React
```
    npx eslint --init
    "Add tsconfig to eslint config file"
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
    }
}

```
- [ X ] Añadir estilos a la App
- [ X ] Listar los items
- [ X ] Poder borrar los items
- [ X ] Marcar los items como completados
- [ X ] Filtrar los items dependiendo de su estado
- [ ] Mostrar el numero total de items
- [ ] Poder borrar todos los items completados
- [ ] Crear un Searchbar
- [ ] Poder editar los items creados
- [ ] Añadir animaciones
- [ ] Pasar a reducer
- [ ] Sincronizar con el backend