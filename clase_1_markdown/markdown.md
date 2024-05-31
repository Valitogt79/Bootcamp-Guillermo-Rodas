# [base del conocimiento](https://undefinedshell.notion.site/Base-de-conocimientos-bee4ebe13aa94006a6ad5e3b9d501720)


## Comando de terminal

- pwd -- **muestra la ruta actual**
- date -- **Muestra la fecha y hora actual del sistema**
- uptime -- **Muestra el tiempo transcurrido desde que se inició el equipo**
- cal -- **Muestra un calentario del mes actual**
- df -- **Muestra el espacio libre actual del disco duro**
- whoami -- **Muestra el nombre del usuario actual**
- ls -- **Listar Directorio**
- cd -- **Permite navegar entre carpetas**
- mkdir -- **Crea una nueva carpeta**
- cp -r -- **Nos permite cop[iar una carpeta dada a una ruta inicial y una ruta final**
- rm -r -- **Nos permite eliminar una carpeta**
- touch -- **Crea un archivo nuevo dada la ruta y/o el nombre**
  ```
  touch <nombre del archivo>
  ```
- cat **Imprime el contenido de un archivo**
- cp **Permite copiar un archivo**
- mv **nos permite mover un archivo, tambien es utilizado para renombrar un archivo**
- Ctrl + c **cancela el comando actual o si la terminal no responde**
- Ctrl + u **Permite borrar la linea actual que estamos escribiendo**
- Ctrl + w **Permite eliminar la ultima palabrade lo que se esta escribiendo**
- ctrl + a **permite seleccionar todo el texto y/o movernos al inicio o al final de lo estamos escribiendo**


## Comandos Alias para la terminal

Un alias es una abreviatura  o nombre alterno que se utiliza para refgerirse a un comando en el sistema.
    ```
    alias findd = "ls ~/ | grep $1"
    ```

## Practica

1. Vamos a crear una pequeña CV en [**Dillinger1**](https://dillinger.io/)
2. Luego vamos a copiar dicho contenido y crearemos un nuevo archivo Markdown en nuestra carpeta de Markdown
3. Finalmente haremos uso de 11ty para generar el HTML de dicho Markdown.
    ```
      npx @11ty/eleventy -- serve
    ```

## Ejercicio

**Crear un Github Profile README**
1. Este debe tener una pequeña descripción tuya tipo CV.
Añade una tabla en Markdown (Obviamente) con al menos 5 comandos de la
Terminal que hayas aprendido, de forma que tenga nombre del comando y
descripción en columnas separadas.
2. Añade una sección con al menos 2 comandos alias que te parezcan útiles
incluyendo columna de descripción.
3. (Opcional) Clona tu repositorio y ejecuta 11ty como en la practica.
https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizingyour-profile/managing-your-profile-readme
