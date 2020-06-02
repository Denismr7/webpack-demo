# Configuración básica de Webpack, loaders y plugins comunes.
1. Instalar webpack y webpack-cli mediante npm:
    - npm install --save-dev webpack webpack-cli
    
2. Crear el archivo webpack.config.js. En este archivo importaremos path:
    - const path = require('path');

3. Crear la configuración básica de webpack mediante module.exports, el cual es un objeto con las siguientes keys:
    - entry: La ruta donde se encuentra el archivo .js principal (por ejemplo. entry: "./src/main.js"). Si se utilizan librerías de terceros puede ser buena idea separarlas del .js principal y tener dos puntos de entrada (por ejemplo. entry: {
        main: "./src/main.js",
        vendor: "./src/vendor.js"
    }, dentro del objeto entry las keys designan el nombre que van a tener los archivos indicados cuando se genere el bundle)
    - output: Output es un objeto donde configuraremos aspectos relacionados con el archivo de salida, estos son:
       - filename: El nombre del archivo final, si tenemos solo un entry, podemos hardcodear el nombre (ej. filename: "main.js") o bien utilizar [name] para que adopte el nombre del archivo original. La primera opción no funcionará con varios archivos de entrada. Además, si añadimos [contentHash], evitaremos conflictos con la caché de los navegadores (ej. filename: "[name].[contentHash].js")
       - path: La ruta donde se ubicarán los archivos generados. Con el objeto path que hemos importado en el primer paso podemos configurarlo de forma sencilla: path: path.resolve(__dirname, "dist"). De esta forma nos creará una carpeta con el nombre de dist en el directorio donde se encuentre webpack.config
    - module: { rules }: En rules tenemos que especificar cómo tiene que actuar webpack cuando encuentre un archivo de un formato concreto. Por ejemplo, en el caso de tener un archivo styles.css y querer que webpack se encargue de él:
        - module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, "css-loader"] // Primero 'css-loader' transforma el CSS en JS, y después el loader del plugin 'mini-css-extract-plugin' se encarga de generar un archivo css con los estilos
            }
           ]
            }
        - En el código del repo se puede encontrar una configuración básica de rules para manejar imágenes, CSS... y añadir o quitar loaders según las necesidades del proyecto. HTML-loader es necesario para que webpack sea capaz de detectar elementos estáticos como imágenes, archivos, etc...
     - plugins: En plugins podemos utilizar html-webpack-plugin para indicar dónde se encuentra nuestro fichero HTML, mini-css-extract-plugin para extraer el CSS del DOM o clean-webpack-plugin para limpiar la carpeta de dist en caso de trabajar con ficheros hasheados. Plugins es un array formado por los distintos plugins que queramos utilizar previamente importados (ej. plugins: [new MiniCSSExtractPlugin({ filename: "styles.[contentHash].css }), new OtroPlugin(), ...]
