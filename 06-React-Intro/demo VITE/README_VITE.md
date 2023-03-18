# VITE and NEXT

```
https://vitejs.dev/guide/
```

## Importante 

### Babel 
Babel es el transpilador de javascript donde si en su TARGETS tiene asignado el 1% implica que su transpilación hará que nuestro code resultante sea el 99,75% compatible con los navagadores.
Y si el targets lo pasamos al 0.25% es un 100% su compatibilidad.

Recordar que Babel también transpila el CSS en cuanto usamos por ejemplo pre-procesadores como SASS

### WebPack
Para agilizar esa transpilación es que tenemos webpack. Es el empaquetador que automatiza todo el proceso como cuando creamos con el un bundle.

Para configurar nuestro webpack utilizamos el archivo de configuración llamado: webpack.config.js

Hay otras herramientas que hacen lo que hace webpack, así como:
-   SWC (es equivalente a babel + webpack)
-   Parcel 
-   SnowPack
-   esBuild (hace todo también)
-   etc.

Cada una se configura de maneras diferentes

## VITE create app react

### Instroducción
Vite viene a hacer lo que antes y también hace npx create-react-app name-app que en esencia nos prepara un proyecto con las diferentes herramientas de transpilación y empaquetados necesarias y configuradas a modo de que nuestro code corra en su mayoría en todos los navegadores.

### Steps 

Para utilizar VITE debemos seguir los siguientes pasos:

npm create vite@latest my-react-app --template react

```
-> Yes 

-> Select template librería -> React

-> Select lenguaje -> JavaScript
```

Luegos nos paramos en la carpeta de la app creada y corremos:
-   npm i
-   npm run dev

listo!!!

### Or
```
npm init vite@latest

-> nombre
-> tipo
-> etc...
```

### Configuraciones Extras en Vite

Es en el archivo vite.config.js
```js
export default defineConfig({
    plugins: [react[]] // <-- aquí
})
```




Aclaración, así como vite o npx create-react-app también existe nextjs que en velocidad y demás se encuentra en un punto medio entre vite y npx y los node_modules iniciales de cada modelo el más liviano es vite.


Para configurar el webpack de npx create-react-app debemos desempaquetar desde el script eject para luego configurar y luego volver a empaquetar (es decir que es un gran problema configurar en este caso el webpack)

Al correr -> npm run eject 

nos despliega realmente el proyecto

# NEXT 
## NEXT y su uso
Es recomendado cuando vamos a realizar un proyecto de producción fuerte, sólido, grande y pensado para un ambiente de producción.

Debemos considerar su compleja instalación y configuración al momento de utilizar, así como las diferencias de lo que es renderizar en servidor o renderizar en cliente entre otras cosas