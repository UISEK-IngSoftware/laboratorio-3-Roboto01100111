[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/TBhafgma)
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/vl4jljH6)
# 💻 Laboratorio 3: Mi Currículum Web

## Objetivo

Basándose en el Laboratorio 2. El presente laboratorio tiene como objetivo profundizar al estudiante al desarrollo web usnado Javascript, a través de la creacion una página web con el currículum vitae del estudiante.

---

## 📁 Estructura del proyecto

El proyecto debe contener al menos los siguientes archivos:


  ├── index.html <br>
  ├── styles.css <br>
  └── scripts.js <br>
  └── README.md <br>


---

## Instrucciones

### 1. Estructura básica (index.html)

Crear una página HTML que contenga:

- Un **título principal** con tu nombre completo (`<h1>`)
- Una **foto** tuya (opcional) usando la etiqueta `<img>`
- Una **descripción breve o perfil profesional** (`<p>`)
- Una **lista de habilidades** usando `<ul>` y `<li>`
- Sección de **educación** y **experiencia laboral**
- Enlaces a tus **redes sociales o correo electrónico** usando `<a href="...">`

### 2. Generando tu primer Javascript

Crear un archivo `scripts.js` y usa **id's (`id`)** para acciones a los siguientes elementos dom:

- Lista de habilidades: Cuando el usuario haga clic en el enlace de lista de habilidades. Estas se deberán desplegar u ocultar
- Este mismo criterio aplica para la lista de "Educación"
- Los estilos de cada sección señalada previamente deberá ajustarse para mejorar la navegabilidad

### 3. Conecta el Javascript con tu HTML

En tu archivo `index.html`, dentro de la etiqueta `<head>`, enlaza el archivo de estilos:

```html
 <script src="scripts.js"></script>
```

## Entrega del laboratorio
Clonar el repositorio (desde GitHub Classroom)

```bash
git clone <URL-del-repositorio>
cd <nombre-del-repositorio>
```

### 4. Configurar token de acceso (solo si es la primera vez)
- Dirigirse a a: https://github.com/settings/tokens
- Genera un token clásico con permisos para repositorios.
- Guarda el token en un sitio seguro, ya que se lo necesitará para autenticarse al hacer push.

### 5. ✅ Hacer commit y push de tus cambios
```bash
git add .
git commit -m "Laboratorio 3 terminado"
git push origin main
```
