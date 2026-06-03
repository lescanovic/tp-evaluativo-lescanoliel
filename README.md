# tp-evaluativo-lescanoliel

Desarrollamos una aplicación web SPA funcional y responsiva, se basa en una Tienda Online que Esta aplicación fue desarrollada utilizando Vue 3, TypeScript y Tailwind CSS. Su objetivo es simular una pequeña tienda online donde se pueden visualizar productos, buscar artículos, gestionar usuarios y administrar un carrito de compras.

El proyecto está basado en una arquitectura de componentes reutilizables, aplicando conceptos fundamentales de Vue como Props, Emits, reactividad, componentes padre-hijo, directivas y manejo de estado compartido.

# Funcionalidades Principales 

GESTIÓN DE PRODUCTO 

- Visualización de productos mediante tarjetas.
- Información detallada de cada producto:
- Nombre
- Descripción
- Precio
- Stock disponible
- Imagen
- Búsqueda dinámica de productos.
- Agregado de productos al carrito.


GESTIÓN DE USUARIO

- Creación de nuevos usuarios 
- Listtado de usuarios registrados
- Eliminacion de usuarios
- Navegació hacia vistas de detalle y edicion mediante Vue Router

CARRITO DE COMPRAS 

- Almacenamiento de productos seleccionados
- Manejo reactivo madiante Compisition API 
- Actualización automatica de la interfaz cuando cambia el contenido del carrito

--------------------------------------------------------------------------

# ESTRUCTURA GENERAL

      # Models
Cada interfaz cuenta con sus atributos y su tipo de datos 
---- Product
---- User
---- CartIem 

      # Data 
Simulan una base de datos
---- products.ts
---- users.ts
---- cart.ts

--------------------------------------------------------------------------

# FLUJO DE FUNCIONAMIENTO

1. La aplicación se inicia desde main.ts.
2. Vue monta App.vue.
3. App.vue muestra la barra de navegación y el contenido correspondiente mediante RouterView.
4. Los productos se cargan desde products.ts.
5. ProductList genera una tarjeta por cada producto.
6. ProductCard muestra la información y permite agregar productos al carrito.
7. SearchBar permite filtrar los productos visibles.
8. UserForm permite crear nuevos usuarios.
9. UserList muestra los usuarios registrados.
10. UserCard permite eliminarlos o navegar hacia sus vistas de detalle y edición.


--------------------------------------------------------------------------
 # CONCEPTOS DE VUE APLICADOS 
 Composition API.
 Props.
 Emits.
 Reactive State.
 Ref.
 Directivas Vue 'v-for' 'v-model' 'v-bind' 'v-on'.
 Componentes reutilizables.
 Comunicación Padre → Hijo.
 Comunicación Hijo → Padre.
 Vue Router.
 TypeScript.