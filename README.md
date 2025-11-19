![Imagen del banner](https://github.com/PublicStaticFun/northwind-dj-react/blob/main/Imagenes/Portada4.png?raw=true)

# Sistema Northwind - React + PostgreSQL + Django
Este proyecto es una implementación moderna del clásico ejemplo empresarial Northwind, utilizando un stack Full Stack actual.

El backend está construido con **Django + Django REST Framework**, mientras que el frontend se desarrolla en React con un diseño moderno, comunicación vía API REST y manejo de estado con **Zustand**.

El objetivo principal es ofrecer una base sólida y profesional para un sistema de administración general, aplicable a proyectos reales de CRUD, gestión, dashboards o e-commerce educativo.

## Objetivo del proyecto
El propósito del proyecto es:
* Servir como plantilla educativa o base para sistemas administrativos modernos.
* Mostrar cómo estructurar una API profesional con DRF.
* Demostrar cómo consumir APIs desde React con una arquitectura limpia.
* Proveer una tabla dinámica que se adapta a cualquier modelo de base de datos.
* Enseñar buenas prácticas de organización full stack.

## Funciones
![Imagen del banner](https://github.com/PublicStaticFun/northwind-dj-react/blob/main/Imagenes/Codigo1.png?raw=true)
**Backend**
* Arquitectura basada en aplicaciones.
* Endpoints REST automáticos para cada tabla.
* Serializer y Viewsets con páginación integrada.
* Configurable mediante `.env` (SECRET_KEY, DEBUG, DATABASE_URL)
* Base de datos PostgreSQL compatible.

![Imagen del banner](https://github.com/PublicStaticFun/northwind-dj-react/blob/main/Imagenes/Codigo2.png?raw=true)
**Frontend**
* Interfaz moderna y responsive.
* Manejo de estado global con Zustand
* Peticiones API con Axios
* Tabla dinámica compatible con cualquier estructura recibida.
* Componentes organizados y reutilizables.

![Imagen del banner](https://github.com/PublicStaticFun/northwind-dj-react/blob/main/Imagenes/Codigo3.png?raw=true)
**Comunicación Full-Stack**
* Axios configurado vía archivo `client.ts` con entorno `.env`.
* Separación total del backend y frontend mediante `VITE_API_URL`.
* Estructura ideal para despliegues profesionales.

## Frameworks y tecnologías utilizadas
**Backend**
<div align="center">
  <img src="https://icongr.am/devicon/python-original.svg?size=128&color=currentColor" height="40" alt="python logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" height="40" alt="django logo"  />
   <img src="https://icongr.am/devicon/postgresql-original.svg?size=128&color=currentColor" height="40" alt="postgresql logo"  />
</div>

**Frontend**
<div align="center">
  <img src="https://icongr.am/devicon/react-original.svg?size=128&color=currentColor" height="40" alt="react logo"  />
  <img src="https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor" height="40" alt="typescript logo"  />
</div>

**Utilidades/DevOps**
<div align="center">
  <img src="https://icongr.am/devicon/git-original.svg?size=128&color=currentColor" height="40" alt="react logo"  />
</div>
