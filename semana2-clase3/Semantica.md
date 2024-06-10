
**-- git stash --** Es un comando que todos los cambios locales se pueden descartar de una forma segura
**-- git stash --** con este comento se pueden recuperar los cambios descartados

**-- alias gcam="git commit --all --message"  --**

**-- git fetch --** pregunta al remoto si cuenta con cambios
**-- git pull origin main --** para descargar los cambios del remoto
**-- git push origin main --** sube los cambios hacia el remoto

# Qué es el HTML semántico?
## El esquema del documento HTML
en el siguiente sitio web, se puede validar la semantica de una pagina web [Validator w3d](https://validator.w3.org/nu/) y seleccionamos el **Check by (text input) y marcamos la opcion de _outline_**, podemos pegar nuestro HTML para su validación.


## Artículos y Secciones ¿Cúal usar y porque?

Un `<article>` es un "contenido" que tiene relación con otros "contenidos" a su alrededor.

una `<section>` con `<article>`s
un `<article>` con `<section>`s

**Los articulos pueden tener su propio encabezado y footer**
 `<header>` `<nav>`

  ```html
  <header>
    <h1>HTML Semántico</h1>
    <nav>
      <ul>
        <li><a href = "#">Home</a></li>
        <li><a href = "#">About</a></li>
        <li><a href = "#">Blog</a></li>
      </ul>
    </nav>
  <header>

```

## ¿Para qué usar divs en HTML?

Los `<div>` s se usan exclusivamente para la maquetación de contenido, no entregan ningún significado semántico, son "Invisibles!"

## times y address
```html
<time datetime="2024-06-07 19:00">7 de junio</time>

<address>Puedes contactar a <a href="mailto:micorro@micorre.com">El oso Perezoso</a></address>


```

## Los tags `figure`, `figcaption`, `picture` y `img`

imagenes que tengas relación con el articulo
```html
<figure>
  <img src="imagen.jpg" alt="Descripción de la imagen, no la figura">
  <figcaption> Elementos Semanticos en HTML </figcaption>
</figure>
```

## `<picture>`
